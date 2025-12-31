import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, ScrollRevealDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  pokemonList = [
    { name: 'Pikachu', icon: '⚡🐭', color: '#facc15' },
    { name: 'Charmander', icon: '🔥🦖', color: '#f87171' },
    { name: 'Squirtle', icon: '💧🐢', color: '#60a5fa' },
    { name: 'Bulbasaur', icon: '🍃🐸', color: '#4ade80' },
    { name: 'Gengar', icon: '👻😈', color: '#a78bfa' },
    { name: 'Eevee', icon: '🦊✨', color: '#fbbf24' },
    { name: 'Jigglypuff', icon: '🎤🎈', color: '#f472b6' }
  ];

  currentPokemon = this.pokemonList[0];

  ngOnInit() {
    this.currentPokemon = this.pokemonList[Math.floor(Math.random() * this.pokemonList.length)];
  }

  downloadResume() {
    // Logic to download resume
    // For now, we can link to a file in assets or open a URL
    window.open('assets/resume.pdf', '_blank');
  }
}
