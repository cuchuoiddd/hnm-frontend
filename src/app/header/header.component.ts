import { Component, OnInit } from '@angular/core';
import { GdkHttpClientService } from '@gdkmd/httpxhd';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    data_menu = [];
    data = [{
        banner: ''
    }];
    url_mac_dinh = 'http://hoi-nguoi-mu.gdk.com.vn';
    constructor(private gdkClient: GdkHttpClientService) { }

    ngOnInit() {
        this.test();
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
    test() {
        this.gdkClient.queryPublicData({
            reqData: {
                reqid: '16b40b7fcea'
            }
        }).subscribe(s => {
            if (s.ok) {
                this.data_menu = this.buildMenu(s.data);
            }
        })
    }
    show_sub_menu(id) {
        var x = document.getElementById(id);
        if (x) {
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }

    }
    isShowMenu(event) {
        var y = document.getElementById("menu-mobile").getAttribute("aria-expanded");
        if (y == 'true') {
            document.getElementById('menu-mobile').click()
        }
    }
}
