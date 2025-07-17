import { Component, inject, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RocketCard } from '../../components/rocket-card/rocket-card';
import { isPlatformBrowser } from '@angular/common';
import { RocketsApi } from '../../services/rockets-api';
import { Rocket } from '../../models/rocket';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [RouterModule, RocketCard, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  private rocketsApi = inject(RocketsApi);
  rockets: Rocket[] = [];
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      import('aos').then(AOS => AOS.init());
    }
    this.rocketsApi.getAllRockets().subscribe((rockets) => {
      this.rockets = rockets;
    });
  }
}
