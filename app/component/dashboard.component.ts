import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero-detail/hero';
import { HeroService } from '../HeroService/hero.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls:['../component/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private router:Router
  ) { }
  
  // 提取了四个英雄（第 2 、 3 、 4 、 5 个）, 可以用 slice() 截取数据
  ngOnInit(): void {
    this.heroService.getHeroes()
      //  .then(heroes => this.heroes = heroes.slice(1, 5));
      .then(heroes => this.heroes = heroes);
  }

  gotoDetail(hero: Hero): void { 
    /* not implemented yet */
    let link = ['/detail',hero.id];
    this.router.navigate(link);
  
  }


}
