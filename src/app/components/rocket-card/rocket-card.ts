import { Component, input } from '@angular/core';
import { Rocket } from '../../models/rocket';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rocket-card',
  imports: [CommonModule],
  templateUrl: './rocket-card.html',
  styleUrl: './rocket-card.css'
})
export class RocketCard {
  selectedRocket: Rocket | null = null;
  rocket=input.required<Rocket>();
  isObject(value: any): boolean {
    return typeof value === 'object'
  }
  openRocketDetails(rocket: Rocket) {
    this.selectedRocket = rocket;
  }
  closeModal() {
    this.selectedRocket = null;
  }
  ngOnInit(){}
  }