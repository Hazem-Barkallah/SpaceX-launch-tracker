import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-profile',
  imports: [LucideAngularModule, FormsModule, CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class ProfileComponent {
  isEditing: boolean = false;
  profile = {
    name: 'Hazem Barkallah',
    occupation: 'SpaceX Enthusiast',
    location: 'Djerba, Tunisia',
    email: 'barkhazem@gmail.com',
    skills: [] as string[],
  };
  spaceSkills: string[] = [
    "Astrophysics",
    "Orbital Mechanics",
    "Calculus",
    "Thermodynamics",
    "Electromagnetism",
    "Python Programming",
    "C/C++",
    "Rocket Propulsion",
    "Satellite Communications",
    "Guidance, Navigation & Control (GNC)",
    "CAD Design",
    "Embedded Systems",
    "Data Analysis",
    "Scientific Research",
    "Telescope Operation",
    "Spectroscopy",
    "Arduino/Raspberry Pi",
    "Systems Engineering",
    "Machine Learning for Space Data",
    "Mission Planning"
  ];
  canAddSkill: boolean = this.profile.skills.length < this.spaceSkills.length;

  handleProfileHeaderChange() {
    this.isEditing = !this.isEditing;
  }
}
