import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
    data = [];
    total: number = 0;
    pageNumber: number = 1;
    pageSize: number = 20;
    tin_moi = [];
  constructor() { }

  ngOnInit() {
  }

}
