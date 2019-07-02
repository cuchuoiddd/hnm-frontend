import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GdkHttpClientService } from '@gdkmd/httpxhd';
import { Meta, Title, DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-chi-tiet-video',
    templateUrl: './chi-tiet-video.component.html',
    styleUrls: ['./chi-tiet-video.component.scss']
})
export class ChiTietVideoComponent implements OnInit {

    id = '';
    param_chuyen_muc = '';
    title = '';
    tac_gia = '';
    the_loai = '';
    data = [];
    chi_tiet_video = null;
    constructor(
        private route: ActivatedRoute,
        private gdkClient: GdkHttpClientService,
        private meta: Meta,
        private titleService: Title,
        private sanitizer: DomSanitizer
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.id = params['params'].id;
            this.param_chuyen_muc = params['params'].chuyen_muc;
        })
        this.chiTietBaiViet();
    }
    chiTietBaiViet() {
        this.gdkClient.queryPublicData({
            reqData: {
                reqid: '16b54dfd18f',
                parms: [this.id, this.param_chuyen_muc]
            }
        }).subscribe(s => {
            if (s.ok && s.data.length > 0) {
                this.title = s.data[0].tieu_de || '';
                const mo_ta = s.data[0].mo_ta || '';
                this.titleService.setTitle(this.title);
                this.meta.updateTag({ name: "description", content: mo_ta });
                this.data = s.data;
                
            } else this.data = [];
        })
    }
    fnXem(item) {
        this.chi_tiet_video = this.sanitizer.bypassSecurityTrustResourceUrl(item.link + '?autoplay=1');
    }

}
