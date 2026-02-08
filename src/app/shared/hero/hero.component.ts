import { Component, HostBinding, HostListener } from '@angular/core';
import { ButtonComponent } from '../../core/components/button/button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @HostBinding('style.--parallax-y') parallaxY = '0px';

  private ticking = false;

  @HostListener('window:scroll')
  onScroll() {
    if (this.ticking) {
      return;
    }

    this.ticking = true;
    window.requestAnimationFrame(() => {
      const offset = window.scrollY * 0.08;
      this.parallaxY = `${offset}px`;
      this.ticking = false;
    });
  }

  onBudgetClick() {
    console.log('Solicitar orçamento');
  }

  onProjectsClick() {
    console.log('Ver projetos');
  }
}
