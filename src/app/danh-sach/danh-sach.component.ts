import { Component, OnInit, SimpleChanges, OnChanges, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GdkHttpClientService } from '@gdkmd/httpxhd';

@Component({
    selector: 'app-danh-sach',
    templateUrl: './danh-sach.component.html',
    styleUrls: ['./danh-sach.component.scss']
})
export class DanhSachComponent implements OnInit {
    total: number = 0;
    pageNumber: number = 1;
    pageSize: number = 20;
    param = '';
    data = [];
    url_mac_dinh = 'http://hoi-nguoi-mu.gdk.com.vn';
    ten_chuyen_muc = '';
    constructor(private route: ActivatedRoute, private router: Router, private gdkClient: GdkHttpClientService) {
        this.param = this.route.snapshot.params.id;
        // if(this.param != '123'){
        //     this.router.navigate([''])
        // }
    }
    ngOnInit() {
        this.param = this.route.snapshot.paramMap.get('id');
        this.route.paramMap.subscribe(params => {
            console.log(params['params'].id)
            this.param = params['params'].id;
            this.dsBaiViet();
        })
    }
    dsBaiViet() {
        this.gdkClient.queryPublicData({
            reqData: {
                reqid: '16b4568a251',
                parms: [this.param]
            }
        }).subscribe(s => {
            if (s.ok && s.data.length > 0) {
                this.total = s.data.length;
            } else { this.total = 0 }
        })
        this.gdkClient.queryPublicData({
            reqData: {
                reqid: '16b44938176',
                parms: [this.param, (this.pageNumber - 1) * this.pageSize, this.pageSize]
            }
        }).subscribe(s => {
            console.log(123131, s);
            if (s.ok && s.data.length > 0) {
                this.data = s.data;
                this.ten_chuyen_muc = s.data[0].ten;
            } else { this.data = []; this.router.navigate([''])}
        })
    }
}
