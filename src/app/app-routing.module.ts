import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { DanhSachComponent } from './danh-sach/danh-sach.component';
import { ChiTietComponent } from './chi-tiet/chi-tiet.component';

const routes: Routes = [
    { path: '', component: TrangChuComponent },
    { path: 'danh-sach/:id', component: DanhSachComponent },
    { path: 'chi-tiet/:id', component: ChiTietComponent },   
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
