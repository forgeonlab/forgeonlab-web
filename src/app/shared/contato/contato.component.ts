import { Component } from '@angular/core';
import { WhatsappButtonComponent } from "../../core/components/whatsapp-button/whatsapp-button.component";

@Component({
  selector: 'app-contato',
  imports: [WhatsappButtonComponent],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss',
})
export class ContatoComponent {
  openWhatsApp() {
    window.open('https://wa.me/011959062010', '_blank');
  }
}
