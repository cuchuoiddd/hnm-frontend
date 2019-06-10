import { Component, OnInit } from '@angular/core';
import { GdkHttpClientService } from '@gdkmd/httpxhd';

@Component({
    selector: 'app-trang-chu',
    templateUrl: './trang-chu.component.html',
    styleUrls: ['./trang-chu.component.scss']
})
export class TrangChuComponent implements OnInit {

    constructor(private gdkClient: GdkHttpClientService) { }

    ngOnInit() {
    }
    getTimMoiNhat() {
        this.gdkClient.queryData({
            reqData: {
                reqid: ''
            }
        }).subscribe(s => {
            
        })
    }
}
