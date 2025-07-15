import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'SpaceX-launch-tracker';
}
