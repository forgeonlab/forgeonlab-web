import { Component } from '@angular/core';
import { ButtonComponent } from '../../core/components/button/button.component';
import { WhatsappButtonComponent } from "../../core/components/whatsapp-button/whatsapp-button.component";

@Component({
  selector: 'app-contato',
  imports: [ButtonComponent, WhatsappButtonComponent],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss',
})
export class ContatoComponent {
  openWhatsApp() {
    window.open('https://wa.me/011959062010', '_blank');
  }
}
