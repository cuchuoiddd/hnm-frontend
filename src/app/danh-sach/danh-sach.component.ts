import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-danh-sach',
    templateUrl: './danh-sach.component.html',
    styleUrls: ['./danh-sach.component.scss']
})
export class DanhSachComponent implements OnInit {

    param = '';
    constructor(private route: ActivatedRoute,private router: Router) {
        this.param = this.route.snapshot.params.id;
        if(this.param != '123'){
            this.router.navigate([''])
        }
    }

    ngOnInit() {
    }

}
