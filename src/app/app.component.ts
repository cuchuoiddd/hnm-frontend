import { Component, OnInit, ViewChild } from '@angular/core';
import { GdkHttpClientService } from '@gdkmd/httpxhd';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    @ViewChild('header') header;
    @ViewChild('footer') footer;
    title = 'hnm-frontend';
    ngay:any;
    thang:any;
    nam:any;
    constructor(private gdkClient: GdkHttpClientService) {}

    ngOnInit() {
        this.getCauHinh();
        const DateObj = new Date();
        this.ngay = ('0' + DateObj.getDate()).slice(-2);
        this.thang = ('0' + (DateObj.getMonth() + 1)).slice(-2);
        this.nam = DateObj.getFullYear();
    }
    getCauHinh() {
        this.gdkClient.queryPublicData({
            reqData: {
                reqid: '16b4b1324cb'
            }
        }).subscribe(s => {
            console.log(123123121112313131, s);

            if (s.ok) {
                this.header.data = s.data;
                this.footer.data = s.data;
            }
        })
    }
}
