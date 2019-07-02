import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { DanhSachComponent } from './danh-sach/danh-sach.component';
import { ChiTietBaiVietComponent } from './chi-tiet-bai-viet/chi-tiet-bai-viet.component';
import { ChiTietAudioComponent } from './chi-tiet-audio/chi-tiet-audio.component';
import { ChiTietVideoComponent } from './chi-tiet-video/chi-tiet-video.component';
import { ChiTietImageComponent } from './chi-tiet-image/chi-tiet-image.component';
// import { ChiTietComponent } from './chi-tiet/chi-tiet.component';

const routes: Routes = [
    { path: '', component: TrangChuComponent },
    { path: ':id', component: DanhSachComponent },
    { path: 'audio/:chuyen_muc/:id', component: ChiTietAudioComponent},
    { path: 'video/:chuyen_muc/:id', component: ChiTietVideoComponent},
    { path: 'image/:chuyen_muc/:id', component: ChiTietImageComponent},
    { path: ':chuyen_muc/:id', component: ChiTietBaiVietComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{
        scrollPositionRestoration: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
