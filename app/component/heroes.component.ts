import { Component,OnInit } from '@angular/core';
import { Hero } from '../hero-detail/hero';
import { HeroService } from '../HeroService/hero.service';
import { Router, Routes } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl:'heroes.component.html',
  styleUrls: [`heroes.component.css`]
})

export class HeroesComponent implements OnInit {
  // 声明变量类型
  NameArray:Hero[];
  selectedHero:Hero;


  clickme(Hero: Hero): void {
    this.selectedHero = Hero;
  }

  // 初始化
  constructor(
    private heroService:HeroService,
    private router:Router
  ){ }

  // 服务注入
  getHeroes(): void {
    // 数据全部获取完成后 执行 .then(function(heroes){ return this.NameArray = heroes })
    this.heroService.getHeroes().then(
      heroes => this.NameArray = heroes
    );
  }

  // 我们使用 ngOnInit 生命周期钩子，以便在 AppComponent 激活时获取英雄数据。 
  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  // 对 click 事件的响应中，我们要调用组建的 click 处理器，然后清空这个输入框，以便用来输入另一个名字
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.NameArray.push(hero);
        this.selectedHero = null;
      });
  }

    // 这个 delete 按钮的 click 处理器还应该阻止 click 事件向上冒泡——我们并不希望触发 <li> 的事件处理器，否则它会选中我们要删除的这位英雄
    // 它从数组中移除了被删除的英雄，如果删除的是正选中的英雄，还会清空选择
    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.NameArray = this.NameArray.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            });
    }

}