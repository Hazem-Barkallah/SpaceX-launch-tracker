import { isPlatformBrowser } from '@angular/common';
import { inject, Inject, PLATFORM_ID } from '@angular/core';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule, Navbar,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'SpaceX-launch-tracker';
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
    const AOS = require('aos');
    AOS.init({
      once: false,
      mirror: false,
    });
  }
}
  router = inject(Router);
}
