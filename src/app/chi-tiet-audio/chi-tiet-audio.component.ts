import { Component, OnInit } from '@angular/core';
import { GdkHttpClientService } from '@gdkmd/httpxhd';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-chi-tiet-audio',
  templateUrl: './chi-tiet-audio.component.html',
  styleUrls: ['./chi-tiet-audio.component.scss']
})
export class ChiTietAudioComponent implements OnInit {

    id = '';
  constructor(private router: Router, route: ActivatedRoute, private gdkClient: GdkHttpClientService,private meta: Meta , private titleService: Title) { }

  ngOnInit() {
      this.id = this.router.routerState.root.firstChild;
    console.log(456465456456,this.id);
    const state: RouterState = this.router.routerState;
    const root: ActivatedRoute = state.root;
    const child = root.firstChild;
    const id = child.params.map(p => p.id);
    console.log(31313213131,id);
  }

}
