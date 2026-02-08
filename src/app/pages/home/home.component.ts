import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { HeroComponent } from "../../shared/hero/hero.component";
import { ServicosComponent } from "../../shared/servicos/servicos.component";
import { BeneficiosComponent } from "../../shared/beneficios/beneficios.component";
import { PortfolioComponent } from '../../shared/portfolio/portfolio.component';
import { FooterComponent } from "../../core/components/footer/footer.component";
import { ContatoComponent } from "../../shared/contato/contato.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [HeroComponent, ServicosComponent, BeneficiosComponent, PortfolioComponent, FooterComponent, ContatoComponent],
})
export class HomeComponent {

  openWhatsApp() {
    Swal.fire({
      title: 'Fale conosco',
      text: 'Você será redirecionado para o WhatsApp',
      icon: 'info',
      confirmButtonText: 'Continuar',
      confirmButtonColor: '#7b4dff'
    }).then(() => {
      window.open('https://wa.me/011959062010', '_blank');
    });
  }
}
