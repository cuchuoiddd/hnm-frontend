import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-audio',
    templateUrl: './audio.component.html',
    styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit,OnChanges {
    data = [];
    total: number = 0;
    pageNumber: number = 1;
    pageSize: number = 20;
    @Input('audio') audio;
    @Input('type') type;
    url_mac_dinh = 'http://hoi-nguoi-mu.gdk.com.vn';
    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit() {
        console.log(7897897789,this.data);
        
    }
    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        // this.data = this.audio.map(m => { m['audio'] = this.sanitizer.bypassSecurityTrustResourceUrl(m.bai_viet.url); return m });
        this.data = this.audio;
    }
}
