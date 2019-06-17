import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GdkHttpClientService } from '@gdkmd/httpxhd';
import { DomSanitizer } from '@angular/platform-browser';

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
    data = [];
    url_mac_dinh = 'http://hoi-nguoi-mu.gdk.com.vn';
    ten_chuyen_muc = '';
    @ViewChild('bai_viet') bai_viet;
    @ViewChild('hinh_anh') hinh_anh;
    @ViewChild('video') video;
    @ViewChild('audio') audio;
    @ViewChild('download') download;
    @ViewChild('chi_tiet') chi_tiet;
    action_bai_viet: boolean = false;
    action_hinh_anh: boolean = false;
    action_video: boolean = false;
    action_audio: boolean = false;
    action_download: boolean = false;
    action_chi_tiet: boolean = false;

    constructor(private route: ActivatedRoute, private router: Router, private gdkClient: GdkHttpClientService, private sanitizer: DomSanitizer) {
        // this.param = this.route.snapshot.params.id;
        // if(this.param != '123'){
        //     this.router.navigate([''])
        // }
    }
    ngOnInit() {
        this.dsBaiViet();
        this.param = this.route.snapshot.paramMap.get('id');
        this.route.paramMap.subscribe(params => {
            this.resetData();
            this.param = params['params'].id;
            this.dsBaiViet();
            console.log(8888888,this.param);
            
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
                reqid: '16b44938176',
                parms: [this.param, (this.pageNumber - 1) * this.pageSize, this.pageSize]
            }
        }).subscribe(s => {
            console.log(56456464,s.data);
            console.log(123,this.param,this.pageNumber,this.pageSize);
            
            if (s.ok && s.data.length > 0) {
                this.ten_chuyen_muc = s.data[0].tieu_de;
                const phan_loai = s.data[0].phan_loai;
                switch (phan_loai) {
                    case 'bai_viet':
                        this.action_bai_viet = true;
                        setTimeout(() => {
                            this.bai_viet.ten_chuyen_muc = s.data[0].tieu_de;
                            this.bai_viet.data = s.data;
                            this.bai_viet.total = this.total;
                        });
                        break;
                    case 'hinh_anh':
                        this.action_hinh_anh = true;
                        setTimeout(() => {
                            this.hinh_anh.data = s.data;
                            this.hinh_anh.total = this.total;
                        });
                        break;
                    case 'video':
                        this.action_video = true;
                        setTimeout(() => {
                            this.video.data = s.data.map(m => { m['video'] = this.sanitizer.bypassSecurityTrustResourceUrl(m.bai_viet.video); return m} )
                            this.video.total = this.total;
                            this.video.tin_moi = s.data[0];
                        });
                        break;
                    case "audio":
                        this.action_audio = true;
                        setTimeout(() => {
                            this.audio.data = s.data.map(m => { m['audio'] = this.sanitizer.bypassSecurityTrustResourceUrl(m.bai_viet.video); return m} )
                            this.audio.total = this.total;
                        });
                        break;
                    case 'link_tai':
                        this.action_download = true;
                        setTimeout(() => {
                            this.download.data = s.data;
                            this.download.total = this.total;
                            this.download.tin_moi = s.data;
                        });
                        break;
                    case 'gioi_thieu':
                        console.log(56456464,s.data);
                        
                        this.action_chi_tiet = true;
                        setTimeout(() => {
                            this.chi_tiet.tin_moi = s.data;
                        });
                        break;
                    default:
                        this.router.navigate(['']);
                        break;
                }
            } else { this.data = []; }
        });
    }
    resetData() {
        this.action_bai_viet = false;
        this.action_hinh_anh = false;
        this.action_video = false;
        this.action_audio = false;
        this.action_download = false;
        this.action_chi_tiet = false;
    }
    ngOnDestroy() {

    }
    PageChange(){
        this.dsBaiViet();
    }
}
