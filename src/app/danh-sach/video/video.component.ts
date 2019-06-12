import { Component, OnInit, AfterViewChecked } from '@angular/core';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, AfterViewChecked {
    data = [];
    total: number = 0;
    pageNumber: number = 1;
    pageSize: number = 20;
    tin_moi = {};
    url_mac_dinh = 'http://hoi-nguoi-mu.gdk.com.vn';
    constructor() { }
    ngAfterViewChecked(): void {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
        if(this.data.length >0){
            console.log(999999999, this.data);
        }
    }
    ngOnInit() {
    }
}