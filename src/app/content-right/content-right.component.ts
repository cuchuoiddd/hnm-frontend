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
                const video = s.data[0].bai_viet.video;
                this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(video);
                // console.log(234234,this.video.changingThisBreaksApplicationSecurity);
                
            } else { this.ds_video = []; }
        })
    }

}
