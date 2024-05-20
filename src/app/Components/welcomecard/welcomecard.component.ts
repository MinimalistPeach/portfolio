import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'welcomecard',
  standalone: true,
  imports: [ButtonModule, TranslateModule],
  templateUrl: './welcomecard.component.html',
  styleUrl: './welcomecard.component.css'
})
export class WelcomecardComponent {

}
