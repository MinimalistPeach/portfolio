import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { TimelineModule } from 'primeng/timeline';
import { ProjectDTO } from '../../Models/ProjectDTO';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'projects',
  standalone: true,
  imports: [
    TranslateModule,
    ButtonModule,
    CommonModule,
    TimelineModule,
    CardModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: ProjectDTO[] = [
    { date: '2022-01-01', title: 'Project bal', image: 'assets/images/test.jpg', description: 'Description 1' },
    { date: '2022-02-01', title: 'Project jobb', image: 'assets/images/test.jpg', description: 'Description 2' },
    { date: '2022-02-01', title: 'Project bal', image: 'assets/images/test.jpg', description: 'Description 2' },
    { date: '2022-02-01', title: 'Project jobb', image: 'assets/images/test.jpg', description: 'Description 2' },
    { date: '2022-02-01', title: 'Project bal', image: 'assets/images/test.jpg', description: 'Description 2' },
  ];
}
