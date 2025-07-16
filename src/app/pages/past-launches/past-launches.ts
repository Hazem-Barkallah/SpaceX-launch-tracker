import { Component, inject } from '@angular/core';
import { Launch } from '../../models/launch';
import { SpacexApiService } from '../../services/spacex-api';
import { CommonModule } from '@angular/common';
import { PastLaunchCard } from '../../components/past-launch-card/launch-card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-past-launches',
  standalone: true,
  imports: [CommonModule, PastLaunchCard, FormsModule],
  templateUrl: './past-launches.html',
  styleUrl: './past-launches.css',
})
export class PastLaunchesComponent {
  spacexApiService = inject(SpacexApiService);

  launches: Launch[] = [];
  filteredLaunches: Launch[] = [];
  launchesToDisplay: Launch[] = [];
  searchName: string = '';
  currentPage: number = 1;
  totalPages: number = 1;

  ngOnInit() {
    this.spacexApiService.getPastlaunches().subscribe((launches) => {
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
