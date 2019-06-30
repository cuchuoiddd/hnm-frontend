import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit,OnChanges {
    data = [];
    total: number = 0;
    pageNumber: number = 1;
    pageSize: number = 50;
    @Input('video') video;
    @Input('type') type;
    url_mac_dinh = 'http://hoi-nguoi-mu.gdk.com.vn';
    constructor(private sanitizer: DomSanitizer) { }
    ngOnInit() {
    }
    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.data = this.video.map(m => { m['video'] = this.sanitizer.bypassSecurityTrustResourceUrl(m.bai_viet.url); return m });
    }
}