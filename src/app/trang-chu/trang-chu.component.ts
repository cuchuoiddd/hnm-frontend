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
    tin_moi_nhat = [{
        thuoc_chuyen_muc:{url :''},
        url:'',
        hinh_anh:'',
        tieu_de:'',
        mo_ta:''
    }];
    min_height = 0;
    @ViewChild('heightScreen') heightScreen;

    constructor(private gdkClient: GdkHttpClientService) { }

    ngOnInit() {
        this.dsChuyenMuc();
        this.dsTinMoiNhat();
        setTimeout(() => {
            this.min_height = this.heightScreen.nativeElement.offsetHeight;
        },1000);
        
    }
    dsChuyenMuc() {
        this.gdkClient.queryPublicData({
            reqData: {
                reqid: '16b444ff422'
            }
        }).subscribe(s => {
            if (s.ok) {
                this.ds_chuyen_muc = s.data;
            } else { this.ds_chuyen_muc = []; }
        })
    }
    dsTinMoiNhat() {
        this.gdkClient.queryPublicData({
            reqData: {
                reqid: '16b44583d45'
            }
        }).subscribe(s => {
            if (s.ok && s.data.length > 0) {
                this.ds_tin_moi = s.data;
                this.tin_moi_nhat = s.data;
            } else { this.ds_tin_moi = []; 
                    this.tin_moi_nhat = [{
                        thuoc_chuyen_muc:{url :''},
                        url:'',
                        hinh_anh:'',
                        tieu_de:'',
                        mo_ta:''
                }]
        }
        })
    }
}
