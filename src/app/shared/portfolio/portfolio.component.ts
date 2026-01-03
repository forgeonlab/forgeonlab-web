import { Component } from '@angular/core';
import { ButtonComponent } from '../../core/components/button/button.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  openInstagram() {
    window.open('https://www.instagram.com/forgeonlab', '_blank');
  }
}
