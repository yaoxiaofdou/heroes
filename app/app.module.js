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
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var app_routing_module_1 = require('./app-routing.module');
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
// service
var hero_service_1 = require('./HeroService/hero.service');
var data_service_1 = require('./HeroService/data.service');
// data
var in_memory_data_service_1 = require('./data/in-memory-data.service');
// component
var app_component_1 = require('./component/app.component');
var heroes_component_1 = require('./component/heroes.component');
var hero_detail_component_1 = require('./hero-detail/hero-detail.component');
var dashboard_component_1 = require('./component/dashboard.component');
var selectlist_component_1 = require('./SelectList/selectlist.component');
var Hero_Carousel_component_1 = require('./Hero-Carousel/Hero-Carousel.component');
var HC_slide_1 = require('./Hero-Carousel/HC-slide/HC-slide');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                // 服务注入数据    CarouselImgArrDataService  不能同时注入两个
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                heroes_component_1.HeroesComponent,
                hero_detail_component_1.HeroDetailComponent,
                dashboard_component_1.DashboardComponent,
                selectlist_component_1.SelectListComponent,
                Hero_Carousel_component_1.HeroCarouselComponent,
                HC_slide_1.HCSlideComponent
            ],
            // 注册一个 HeroService 提供商 ，来告诉 注入器 如何创建 HeroService 
            providers: [hero_service_1.HeroService, data_service_1.DataService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
