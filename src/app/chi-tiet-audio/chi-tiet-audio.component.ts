import { Component, OnInit } from '@angular/core';
import { GdkHttpClientService } from '@gdkmd/httpxhd';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
import { Meta, Title, DomSanitizer } from '@angular/platform-browser';
@Component({
    selector: 'app-chi-tiet-audio',
    templateUrl: './chi-tiet-audio.component.html',
    styleUrls: ['./chi-tiet-audio.component.scss']
})
export class ChiTietAudioComponent implements OnInit {

    id = '';
    param_chuyen_muc = '';
    title = '';
    tac_gia = '';
    the_loai = '';
    ds_audio = [];
    chi_tiet_audio = null;
    constructor(
        private route: ActivatedRoute,
        private gdkClient: GdkHttpClientService,
        private meta: Meta,
        private titleService: Title,
        private sanitizer: DomSanitizer) { }

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
                this.tac_gia = s.data[0].tac_gia || '';
                this.the_loai = s.data[0].the_loai || '';
                const mo_ta = s.data[0].mo_ta || '';
                this.titleService.setTitle(this.title);
                this.meta.updateTag({ name: "description", content: mo_ta });
                this.ds_audio = s.data[0].link;
                // this.ds_audio = s.data[0].link.map(m=>{return{title:m.title,link:this.sanitizer.bypassSecurityTrustResourceUrl(m.link)}});
                console.log(79877,s.data, this.tac_gia,this.the_loai);

            } else this.ds_audio = [];
        })
    }
    fnDoc(item){
        this.chi_tiet_audio = this.sanitizer.bypassSecurityTrustResourceUrl(item.link+'?autoplay=1');
    }

}
