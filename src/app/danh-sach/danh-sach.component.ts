import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GdkHttpClientService } from '@gdkmd/httpxhd';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-danh-sach',
    templateUrl: './danh-sach.component.html',
    styleUrls: ['./danh-sach.component.scss']
})
export class DanhSachComponent implements OnInit, OnDestroy {
    total: number = 0;
    pageNumber: number = 1;
    pageSize: number = 20;
    param = '';
    data_download = [];
    data_bai_viet = [];
    data_hinh_anh = [];
    data_video = [];
    data_audio = [];
    data_chi_tiet = [];
    data_chuyen_muc = [];
    action_bai_viet: boolean = false;
    action_hinh_anh: boolean = false;
    action_video: boolean = false;
    action_audio: boolean = false;
    action_download: boolean = false;
    action_chi_tiet: boolean = false;
    action_chuyen_muc: boolean = false;

    constructor(private route: ActivatedRoute, private router: Router, private gdkClient: GdkHttpClientService, private meta: Meta, private titleService: Title) {
        this.param = this.route.snapshot.params.id;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.resetData();
            this.param = params['params'].id;
            this.dsBaiViet();
        })
    }
    dsBaiViet() {
        this.gdkClient.queryPublicData({
            reqData: {
                reqid: '16b4568a251',
                parms: [this.param]
            }
        }).subscribe(s => {
            if (s.ok && s.data.length > 0) {
                this.total = s.data.length;

            } else { this.total = 0 }
        })
        this.gdkClient.queryPublicData({
            reqData: {
                reqid: '16b6e1a4569',
                parms: [this.param]
            }
        }).subscribe(sc => {
            if (sc.ok && sc.data.length > 0) {
                if (sc.data[0].phan_loai == 'mac_dinh') {
                    this.gdkClient.queryPublicData({
                        reqData: {
                            reqid: '16b6dbadb97',
                            parms: [this.param]
                        }
                    }).subscribe(s => {
                        if (s.ok && s.data.length > 0) {
                            this.action_chuyen_muc = true;
                            this.data_chuyen_muc = s.data;
                            const title = s.data[0].ten || '';
                            const mo_ta = s.data[0].mo_ta || '';
                            this.titleService.setTitle(title);
                            this.meta.updateTag({ name: "description", content: mo_ta });
                        }
                    })
                } else {
                    this.gdkClient.queryPublicData({
                        reqData: {
                            reqid: '16b44938176',
                            parms: [this.param, (this.pageNumber - 1) * this.pageSize, this.pageSize]
                        }
                    }).subscribe(s => {
                        if (s.ok && s.data.length > 0) {
                            const phan_loai = s.data[0].phan_loai;
                            switch (phan_loai) {
                                case 'bai_viet':
                                    this.action_bai_viet = true;
                                    this.data_bai_viet = s.data;
                                    const title_bai_viet = s.data[0].ten || '';
                                    const mo_ta_bai_viet = s.data[0].mo_ta || '';
                                    this.titleService.setTitle(title_bai_viet);
                                    this.meta.updateTag({ name: "description", content: mo_ta_bai_viet });
                                    break;
                                case 'hinh_anh':
                                    this.action_hinh_anh = true;
                                    this.data_hinh_anh = s.data;
                                    break;
                                case 'video':
                                    this.action_video = true;
                                    this.data_video = s.data;
                                    break;
                                case "audio":
                                    this.action_audio = true;
                                    this.data_audio = s.data;
                                    break;
                                case 'link_tai':
                                    const title_link_tai = s.data[0].ten|| '';
                                    const mo_ta_link_tai = s.data[0].mo_ta || '';
                                    this.titleService.setTitle(title_link_tai);
                                    this.meta.updateTag({ name: "description", content: mo_ta_link_tai });
                                    this.action_download = true;
                                    this.data_download = s.data || [];
                                    break;
                                case 'gioi_thieu':
                                    const title = s.data[0].bai_viet.tieu_de || '';
                                    const mo_ta = s.data[0].bai_viet.mo_ta || '';
                                    this.titleService.setTitle(title);
                                    this.meta.updateTag({ name: "description", content: mo_ta });
                                    this.action_chi_tiet = true;
                                    this.data_chi_tiet = s.data;
                                    break;
                                case 'khac':
                                    this.action_bai_viet = true;
                                    this.data_bai_viet = s.data;
                                    const title_khac = s.data[0].ten || '';
                                    const mo_ta_khac = s.data[0].mo_ta || '';
                                    this.titleService.setTitle(title_khac);
                                    this.meta.updateTag({ name: "description", content: mo_ta_khac });
                                    break;
                                default:
                                    this.router.navigate(['']);
                                    break;
                            }
                        } else { }
                    });
                }
            }
        })
    }
    resetData() {
        this.action_bai_viet = false;
        this.action_hinh_anh = false;
        this.action_video = false;
        this.action_audio = false;
        this.action_download = false;
        this.action_chi_tiet = false;
        this.action_chuyen_muc = false;
    }
    ngOnDestroy() {

    }
    onPageChange(event) {
        this.pageNumber = event.pageNumber;
        this.dsBaiViet();
    }
}
