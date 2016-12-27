import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

import { Hero } from '../hero-detail/hero';

import 'rxjs/add/operator/toPromise';

// 当 TypeScript 看到 @Injectable() 装饰器时，就会记下本服务的元数据。如果 Angular 需要往这个服务中注入其它依赖，就会使用这些元数据。
// 都应该从一开始就加上 @Injectable() 装饰器。
@Injectable()

export class HeroService {
    // getHeroes(): Promise<Hero[]>{
    //     return Promise.resolve(HEROES);
    // }
    private heroesUrl = 'app/heroes';  // URL to web api

    constructor(
        private http: Http,
    ) { }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
                .toPromise()
                // 成功调用
                .then(response => response.json().data as Hero[])
                // 失败调用
                .catch(this.handleError);
    }

    // 我们必须预料到 http 请求会失败，因为有太多我们无法控制的原因可能导致它们频繁出现各种错误。
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


    // 添加一个 getHero 方法，用来通过 id 从 getHeros 过滤英雄列表
    getHero(id:number):Promise<Hero> {
        return this.getHeroes()
                   .then(heroes => heroes.find(hero => hero.id === id));
    }

    // update 方法的大致结构与 getHeroes 类似，不过我们使用 HTTP 的 put 方法来把修改持久化到服务
    private headers = new Headers({'Content-Type': 'application/json'});

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    // 当指定的名字不为空的时候， click 处理器就会委托 hero 服务来创建一个具有此名字的英雄，并把这个新的英雄添加到我们的数组中
    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    // hero 服务的 delete 方法使用 HTTP 的 delete 方法来从服务器上移除该英雄
    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

}