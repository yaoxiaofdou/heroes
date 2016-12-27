import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HCCarouselMobile } from '../../data/HC-carousel.mobile';
import { DataService } from '../../HeroService/data.service';

@Component({
    selector:'hc-slide',
    templateUrl:'app/Hero-Carousel/HC-slide/HC-slide.html',
    styleUrls:['app/Hero-Carousel/HC-slide/HC-slide.css']
})

export class HCSlideComponent implements OnInit{
    CarouselImgArray:Array<any>;

    constructor(
        private http:Http,
        private dataService:DataService
    ){}

    ngOnInit(): void{
        this.dataService.getJsonList().then( res => this.CarouselImgArray = res );
    }


}