"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var data_service_1 = require('../HeroService/data.service');
var HeroCarouselComponent = (function () {
    function HeroCarouselComponent(http, dataService) {
        var _this = this;
        this.http = http;
        this.dataService = dataService;
        this.Cleft = 0; // 初始轮播图的位置
        // 定时器
        this.timer = setInterval(function () { _this.carouselFun(); }, 4000);
        this.MinFloatdivLeft = 5;
    }
    // 定时器没地方在页面中无法生效
    HeroCarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getJsonList().then(function (res) { return _this.CarouselImgArray = res; });
    };
    HeroCarouselComponent.prototype.carouselFun = function () {
        var leftJL = -550; // 存储图片移动位置
        var MinleftDiv = 60; // 存储小图片外圈div移动位置
        // 预存储 轮播图的位置修改
        this.Cleft = this.Cleft + leftJL;
        this.MinFloatdivLeft = this.MinFloatdivLeft + MinleftDiv;
        if (this.Cleft > (leftJL * 4)) {
            this.carouselleft = this.Cleft; // 切换页面轮播图显示
            this.MinFloatdiv = this.MinFloatdivLeft; // 浮动div移动
        }
        else {
            this.carouselleft = this.Cleft = 0;
            this.MinFloatdiv = this.MinFloatdivLeft = 5; // 5 是单个li的左右边距是5，两个就是10，移动的时候要加上
        }
    };
    HeroCarouselComponent.prototype.moveImgFun = function (img, i) {
        var _this = this;
        // 先清除原有的定时器计时，改变位置，再重新恢复定时器
        clearInterval(this.timer);
        this.carouselleft = this.Cleft = -550 * i;
        this.MinFloatdiv = this.MinFloatdivLeft = 60 * i + 5;
        this.timer = setInterval(function () { _this.carouselFun(); }, 4000);
    };
    HeroCarouselComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/Hero-Carousel/Hero-Carousel.component.html',
            styleUrls: ['app/Hero-Carousel/Hero-Carousel.component.css'],
        }), 
        __metadata('design:paramtypes', [http_1.Http, data_service_1.DataService])
    ], HeroCarouselComponent);
    return HeroCarouselComponent;
}());
exports.HeroCarouselComponent = HeroCarouselComponent;
