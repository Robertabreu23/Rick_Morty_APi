import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { RickmortyService, Character } from '../rickmorty.service';

@Component({
  selector: 'app-characters',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  templateUrl: './characters.html',
  styleUrl: './characters.css',
})
export class Characters {
  private readonly rickService = inject(RickmortyService);
  private readonly router = inject(Router);

  characters = signal<Character[]>([]);

  constructor() {
    this.rickService.getCharacters().subscribe(response => {
      this.characters.set(response.results);
    });
  }

  goToDetail(id: number) {
    this.router.navigate(['/character', id]);
  }
}
