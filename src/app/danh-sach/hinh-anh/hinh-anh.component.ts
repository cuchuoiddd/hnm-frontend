import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GdkHttpClientService } from '@gdkmd/httpxhd';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-hinh-anh',
    templateUrl: './hinh-anh.component.html',
    styleUrls: ['./hinh-anh.component.scss']
})
export class HinhAnhComponent implements OnInit,OnChanges {
    data = [];
    ds_ha = [];
    total: number = 0;
    ten_ds = '';
    pageNumber: number = 1;
    pageSize: number = 10;
    id = '';
    @Input('hinh_anh') hinh_anh;
    @Input('type') type;
    url_mac_dinh = 'http://hoi-nguoi-mu.gdk.com.vn';
    constructor(
        private route: ActivatedRoute,
        private gdkClient: GdkHttpClientService,
        private meta: Meta,
        private titleService: Title,
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.id = params['params'].id;
        })
        this.dsHinhAnh();
    }
    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.data = this.hinh_anh;
    }
    dsHinhAnh(){

        this.gdkClient.queryPublicData({
            reqData:{
                reqid:'16c70d1f514',
                parms:[this.id]
            }
        }).subscribe(s=>{
            if(s.ok){
                this.total = s.data.length;
            }
        })
            
        this.gdkClient.queryPublicData({
            reqData:{
                reqid:'16bacb0eedb',
                parms:[this.id,(this.pageNumber-1)*this.pageSize,this.pageSize]
            }
        }).subscribe(s=>{
            if(s.ok && s.data.length>0){
                this.ds_ha = s.data;
                this.ten_ds = s.data[0].ten
            } else { this.ds_ha = [];}
        })
    }
    onPageChange(event) {
        this.pageNumber = event.pageNumber;
        this.dsHinhAnh();
    }

}
