import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GdkHttpClientService } from '@gdkmd/httpxhd';
import { Meta, Title, DomSanitizer } from '@angular/platform-browser';
import { Lightbox, LightboxEvent, LIGHTBOX_EVENT } from 'ngx-lightbox';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-chi-tiet-image',
    templateUrl: './chi-tiet-image.component.html',
    styleUrls: ['./chi-tiet-image.component.scss']
})
export class ChiTietImageComponent implements OnInit {

    id = '';
    param_chuyen_muc = '';
    title = '';
    data = [];
    url_mac_dinh = 'http://hoi-nguoi-mu.gdk.com.vn';
    private _albums = [];
    private _subscription: Subscription;
    constructor(
        private route: ActivatedRoute,
        private gdkClient: GdkHttpClientService,
        private meta: Meta,
        private titleService: Title,
        private sanitizer: DomSanitizer,
        private _lightbox: Lightbox,
        private _lightboxEvent: LightboxEvent
    ) { }

    close(): void {
        // close lightbox programmatically
        this._lightbox.close();
    }
    open(index: number): void {
        this._lightbox.open(this._albums, index);
        // register your subscription and callback whe open lightbox is fired
        this._subscription = this._lightboxEvent.lightboxEvent$
            .subscribe(event => this._onReceivedEvent(event));
    }

    private _onReceivedEvent(event: any): void {
        // remember to unsubscribe the event when lightbox is closed
        if (event.id === LIGHTBOX_EVENT.CLOSE) {
            // event CLOSED is fired
            this._subscription.unsubscribe();
        }

        if (event.id === LIGHTBOX_EVENT.OPEN) {
            // event OPEN is fired
        }

        if (event.id === LIGHTBOX_EVENT.CHANGE_PAGE) {
            // event change page is fired
            console.log(event.data); // -> image index that lightbox is switched to
        }
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.id = params['params'].id;
            this.param_chuyen_muc = params['params'].chuyen_muc;
            this.chiTietBaiViet();
        })
    }
    chiTietBaiViet() {
        this.gdkClient.queryPublicData({
            reqData: {
                reqid: '16b54dfd18f',
                parms: [this.id, this.param_chuyen_muc]
            }
        }).subscribe(s => {
            if (s.ok && s.data.length > 0) {
                this.title = s.data[0].tieu_de || '';
                const mo_ta = s.data[0].mo_ta || '';
                this.titleService.setTitle(this.title);
                this.meta.updateTag({ name: "description", content: mo_ta });
                this.data = s.data;


                const length = this.data[0].hinh_anh.length;
                const data = this.data[0].hinh_anh;
                for (let i = 0; i < length; i++) {
                    const src = this.url_mac_dinh +"/"+ (data[i].hinh_anh || "");
                    const caption = data[i].title || "";
                    const thumb = this.url_mac_dinh +"/"+ (data[i].hinh_anh || "");
                    const album = {
                        src: src,
                        caption: caption,
                        thumb: thumb
                    };

                    this._albums.push(album);
                }

            } else this.data = [];
        })
    }
}
