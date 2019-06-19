import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-bai-viet',
    templateUrl: './bai-viet.component.html',
    styleUrls: ['./bai-viet.component.scss']
})
export class BaiVietComponent implements OnInit {
    data = [];
    total: number = 0;
    pageNumber: number = 1;
    pageSize: number = 20;
    ten_chuyen_muc = '';
    url_mac_dinh = 'http://hoi-nguoi-mu.gdk.com.vn';
    @Output() PageChange = new EventEmitter(); 
    constructor() { }
    ngOnInit() {
    }
    onPageChange(event) {
        this.pageNumber = event.pageNumber;
    }
}
