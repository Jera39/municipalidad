import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, MenuBarComponent],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent implements OnInit{

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goRegistroMDP(){
    this.router.navigate(['mesa-partes-step1']);

  }

  goTomesa(){
    this.router.navigate(['mesa-partes-step2']);

  }
  goToreclamo(){
    this.router.navigate(['resgistro-de-reclamos']);

  }
  goToback(){
    console.log('goToback');
    this.router.navigate(['']);
  }
}
