import { Routes } from '@angular/router';
import { AboutmeComponent } from './Components/aboutme/aboutme.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { JobexpComponent } from './Components/jobexp/jobexp.component';

export const routes: Routes = [
    { path: '', component: ProjectsComponent },
    { path: 'aboutme', component: AboutmeComponent },
    { path: 'jobexperience', component: JobexpComponent },
];
