import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { FavoritesComponent } from './pages/favorites/favorites';
import { LaunchDetailsComponent} from './pages/launch-details/launch-details';
import { PastLaunchesComponent } from './pages/past-launches/past-launches';
import { UpcomingLaunchesComponent } from './pages/upcoming-launches/upcoming-launches';
import { NotFoundComponent } from './pages/not-found/not-found';
export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'favorites', component: FavoritesComponent},
    {path: 'launch-details/:id', component: LaunchDetailsComponent}, 
    {path: 'past-launches', component: PastLaunchesComponent},
    {path: 'upcoming-launches', component: UpcomingLaunchesComponent},
    {path: 'profile', component: NotFoundComponent},
    {path: '**', component: NotFoundComponent} 
];
