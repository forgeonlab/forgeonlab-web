import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [NgIf],
})
export class HeaderComponent implements OnInit {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  constructor() {}

  ngOnInit() {}

  openWhatsApp() {
      Swal.fire({
        title: 'Fale conosco',
        text: 'Você será redirecionado para o WhatsApp',
        icon: 'info',
        confirmButtonText: 'Continuar',
        confirmButtonColor: '#7b4dff'
      }).then(() => {
        window.open('https://wa.me/11959062010', '_blank');
      });
    }
}
