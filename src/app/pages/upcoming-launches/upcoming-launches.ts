import { Component, inject } from '@angular/core';
import { Launch } from '../../models/launch';
import { SpacexApiService } from '../../services/spacex-api';
import { CommonModule } from '@angular/common';
import { UpcomingLaunchCard } from '../../components/upcoming-launch-card/upcoming-launch-card';
@Component({
  selector: 'app-upcoming-launches',
  imports: [CommonModule, UpcomingLaunchCard],
  templateUrl: './upcoming-launches.html',
  styleUrl: './upcoming-launches.css'
})
export class UpcomingLaunchesComponent {
  launches:Launch[] = [];
  SpacexApiService=inject(SpacexApiService);
  ngOnInit() {
    this.SpacexApiService.getUpcomingLaunches().subscribe(launches=>{
      this.launches = launches;
    })
}
}