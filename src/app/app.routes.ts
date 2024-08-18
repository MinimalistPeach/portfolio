import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './Components/aboutme/aboutme.component';
import { ProjectsComponent } from './Components/projects/projects.component';

export const routes: Routes = [
    { path: '', component: ProjectsComponent },
    { path: 'aboutme', component: AboutmeComponent },
];
