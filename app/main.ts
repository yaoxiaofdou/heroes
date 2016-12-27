import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
// Angular 在启动期间会自动为我们创建一个全应用级注入器
platformBrowserDynamic().bootstrapModule(AppModule);
