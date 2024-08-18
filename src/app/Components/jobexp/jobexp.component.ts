import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-jobexp',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    TimelineModule,
    CardModule
  ],
  templateUrl: './jobexp.component.html',
  styleUrl: './jobexp.component.css'
})
export class JobexpComponent {

}
