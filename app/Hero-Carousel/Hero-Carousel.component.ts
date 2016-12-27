import { NgModule,Component,OnInit,  
         trigger,state,style,transition,animate
        } from '@angular/core';
import { Http } from '@angular/http';

import { HCCarouselMobile } from '../data/HC-carousel.mobile';
import { HCSlideComponent } from './HC-slide/HC-slide';
import { DataService } from '../HeroService/data.service';


@Component({
    templateUrl:'app/Hero-Carousel/Hero-Carousel.component.html',
    styleUrls:['app/Hero-Carousel/Hero-Carousel.component.css'],
    // animations:[
    //     trigger('heroState', [
    //       state('inactive', style({
    //         backgroundColor: '#eee',
    //         transform: 'scale(1)'
    //       })),
    //       state('active',   style({
    //         backgroundColor: '#cfd8dc',
    //         transform: 'scale(1.1)'
    //       })),
    //       transition('inactive => active', animate('100ms ease-in')),
    //       transition('active => inactive', animate('100ms ease-out'))
    //     ])
    // ],
})

export class HeroCarouselComponent 
implements OnInit{

    CarouselImgArray:Array<any>;    // 图片数组
    Cleft:number;                   // 图片预移动
    carouselleft:number;            // 页面实际移动
    timer:any;                      // 存储定时器
    MinFloatdivLeft:number;         // 浮动div预移动
    MinFloatdiv:number;             // 页面div实际移动


    constructor(
        private http:Http,
        private dataService:DataService
    ){
        this.Cleft = 0; // 初始轮播图的位置
        // 定时器
        this.timer = setInterval(() => { this.carouselFun() },4000);
        this.MinFloatdivLeft = 5;
    }

    // 定时器没地方在页面中无法生效
    ngOnInit(): void{
        this.dataService.getJsonList().then( res => this.CarouselImgArray = res );
    }
    


    carouselFun():void {
        const leftJL = -550;    // 存储图片移动位置
        const MinleftDiv = 60; // 存储小图片外圈div移动位置
        // 预存储 轮播图的位置修改
        this.Cleft = this.Cleft + leftJL;
        this.MinFloatdivLeft = this.MinFloatdivLeft + MinleftDiv;

        if(this.Cleft > ( leftJL * 4 )){
            this.carouselleft = this.Cleft;  // 切换页面轮播图显示
            this.MinFloatdiv = this.MinFloatdivLeft; // 浮动div移动
        }else{
            this.carouselleft = this.Cleft = 0;
            this.MinFloatdiv = this.MinFloatdivLeft = 5;   // 5 是单个li的左右边距是5，两个就是10，移动的时候要加上
        }
        
    }

    moveImgFun(img,i):void {
        // 先清除原有的定时器计时，改变位置，再重新恢复定时器
        clearInterval(this.timer);

        this.carouselleft = this.Cleft = -550 * i;
        this.MinFloatdiv = this.MinFloatdivLeft = 60 * i + 5;

        this.timer = setInterval(() => { this.carouselFun() },4000);
    }

}