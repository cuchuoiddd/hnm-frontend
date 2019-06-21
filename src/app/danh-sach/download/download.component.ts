import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-download',
    templateUrl: './download.component.html',
    styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit, OnChanges {
    data = [];
    total: number = 1;
    pageNumber: number = 1;
    pageSize: number = 20;
    @Input('download') data_download;
    @Input('total') total_download;
    @Output() PageChange = new EventEmitter();
    constructor() { }

    ngOnInit() {
    }
    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.data = this.data_download;
        this.total = this.total_download;
    }
    onPageChange(event) {
        this.PageChange.emit(event);
    }

}
