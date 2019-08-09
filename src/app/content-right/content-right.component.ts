import { Component, OnInit } from '@angular/core';
import { GdkHttpClientService } from '@gdkmd/httpxhd';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-content-right',
    templateUrl: './content-right.component.html',
    styleUrls: ['./content-right.component.scss']
})
export class ContentRightComponent implements OnInit {
    ds_video = [];
    url_video = '';
    data = [];
    thu_vien_hinh_anh = [
        {
            ten: '',
            bai_viet: { tieu_de: '', hinh_anh: '' },
            url: ''
        }
    ];
    url = '';
    url_mac_dinh = 'http://hoi-nguoi-mu.gdk.com.vn';
    hinh_anh_active = 0;
    tab_video = true;
    safeSrc: SafeResourceUrl;
    constructor(private gdkClient: GdkHttpClientService, private sanitizer: DomSanitizer) { }

    ngOnInit() {
        this.dsVideo();
        this.hinhAnh();
    }
    dsVideo() {
        this.gdkClient.queryPublicData({
            reqData: {
                reqid: '16b53bc4101'
            }
        }).subscribe(s => {
            if (s.ok && s.data.length > 0) {
                this.ds_video = s.data;
                this.url_video = s.data[0].url;
                const video = s.data[0].bai_viet.link[0].link;
                this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(video);
            } else { this.ds_video = []; this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/yaT3_WFkvI4') }
        })
    }
    clickVideo(item) {
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(item.bai_viet.link[0].link);
    }

    hinhAnh() {
        this.gdkClient.queryPublicData({
            reqData: {
                reqid: '16b54162b1e'
            }
        }).subscribe(s => {
            if (s.ok && s.data.length > 0) { 
                this.data = s.data; 
                this.thu_vien_hinh_anh = [];
                this.url = s.data[0].url;
                this.thu_vien_hinh_anh.push(s.data[0]);
            }
            else {
                this.data = [];
                this.url = '';
                this.thu_vien_hinh_anh = [{ ten: 'THƯ VIỆN HÌNH ẢNH', bai_viet: { tieu_de: "Tiêu đề", hinh_anh: "mac_dinh" }, url: 'mac_dinh' }];
            }
        })
    }
    
    getHinhAnhActive(position){
        this.thu_vien_hinh_anh = [];
        this.thu_vien_hinh_anh.push(this.data[position]);
    }
    prev(){
        if(this.hinh_anh_active == 0){
            this.hinh_anh_active = this.data.length-1;
        } else {
            this.hinh_anh_active -- ;
        }
        this.getHinhAnhActive(this.hinh_anh_active);
        
    }
    next(){
        if(this.hinh_anh_active == this.data.length-1){
            this.hinh_anh_active = 0;
        } else {
            this.hinh_anh_active ++ ;
        }
        this.getHinhAnhActive(this.hinh_anh_active);
    }
    btnTabVideo(boolean){
        boolean == true ? this.tab_video = true : this.tab_video = false;
    }
}
