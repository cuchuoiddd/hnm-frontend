import { Component, OnInit } from '@angular/core';
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
    tin_moi_nhat = {}
    constructor(private gdkClient: GdkHttpClientService) { }

    ngOnInit() {
        this.dsChuyenMuc();
        this.dsTinMoi();
        
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
            console.log(456, s);

            if (s.ok) {
                this.ds_tin_moi = s.data;
                this.tin_moi_nhat = s.data[0];
        console.log(4241234214,this.tin_moi_nhat);

            } else { this.ds_tin_moi = []; this.tin_moi_nhat = {}}
        })
    }
}
