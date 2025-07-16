import { Component, inject } from '@angular/core';
import { Launch } from '../../models/launch';
import { SpacexApiService } from '../../services/spacex-api';
import { CommonModule } from '@angular/common';
import { UpcomingLaunchCard } from '../../components/upcoming-launch-card/upcoming-launch-card';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-upcoming-launches',
  imports: [CommonModule, UpcomingLaunchCard,FormsModule],
  templateUrl: './upcoming-launches.html',
  styleUrl: './upcoming-launches.css'
})
export class UpcomingLaunchesComponent {
  SpacexApiService=inject(SpacexApiService);
  launches:Launch[] = [];
  filteredLaunches: Launch[] = [];
  searchName: string = '';
  filterLaunchesByLaunchName(name: string) {
    this.filteredLaunches= (name? this.launches.filter(launch => launch.name.includes(name)) :this.launches)
  }
  ngOnInit() {
    this.SpacexApiService.getUpcomingLaunches().subscribe(launches=>{
      this.launches = launches;
      this.filteredLaunches = launches
    })
}
}