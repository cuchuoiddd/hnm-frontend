import { Component, OnInit, Input, SimpleChanges, OnChanges, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GdkHttpClientService } from '@gdkmd/httpxhd';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-chi-tiet',
    templateUrl: './chi-tiet.component.html',
    styleUrls: ['./chi-tiet.component.scss']
})
export class ChiTietComponent implements OnInit, OnChanges {
    data = [];
    tieu_de = 'adsf';
    noi_dung = 'dsfg';
    @Input('chi_tiet') chi_tiet;
    constructor() { }
    ngOnInit() {
    }
    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.data = this.chi_tiet;
        this.tieu_de = this.chi_tiet[0].ten;
        this.noi_dung = this.chi_tiet[0].bai_viet.noi_dung;
    }
}
