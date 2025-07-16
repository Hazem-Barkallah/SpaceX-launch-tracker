import { Component, input } from '@angular/core';
import { Launch } from '../../models/launch';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'past-launch-card',
  imports: [CommonModule],
  templateUrl: './launch-card.html',
  styleUrl: './launch-card.css'
})
export class PastLaunchCard {
  launch=input.required<Launch>();
}
