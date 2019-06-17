import { Component, OnInit, AfterViewChecked, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-bai-viet',
    templateUrl: './bai-viet.component.html',
    styleUrls: ['./bai-viet.component.scss']
})
export class BaiVietComponent implements OnInit, AfterViewChecked {
    data = [];
    total: number = 0;
    pageNumber: number = 1;
    pageSize: number = 20;
    ten_chuyen_muc = '';
    @Output() PageChange = new EventEmitter(); 
    constructor() { }
    ngAfterViewChecked(): void {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
    }
    ngOnInit() {
    }
    onPageChange(event) {
        this.pageNumber = event.pageNumber;
    }
}
