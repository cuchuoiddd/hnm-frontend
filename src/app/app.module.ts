import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainMiddleComponent } from './main-middle/main-middle.component';
import { DanhSachComponent } from './danh-sach/danh-sach.component';
import { ContentLetfComponent } from './content-letf/content-letf.component';
import { ContentRightComponent } from './content-right/content-right.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { GdkConfigUrl, GdkHttpClientConfigModule } from '@gdkmd/httpxhd';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { EasyUIModule } from 'ng-easyui';
import { BaiVietComponent } from './danh-sach/bai-viet/bai-viet.component';
import { VideoComponent } from './danh-sach/video/video.component';
import { AudioComponent } from './danh-sach/audio/audio.component';
import { DownloadComponent } from './danh-sach/download/download.component';
import { HinhAnhComponent } from './danh-sach/hinh-anh/hinh-anh.component';
import { ChiTietComponent } from './danh-sach/chi-tiet/chi-tiet.component';
import { ChiTietBaiVietComponent } from './chi-tiet-bai-viet/chi-tiet-bai-viet.component';
import { ChuyenMucComponent } from './danh-sach/chuyen-muc/chuyen-muc.component';

const appConfig: GdkConfigUrl = {
    urlBaseServer: 'http://3114.gdk.com.vn:3116'
};
@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        MainMiddleComponent,
        DanhSachComponent,
        ContentLetfComponent,
        ContentRightComponent,
        ChiTietComponent,
        TrangChuComponent,
        BaiVietComponent,
        VideoComponent,
        AudioComponent,
        DownloadComponent,
        HinhAnhComponent,
        ChiTietBaiVietComponent,
        ChuyenMucComponent
    ],
    imports: [
BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        EasyUIModule,
        GdkHttpClientConfigModule.forRoot(appConfig),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http);
}