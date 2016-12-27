import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './component/heroes.component';
import { DashboardComponent } from './component/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { SelectListComponent } from './SelectList/selectlist.component';
import { HeroCarouselComponent } from './Hero-Carousel/Hero-Carousel.component';

// 典型 路由模块 值得注意的有：

//     1.将路由抽出到一个变量中。你可能将来会导出它。而且它让 路由模块 模式更加明确。

//     2.添加 RouterModule.forRoot(routes) 到 imports.

//     3.添加 RouterModule 到 exports ，这样关联模块的组件可以访问路由的声明，比如 RouterLink 和 RouterOutlet 。

//     4.无 Declarations ！声明是关联模块的任务。

//     5.如果你有守卫服务，添加模块 providers ；本例子无守卫服务。

const routes:Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },{
        path: 'heroes',
        component: HeroesComponent
    },{
        path: 'dashboard',
        component: DashboardComponent
    },{
        path: 'detail/:id',
        component: HeroDetailComponent
    },{
        path: 'selectlist',
        component: SelectListComponent
    },{
        path: 'HeroCarousel',
        component: HeroCarouselComponent
    }
    
]

@NgModule({
    imports:[ RouterModule.forRoot(routes) ],
    exports:[ RouterModule ]
})

export class AppRoutingModule {}