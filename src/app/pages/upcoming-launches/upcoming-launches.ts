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
  launches: Launch[] = [];
  filteredLaunches: Launch[] = [];
  launchesToDisplay: Launch[] = [];
  searchName: string = '';
  currentPage: number = 1;
  totalPages: number = 1;

  ngOnInit() {
    this.SpacexApiService.getUpcomingLaunches().subscribe((launches) => {
      this.launches = launches;
      this.applyFiltersAndPagination();
    });
  }
  onSearchChange() {
    this.currentPage = 1;
    this.applyFiltersAndPagination();
  }

  applyFiltersAndPagination() {
    this.filteredLaunches = this.searchName
      ? this.launches.filter((launch) =>
          launch.name.toLowerCase().includes(this.searchName.toLowerCase())
        )
      : this.launches;

    this.totalPages = Math.ceil(this.filteredLaunches.length / 10);
    this.updateLaunchesToDisplay();
  }
  updateLaunchesToDisplay() {
    this.launchesToDisplay = this.filteredLaunches.slice((this.currentPage - 1) * 10, (this.currentPage - 1) * 10 +10);
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateLaunchesToDisplay();
    }
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateLaunchesToDisplay();
    }
  }
}
