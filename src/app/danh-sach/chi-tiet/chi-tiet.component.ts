import { Component, OnInit, AfterViewChecked } from '@angular/core';

@Component({
    selector: 'app-chi-tiet',
    templateUrl: './chi-tiet.component.html',
    styleUrls: ['./chi-tiet.component.scss']
})
export class ChiTietComponent implements OnInit,AfterViewChecked {
    tin_moi = {};
    constructor() { }
    ngAfterViewChecked(): void {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
        console.log('123123123 :', this.tin_moi);
    }
    ngOnInit() {
    }

}
