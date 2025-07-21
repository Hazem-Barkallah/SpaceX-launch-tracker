import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { PastLaunchesComponent } from './pages/past-launches/past-launches';
import { UpcomingLaunchesComponent } from './pages/upcoming-launches/upcoming-launches';
import { NotFoundComponent } from './pages/not-found/not-found';
import { ChatbotComponent } from './pages/chatbot/chatbot';
export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'past-launches', component: PastLaunchesComponent},
    {path: 'upcoming-launches', component: UpcomingLaunchesComponent},
    {path: 'profile', component: NotFoundComponent},
    {path: 'assistant', component: ChatbotComponent},
    {path: '**', component: NotFoundComponent}
];
