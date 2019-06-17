import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
    data = [];
    total: number = 0;
    pageNumber: number = 1;
    pageSize: number = 50;
    tin_moi = {};
    url_mac_dinh = 'http://hoi-nguoi-mu.gdk.com.vn';
    constructor() { }
    ngOnInit() {
    }
}