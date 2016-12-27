import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';
import { HttpModule }    from '@angular/http';


import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

// service
import { HeroService }          from './HeroService/hero.service';
import { DataService }          from './HeroService/data.service';


// data
import { InMemoryDataService }  from './data/in-memory-data.service';

// component
import { AppComponent }         from './component/app.component';
import { HeroesComponent }      from './component/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { DashboardComponent }   from './component/dashboard.component';
import { SelectListComponent }  from './SelectList/selectlist.component';
import { HeroCarouselComponent } from './Hero-Carousel/Hero-Carousel.component';
import { HCSlideComponent }     from './Hero-Carousel/HC-slide/HC-slide';



@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    // 服务注入数据    CarouselImgArrDataService  不能同时注入两个
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    SelectListComponent,
    HeroCarouselComponent,
    HCSlideComponent
  ],
  // 注册一个 HeroService 提供商 ，来告诉 注入器 如何创建 HeroService 
  providers: [ HeroService,DataService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
