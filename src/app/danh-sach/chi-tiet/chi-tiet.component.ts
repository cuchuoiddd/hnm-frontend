import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GdkHttpClientService } from '@gdkmd/httpxhd';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-chi-tiet',
    templateUrl: './chi-tiet.component.html',
    styleUrls: ['./chi-tiet.component.scss']
})
export class ChiTietComponent implements OnInit {
    tin_moi = [];
    constructor() { }
    ngOnInit() {
        
    }
    

}
