import { NgModule,Input,OnInit,Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeroService } from '../HeroService/hero.service';
import { Hero } from '../hero-detail/hero';



@Component({
    templateUrl:'app/SelectList/selectlist.component.html',
    styleUrls:['app/SelectList/selectlist.component.css']
})

export class SelectListComponent implements OnInit {

    constructor(
        private heroService: HeroService,
    ){  }

    heroes: Hero[] = [];

    // service 提取 英雄数据 之后赋值给 heroes 数组 
    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    lisaveFun(obj):void {
        
        obj.isShow = true;
        
        // 持久修改英雄数据,调用service里的upload方法
        this.heroService.update(obj)
    }

} 