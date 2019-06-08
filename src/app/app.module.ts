import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainMiddleComponent } from './main-middle/main-middle.component';
import { DanhSachComponent } from './danh-sach/danh-sach.component';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        MainMiddleComponent,
        DanhSachComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
