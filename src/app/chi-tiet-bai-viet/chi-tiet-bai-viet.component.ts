import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GdkHttpClientService } from '@gdkmd/httpxhd';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-chi-tiet-bai-viet',
    templateUrl: './chi-tiet-bai-viet.component.html',
    styleUrls: ['./chi-tiet-bai-viet.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ChiTietBaiVietComponent implements OnInit {
    url_mac_dinh = 'http://hoi-nguoi-mu.gdk.com.vn';
    param_id = '';
    param_chuyen_muc = '';
    data = [];
    constructor(private route: ActivatedRoute, private gdkClient: GdkHttpClientService,private meta: Meta , private titleService: Title) {}

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
                const title = s.data[0].tieu_de || '';
                const mo_ta = s.data[0].mo_ta || '';
                this.titleService.setTitle(title);
                this.meta.updateTag({ name: "description", content: mo_ta });
                this.data = s.data;
            } else this.data = [];
        })
    }
}
