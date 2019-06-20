import { Component, OnInit } from '@angular/core';
import { GdkHttpClientService } from '@gdkmd/httpxhd';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-chi-tiet-bai-viet',
    templateUrl: './chi-tiet-bai-viet.component.html',
    styleUrls: ['./chi-tiet-bai-viet.component.scss']
})
export class ChiTietBaiVietComponent implements OnInit {
    url_mac_dinh = 'http://hoi-nguoi-mu.gdk.com.vn';
    param_id = '';
    param_chuyen_muc = '';
    data = [];
    constructor(private route: ActivatedRoute, private router: Router, private gdkClient: GdkHttpClientService) {}

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.param_id = params['params'].id;
            this.param_chuyen_muc = params['params'].chuyen_muc;
            this.chiTietBaiViet();
        })
    }
    chiTietBaiViet() {
        this.gdkClient.queryPublicData({
            reqData: {
                reqid: '16b54dfd18f',
                parms: [this.param_id, this.param_chuyen_muc]
            }
        }).subscribe(s => {
            if (s.ok && s.data.length > 0) {
                this.data = s.data;
            } else this.data = [];
        })
    }
}
