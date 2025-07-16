import { Component, inject } from '@angular/core';
import { Launch } from '../../models/launch';
import { SpacexApiService } from '../../services/spacex-api';
import { CommonModule } from '@angular/common';
import { PastLaunchCard } from '../../components/past-launch-card/launch-card';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-past-launches',
  imports: [CommonModule, PastLaunchCard,FormsModule],
  templateUrl: './past-launches.html',
  styleUrl: './past-launches.css'
})
export class PastLaunchesComponent {
  spacexApiService = inject(SpacexApiService);
  launches: Launch[] = [];
  filteredLaunches: Launch[] = [];
  searchName: string = '';
  filterLaunchesByLaunchName(name: string) {
    this.filteredLaunches= (name? this.launches.filter(launch => launch.name.includes(name)) :this.launches)
  }
  ngOnInit() {
    this.spacexApiService.getPastlaunches().subscribe(launches => {
      this.launches = launches;
      this.filteredLaunches = launches;
  })}
}