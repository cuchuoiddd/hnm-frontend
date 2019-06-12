import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hinh-anh',
    templateUrl: './hinh-anh.component.html',
    styleUrls: ['./hinh-anh.component.scss']
})
export class HinhAnhComponent implements OnInit {
    data = [];
    total: number = 0;
    pageNumber: number = 1;
    pageSize: number = 20;
    url_mac_dinh = 'http://hoi-nguoi-mu.gdk.com.vn';
    constructor() { }

    ngOnInit() {
    }

}
