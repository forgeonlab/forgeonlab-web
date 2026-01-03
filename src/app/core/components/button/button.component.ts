import { NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  imports: [NgClass],
})
export class ButtonComponent {
  /**
   * Variante visual do botão
   * 'primary' | 'secondary'
   */
  @Input() variant: 'primary' | 'secondary' = 'primary';

  /**
   * Desabilita o botão
   */
  @Input() disabled = false;

  /**
   * Evento de clique
   */
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    if (this.disabled) return;
    this.clicked.emit();
  }
}
