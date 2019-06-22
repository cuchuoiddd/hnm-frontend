import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
    selector: 'app-chuyen-muc',
    templateUrl: './chuyen-muc.component.html',
    styleUrls: ['./chuyen-muc.component.scss']
})
export class ChuyenMucComponent implements OnInit,OnChanges {

    data = [];
    url = '';
    @Input('chuyen_muc') chuyen_muc;
    constructor() { }

    ngOnInit() {
    }
    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.data = this.chuyen_muc;
    }

}
