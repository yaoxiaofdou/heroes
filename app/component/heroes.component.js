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
var hero_service_1 = require('../HeroService/hero.service');
var router_1 = require('@angular/router');
var HeroesComponent = (function () {
    // 初始化
    function HeroesComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
    }
    HeroesComponent.prototype.clickme = function (Hero) {
        this.selectedHero = Hero;
    };
    // 服务注入
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        // 数据全部获取完成后 执行 .then(function(heroes){ return this.NameArray = heroes })
        this.heroService.getHeroes().then(function (heroes) { return _this.NameArray = heroes; });
    };
    // 我们使用 ngOnInit 生命周期钩子，以便在 AppComponent 激活时获取英雄数据。 
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    // 对 click 事件的响应中，我们要调用组建的 click 处理器，然后清空这个输入框，以便用来输入另一个名字
    HeroesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .then(function (hero) {
            _this.NameArray.push(hero);
            _this.selectedHero = null;
        });
    };
    // 这个 delete 按钮的 click 处理器还应该阻止 click 事件向上冒泡——我们并不希望触发 <li> 的事件处理器，否则它会选中我们要删除的这位英雄
    // 它从数组中移除了被删除的英雄，如果删除的是正选中的英雄，还会清空选择
    HeroesComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService
            .delete(hero.id)
            .then(function () {
            _this.NameArray = _this.NameArray.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    HeroesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-heroes',
            templateUrl: 'heroes.component.html',
            styleUrls: ["heroes.component.css"]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
