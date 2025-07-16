import { Component, input } from '@angular/core';
import { Launch } from '../../models/launch';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'upcoming-launch-card',
  imports: [CommonModule],
  templateUrl: './upcoming-launch-card.html',
  styleUrl: './upcoming-launch-card.css'
})
export class UpcomingLaunchCard {
  launch=input.required<Launch>();
}
