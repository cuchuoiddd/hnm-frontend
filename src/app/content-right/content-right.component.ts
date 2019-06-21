import { Component, OnInit } from '@angular/core';
import { GdkHttpClientService } from '@gdkmd/httpxhd';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-content-right',
    templateUrl: './content-right.component.html',
    styleUrls: ['./content-right.component.scss']
})
export class ContentRightComponent implements OnInit {
    ds_video = [];
    url_video = '';
    safeSrc: SafeResourceUrl;
    constructor(private gdkClient: GdkHttpClientService,private sanitizer:DomSanitizer) { }

    ngOnInit() {
        this.dsVideo();
    }
    dsVideo() {
        this.gdkClient.queryPublicData({
            reqData: {
                reqid: '16b53bc4101'
            }
        }).subscribe(s => {
            if (s.ok && s.data.length > 0) {
                this.ds_video = s.data;
                this.url_video = s.data[0].url;
                const video = s.data[0].bai_viet.video;
                this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(video);
            } else { this.ds_video = []; this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/yaT3_WFkvI4')}
        })
    }
    clickVideo(item){
        this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(item.bai_viet.video);
    }

}
