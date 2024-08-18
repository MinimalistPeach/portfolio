import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'welcomecard',
  standalone: true,
  imports: [
    ButtonModule,
    TranslateModule,
    RouterLink],
  templateUrl: './welcomecard.component.html',
  styleUrl: './welcomecard.component.css'
})
export class WelcomecardComponent {


  constructor(private viewPortScoller: ViewportScroller, private router: Router) { }

  public scroll(elementId: string): void {
    if(this.router.url != '/') {
      this.router.navigate(['/']);
    }
    this.viewPortScoller.scrollToAnchor(elementId);
  }


}
