import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { GdkHttpClientService } from '@gdkmd/httpxhd';

@Component({
    selector: 'app-chuyen-muc',
    templateUrl: './chuyen-muc.component.html',
    styleUrls: ['./chuyen-muc.component.scss']
})
export class ChuyenMucComponent implements OnInit,OnChanges {

    data = [];
    url = '';
    url_mac_dinh = 'http://hoi-nguoi-mu.gdk.com.vn';
    check_van_ban = false;

    data_reset = [];
    search_category = '';
    search_author = '';
    param_chuyen_muc = '';

    @Input('chuyen_muc') chuyen_muc;
    @Input('type') type;
    @Input('param') param;
    constructor(private gdkClient: GdkHttpClientService) { }

    ngOnInit() {
    }
    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.data = this.chuyen_muc;
        this.data_reset = this.chuyen_muc;
        this.param_chuyen_muc = this.param;
        console.log(423425,this.param_chuyen_muc);
        this.check_van_ban = this.chuyen_muc[0].url =='van-ban' ? true : false;
    }

    search(tac_gia) {
        tac_gia == true ? this.search_category = '' : this.search_author = '';
        this.gdkClient.queryPublicData({
            reqData: {
                reqid: '16c7b41a3f6',
                parms: [this.param_chuyen_muc, this.search_author, this.search_category ]
            }
        }).subscribe(s => {
            if (s.ok && s.data.length > 0) {
                this.data = s.data;
            } else { this.data = [] }
        })
    }
    reset(){
        this.data = this.data_reset;
        this.search_author = '';
        this.search_category = '';
    }



    fn_download(item) {
        // var sourceHTML = item.bai_viet.noi_dung;
        // this.download(item.bai_viet.tieu_de + '.doc', sourceHTML);
        var downloadLink = document.createElement("a");

        document.body.appendChild(downloadLink);
        // Create a link to the file
        downloadLink.href = this.url_mac_dinh + item.link_download[0].link;

        // Setting the file name
        downloadLink.download = item.link_download[0].file_name_download;


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
