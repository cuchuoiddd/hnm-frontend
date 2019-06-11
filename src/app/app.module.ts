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
import { ChiTietComponent } from './chi-tiet/chi-tiet.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { GdkConfigUrl, GdkHttpClientConfigModule } from '@gdkmd/httpxhd';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

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
        TrangChuComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
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