import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-hinh-anh',
    templateUrl: './hinh-anh.component.html',
    styleUrls: ['./hinh-anh.component.scss']
})
export class HinhAnhComponent implements OnInit,OnChanges {
    data = [];
    total: number = 0;
    pageNumber: number = 1;
    pageSize: number = 20;
    @Input('hinh_anh') hinh_anh;
    url_mac_dinh = 'http://hoi-nguoi-mu.gdk.com.vn';
    constructor() { }

    ngOnInit() {
    }
    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.data = this.hinh_anh;
        console.log(4564564,this.data);
        
    }

}
