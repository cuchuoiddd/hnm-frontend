import { Component, OnInit, EventEmitter, Output, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
    selector: 'app-bai-viet',
    templateUrl: './bai-viet.component.html',
    styleUrls: ['./bai-viet.component.scss']
})
export class BaiVietComponent implements OnInit,OnChanges {
    data = [];
    total: number = 1;
    pageNumber: number = 1;
    pageSize: number = 20;
    ten_chuyen_muc = '';
    url_mac_dinh = 'http://hoi-nguoi-mu.gdk.com.vn';
    @Input('bai_viet') bai_viet;
    @Input('total') total_bai_viet;
    @Output() PageChange = new EventEmitter(); 
    constructor() { }
    ngOnInit() {
    }
    onPageChange(event) {
        this.PageChange.emit(event);
        // this.pageNumber = event.pageNumber;
    }
    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.data = this.bai_viet;
        this.total = this.total_bai_viet;
        this.ten_chuyen_muc = this.bai_viet[0].ten;
    }
}
