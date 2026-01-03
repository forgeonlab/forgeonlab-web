import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.scss',
})
export class WhatsappButtonComponent {
  @Input() phone = '011959062010';
  @Input() message = 'Olá! Gostaria de um orçamento.';

  openWhatsApp() {
    const url = `https://wa.me/${this.phone}?text=${encodeURIComponent(
      this.message
    )}`;
    window.open(url, '_blank');
  }
}
