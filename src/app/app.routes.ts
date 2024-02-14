import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'portfolio', component: PortfolioComponent},
    { path: 'resume', component: ResumeComponent},
    { path: '**', component: HomeComponent, pathMatch: 'full'}
];
