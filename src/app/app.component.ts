import { Component, Injector } from '@angular/core';
import { AppInjector } from './helpers/app-injector.helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-vob-website';
  injector: Injector;
  constructor(injector: Injector) {
    this.injector = injector;
    AppInjector.setInjector(this.injector);
  }
}
