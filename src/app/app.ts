import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Router } from 'express';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'SpaceX-launch-tracker';
}
