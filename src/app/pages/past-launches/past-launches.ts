import { Component, inject } from '@angular/core';
import { Launch } from '../../models/launch';
import { SpacexApiService } from '../../services/spacex-api';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-past-launches',
  imports: [CommonModule, RouterLink],
  templateUrl: './past-launches.html',
  styleUrl: './past-launches.css'
})
export class PastLaunchesComponent {
  spacexApiService = inject(SpacexApiService);
  launches: Launch[] = [];
  ngOnInit() {
    this.spacexApiService.getPastlaunches().subscribe(launches => {
      this.launches = launches;
    });
  }
}
