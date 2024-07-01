import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenuBarComponent } from '../../menu-bar/menu-bar.component';
@Component({
  selector: 'app-resgistro-de-reclamos',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, MenuBarComponent],
  templateUrl: './resgistro-de-reclamos.component.html',
  styleUrl: './resgistro-de-reclamos.component.css'
})
export class ResgistroDeReclamosComponent {

}
