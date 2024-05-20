import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { WelcomecardComponent } from './Components/welcomecard/welcomecard.component';
import { ProjectService } from './Services/project-service/project.service';
import { ProjectsComponent } from './Components/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonModule,
    RouterOutlet,
    TranslateModule,
    CommonModule,
    WelcomecardComponent,
    ProjectsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: []
})
export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig, private translate: TranslateService) { }
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.translate.setDefaultLang('en');
  }
}
