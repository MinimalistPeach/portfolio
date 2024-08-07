import { CommonModule, NgFor, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { TimelineModule } from 'primeng/timeline';
import { ProjectDTO } from '../../Models/ProjectDTO';
import { CardModule } from 'primeng/card';
import { ProjectService } from '../../Services/project-service/project.service';


@Component({
  selector: 'projects',
  standalone: true,
  imports: [
    TranslateModule,
    ButtonModule,
    CommonModule,
    TimelineModule,
    CardModule,
    NgFor
  ],
  providers: [
    ProjectService
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  constructor(private viewPortScoller: ViewportScroller, public projectService: ProjectService) {}
  
  public scroll(elementId: string): void {
    this.viewPortScoller.scrollToAnchor(elementId);
  }

  projects: ProjectDTO[] = [
    { date: '2022-01-01', title: 'Project bal', image: 'assets/images/test.jpg', description: 'Fugiat consectetur cillum eu aliquip excepteur et non officia. Anim occaecat laboris Lorem Lorem exercitation aliquip minim laborum cillum laborum ut magna sint eu. Nulla nostrud ex consequat adipisicing aliqua sit qui ipsum magna. Laborum ex et nisi laborum excepteur. Excepteur exercitation sit Lorem enim nostrud ipsum nulla irure ad velit. Ullamco nulla minim cupidatat deserunt sint cillum officia non ullamco proident ex do incididunt. Elit fugiat cillum tempor elit dolor tempor eu velit ad aute eu elit occaecat.', usedTechs: ['csharp', 'java'], url: "https://google.hu" },
    { date: '2022-02-01', title: 'Project jobb', image: 'assets/images/test.jpg', description: 'Description 2', usedTechs: ['javascript', 'java'], url: "https://google.hu" },
    { date: '2022-02-01', title: 'Project bal', image: 'assets/images/test.jpg', description: 'Description 2', usedTechs: ['c', 'java'], url: "https://google.hu" },
    { date: '2022-02-01', title: 'Project jobb', image: 'assets/images/test.jpg', description: 'Description 2', usedTechs: ['csharp', 'java'], url: "https://google.hu" },
    { date: '2022-02-01', title: 'Project bal', image: 'assets/images/test.jpg', description: 'Description 2', usedTechs: ['csharp', 'java'], url: "https://google.hu" },
  ];
}
