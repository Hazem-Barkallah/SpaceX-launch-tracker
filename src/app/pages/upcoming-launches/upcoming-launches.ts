import { Component } from '@angular/core';
import { SpacexApi } from '../../services/spacex-api';
import { Launch } from '../../models/launch';
@Component({
  selector: 'app-upcoming-launches',
  imports: [SpacexApi],
  templateUrl: './upcoming-launches.html',
  styleUrl: './upcoming-launches.css'
})
export class UpcomingLaunchesComponent {
  launches: Launch[] = [];
  ngOnInit() {
    this.SpacexApi.getUpcomingLaunches();
  }
