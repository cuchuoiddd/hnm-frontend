import { Component, OnInit } from '@angular/core';
import { GdkHttpClientService } from '@gdkmd/httpxhd';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    data_menu = [];
    constructor(private gdkClient: GdkHttpClientService) { }

    ngOnInit() {
        this.test();
    }
    buildMenu(arrs: any[], cap: string = '1'): any[] {
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
    test() {
        this.gdkClient.queryPublicData({
            reqData: {
                reqid: '16b40b7fcea'
            }
        }).subscribe(s => {
            console.log(123123, s);
            if (s.ok) {
                this.data_menu = this.buildMenu(s.data);
                console.log(this.buildMenu(s.data))
            }
        })
    }
}
