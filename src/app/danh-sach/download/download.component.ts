import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-download',
    templateUrl: './download.component.html',
    styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit, OnChanges {
    data = [];
    total: number = 1;
    pageNumber: number = 1;
    pageSize: number = 20;
    url_mac_dinh = 'http://hoi-nguoi-mu.gdk.com.vn';
    @Input('download') data_download;
    @Input('total') total_download;
    @Output() PageChange = new EventEmitter();
    constructor() { }

    ngOnInit() {
    }
    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.data = this.data_download;
        console.log(32131, this.data_download)
        this.total = this.total_download;
    }
    onPageChange(event) {
        this.PageChange.emit(event);
    }


    fn_download(item) {
        // var sourceHTML = item.bai_viet.noi_dung;
        // this.download(item.bai_viet.tieu_de + '.doc', sourceHTML);
        var downloadLink = document.createElement("a");

        document.body.appendChild(downloadLink);
        // Create a link to the file
        downloadLink.href = this.url_mac_dinh + item.bai_viet.link_download[0].link;

        // Setting the file name
        downloadLink.download = item.bai_viet.link_download[0].file_name_download;


        //triggering the function
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    download(filename, text) {
        var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
        var postHtml = "</body></html>";
        var html = preHtml + text + postHtml;

        var blob = new Blob(['\ufeff', html], {
            type: 'application/msword'
        });

        // Specify link url
        var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

        // Specify file name
        filename = filename ? filename + '.doc' : 'document.doc';

        // Create download link element
        var downloadLink = document.createElement("a");

        document.body.appendChild(downloadLink);

        if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            // Create a link to the file
            downloadLink.href = url;

            // Setting the file name
            downloadLink.download = filename;

            //triggering the function
            downloadLink.click();
        }
        document.body.removeChild(downloadLink);

    }
}
