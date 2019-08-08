import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { GdkHttpClientService } from '@gdkmd/httpxhd';

@Component({
    selector: 'app-audio',
    templateUrl: './audio.component.html',
    styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit, OnChanges {
    data = [];
    total: number = 1;
    pageNumber: number = 1;
    pageSize: number = 10;
    search_category = '';
    search_author = '';
    @Input('audio') audio;
    @Input('type') type;
    @Input('total') total_audio;
    @Output() PageChange = new EventEmitter(); 
    url_mac_dinh = 'http://hoi-nguoi-mu.gdk.com.vn';
    constructor(private gdkClient: GdkHttpClientService, sanitizer: DomSanitizer) { }

    ngOnInit() {
    }
    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        // this.data = this.audio.map(m => { m['audio'] = this.sanitizer.bypassSecurityTrustResourceUrl(m.bai_viet.url); return m });
        this.data = this.audio;
        this.total = this.total_audio;
    }
    onPageChange(event) {
        this.PageChange.emit(event);
        // this.pageNumber = event.pageNumber;
        
    }
}
