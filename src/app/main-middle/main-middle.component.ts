import { Component, OnInit } from '@angular/core';
import { GdkHttpClientService } from '@gdkmd/httpxhd';

@Component({
    selector: 'app-main-middle',
    templateUrl: './main-middle.component.html',
    styleUrls: ['./main-middle.component.scss']
})
export class MainMiddleComponent implements OnInit {
    thu_vien_hinh_anh = {
        ten: '',
        bai_viet: { tieu_de: '', hinh_anh: '' }
    };
    chuyen_muc_khac = [];
    url_mac_dinh = 'http://hoi-nguoi-mu.gdk.com.vn';
    constructor(private gdkClient: GdkHttpClientService) { }

    ngOnInit() {
        this.hinhAnh();
        this.dsChuyenMucKhac();
    }
    hinhAnh() {
        this.gdkClient.queryPublicData({
            reqData: {
                reqid: '16b54162b1e'
            }
        }).subscribe(s => {
            console.log(4234234, s);

            if (s.ok && s.data.length > 0) { this.thu_vien_hinh_anh = s.data[0] }
            else {
                this.thu_vien_hinh_anh = { ten: 'THƯ VIỆN HÌNH ẢNH', bai_viet: { tieu_de: "Tiêu đề", hinh_anh: "mac_dinh" } }
                console.log(this.thu_vien_hinh_anh.bai_viet.tieu_de);

            }
        })
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

}
