import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero';
import { HeroService } from '../HeroService/hero.service';


@Component({
    selector:'my-hero-detail',
    templateUrl:'app/hero-detail/hero-detail.component.html',
    styleUrls:['../app/hero-detail/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
    // @Input 组件之间传值必备良品
    @Input()
    // 声明 hero 类型
    hero: Hero;

    // 注入 ActivatedRoute 和 HeroService 服务到构造函数中，将它们的值保存到私有变量中
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {  }

    // 在 ngOnInit 生命周期钩子中，从 RouteParams 服务中提取 id 参数，并且使用 HeroService 来获得具有这个 id 的英雄数据
    ngOnInit(): void {
        this.route.params.forEach((params:Params) => {
            let id = + params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    // goBack 方法，来根据浏览器的历史堆栈，后退一步
    goBack():void {
        this.location.back();
    }
    // save 方法使用 hero 服务的 update 方法来持久化对英雄名字的修改，然后导航回前一个页面
    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }

    
}