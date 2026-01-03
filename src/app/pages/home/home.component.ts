import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ButtonComponent } from '../../core/components/button/button.component';
import { HeroComponent } from "../../shared/hero/hero.component";
import { ServicosComponent } from "../../shared/servicos/servicos.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [ButtonComponent, HeroComponent, ServicosComponent],
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
