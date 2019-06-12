import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-audio',
    templateUrl: './audio.component.html',
    styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit {
    data = [];
    total: number = 0;
    pageNumber: number = 1;
    pageSize: number = 20;
    url_mac_dinh = 'http://hoi-nguoi-mu.gdk.com.vn';
    constructor() { }

    ngOnInit() {
    }

}
