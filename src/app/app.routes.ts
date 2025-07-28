import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { PastLaunchesComponent } from './pages/past-launches/past-launches';
import { UpcomingLaunchesComponent } from './pages/upcoming-launches/upcoming-launches';
import { NotFoundComponent } from './pages/not-found/not-found';
import { ChatBotComponent } from './pages/chatbot/chatbot';
import { ProfileComponent } from './pages/profile/profile';
import { LoginComponent } from './pages/login-page/login-page';
export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'past-launches', component: PastLaunchesComponent},
    {path: 'upcoming-launches', component: UpcomingLaunchesComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'assistant', component: ChatBotComponent},
    {path: '**', component: NotFoundComponent}
];
