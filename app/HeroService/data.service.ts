import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class DataService{
    constructor(
        private http:Http,
    ){ }
    
    // 获取图片数组数据
    private Carouselobj_Url = 'app/CarouselImgArr';  // URL to web api

    getJsonList(): Promise<any> {
        return this.http.get(this.Carouselobj_Url)
                   .toPromise()
                   // 成功调用
                   .then(response => response.json().data)
    }



}