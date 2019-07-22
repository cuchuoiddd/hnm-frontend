import { Component, OnInit } from '@angular/core';
import { GdkHttpClientService } from '@gdkmd/httpxhd';

@Component({
    selector: 'app-main-middle',
    templateUrl: './main-middle.component.html',
    styleUrls: ['./main-middle.component.scss']
})
export class MainMiddleComponent implements OnInit {
    thu_vien_hinh_anh = [
        {
            ten: '',
            bai_viet: { tieu_de: '', hinh_anh: '' },
            url: ''
        }
    ];
    chuyen_muc_khac = [];
    url_mac_dinh = 'http://hoi-nguoi-mu.gdk.com.vn';
    data = [];
    url = '';
    data_lienket = [];
    van_hoc_nghe_thuat = [];
    hinh_anh_active = 0;
    constructor(private gdkClient: GdkHttpClientService) { }

    ngOnInit() {
        // this.hinhAnh();
        this.dsChuyenMucKhac();
        this.lienKetWeb();
        this.vanHocNgheThuat();
    }
    hinhAnh() {
        this.gdkClient.queryPublicData({
            reqData: {
                reqid: '16b54162b1e'
            }
        }).subscribe(s => {
            if (s.ok && s.data.length > 0) {
                this.data = s.data;
                this.thu_vien_hinh_anh = [];
                this.url = s.data[0].url;
                this.thu_vien_hinh_anh.push(s.data[0]);
            }
            else {
                this.data = [];
                this.url = '';
                this.thu_vien_hinh_anh = [{ ten: 'THƯ VIỆN HÌNH ẢNH', bai_viet: { tieu_de: "Tiêu đề", hinh_anh: "mac_dinh" }, url: 'mac_dinh' }];
            }
        })
    }

    getHinhAnhActive(position) {
        this.thu_vien_hinh_anh = [];
        this.thu_vien_hinh_anh.push(this.data[position]);
    }
    prev() {
        if (this.hinh_anh_active == 0) {
            this.hinh_anh_active = this.data.length - 1;
        } else {
            this.hinh_anh_active--;
        }
        this.getHinhAnhActive(this.hinh_anh_active);

    }
    next() {
        if (this.hinh_anh_active == this.data.length - 1) {
            this.hinh_anh_active = 0;
        } else {
            this.hinh_anh_active++;
        }
        this.getHinhAnhActive(this.hinh_anh_active);

    }
    dsChuyenMucKhac() {
        this.gdkClient.queryPublicData({
            reqData: {
                reqid: '16b543df26c'
            }
        }).subscribe(s => {
            if (s.ok && s.data.length > 0) { this.chuyen_muc_khac = s.data } else { this.chuyen_muc_khac = [] }
        })
    }
    lienKetWeb() {
        this.gdkClient.queryPublicData({
            reqData: {
                reqid: '16bb731050a'
            }
        }).subscribe(s => {
            if (s.ok && s.data.length > 0) {
                this.data_lienket = s.data;
            } else { this.data_lienket = []; }
        })
    }
    vanHocNgheThuat() {
        this.gdkClient.queryPublicData({
            reqData: {
                reqid: '16c0dbbd0fc'
            }
        }).subscribe(s => { if (s.ok) { this.van_hoc_nghe_thuat = s.data } else {this.van_hoc_nghe_thuat = []} })
    }

}
