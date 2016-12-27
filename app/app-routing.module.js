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
var router_1 = require('@angular/router');
var heroes_component_1 = require('./component/heroes.component');
var dashboard_component_1 = require('./component/dashboard.component');
var hero_detail_component_1 = require('./hero-detail/hero-detail.component');
var selectlist_component_1 = require('./SelectList/selectlist.component');
var Hero_Carousel_component_1 = require('./Hero-Carousel/Hero-Carousel.component');
// 典型 路由模块 值得注意的有：
//     1.将路由抽出到一个变量中。你可能将来会导出它。而且它让 路由模块 模式更加明确。
//     2.添加 RouterModule.forRoot(routes) 到 imports.
//     3.添加 RouterModule 到 exports ，这样关联模块的组件可以访问路由的声明，比如 RouterLink 和 RouterOutlet 。
//     4.无 Declarations ！声明是关联模块的任务。
//     5.如果你有守卫服务，添加模块 providers ；本例子无守卫服务。
var routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }, {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    }, {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    }, {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    }, {
        path: 'selectlist',
        component: selectlist_component_1.SelectListComponent
    }, {
        path: 'HeroCarousel',
        component: Hero_Carousel_component_1.HeroCarouselComponent
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
