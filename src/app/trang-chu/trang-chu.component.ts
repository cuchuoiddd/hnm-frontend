import { Component, OnInit, ViewChild } from '@angular/core';
import { GdkHttpClientService } from '@gdkmd/httpxhd';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-trang-chu',
    templateUrl: './trang-chu.component.html',
    styleUrls: ['./trang-chu.component.scss']
})
export class TrangChuComponent implements OnInit {

    ds_chuyen_muc = [];
    ds_tin_moi = [];
    url_mac_dinh = 'http://hoi-nguoi-mu.gdk.com.vn';
    tin_noi_bat = [];
    min_height = 0;
    @ViewChild('heightScreen') heightScreen;

    constructor(private gdkClient: GdkHttpClientService, private meta: Meta, private titleService: Title) { }

    ngOnInit() {
        this.dsChuyenMuc();
        this.dsTinMoiNhat();
        this.tinNoiBat();
        setTimeout(() => {
            this.min_height = this.heightScreen.nativeElement.offsetHeight;
        }, 1000);
        this.titleService.setTitle('Hội người mù Việt Nam');
        this.meta.updateTag({ name: "description", content: 'Hội người mù Việt Nam' });
    }
    dsChuyenMuc() {
        this.gdkClient.queryPublicData({
            reqData: {
                reqid: '16bbbfcbe03'
                // reqid:'16b91ec0e98'
            }
        }).subscribe(s => {
            const aaa = this.buildMenu(s.data)
            if (s.ok) {
                this.ds_chuyen_muc = this.buildMenu(s.data);
            } else { this.ds_chuyen_muc = []; }
        })
    }
    buildMenu(arrs: any[], cap: string = 'mac-dinh'): any[] {
        let rs = [];
        let rs_con = [];
        for (const item of arrs) {
            if (item.cap === cap) {
                rs.push(item);
            } else {
                rs_con.push(item);
            }
        }
        if (rs_con.length > 0) {
            for (let item of rs) {
                const child = this.buildMenu(rs_con, item.id);
                if (child.length > 0) {
                    item.children = child;
                }
            }
        }
        return rs;
    };
    tinNoiBat() {
        this.gdkClient.queryPublicData({
            reqData: {
                reqid: '16c703ba4e2'
            }
        }).subscribe(s => {
            if (s.ok && s.data.length > 0) {
                this.tin_noi_bat = s.data;
            } else { this.tin_noi_bat = [] }
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
            } else {
                this.ds_tin_moi = [];
            }
        })
    }
}
