import { Component, OnInit, ViewChild } from '@angular/core';
import { GdkHttpClientService } from '@gdkmd/httpxhd';

@Component({
    selector: 'app-trang-chu',
    templateUrl: './trang-chu.component.html',
    styleUrls: ['./trang-chu.component.scss']
})
export class TrangChuComponent implements OnInit {

    ds_chuyen_muc = [];
    ds_tin_moi = [];
    url_mac_dinh = 'http://hoi-nguoi-mu.gdk.com.vn';
    tin_moi_nhat = {};
    min_height = 0;
    @ViewChild('heightScreen') heightScreen;

    constructor(private gdkClient: GdkHttpClientService) { }

    ngOnInit() {
        this.dsChuyenMuc();
        this.dsTinMoi();
        setTimeout(() => {
            this.min_height = this.heightScreen.nativeElement.offsetHeight;
            console.log(1231321,this.heightScreen);
            console.log(1231321,this.heightScreen.nativeElement.offsetHeight);
        },1000);
        
    }
    dsChuyenMuc() {
        this.gdkClient.queryPublicData({
            reqData: {
                reqid: '16b444ff422'
            }
        }).subscribe(s => {
            console.log(123, s);

            if (s.ok) {
                this.ds_chuyen_muc = s.data;
            } else { this.ds_chuyen_muc = []; }
        })
    }
    dsTinMoi() {
        this.gdkClient.queryPublicData({
            reqData: {
                reqid: '16b44583d45'
            }
        }).subscribe(s => {
            if (s.ok) {
                this.ds_tin_moi = s.data;
                this.tin_moi_nhat = s.data[0];
            } else { this.ds_tin_moi = []; this.tin_moi_nhat = {}}
        })
    }
}
