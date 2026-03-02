import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RickmortyService, Character } from '../rickmorty.service';

@Component({
  selector: 'app-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  private readonly rickService = inject(RickmortyService);
  private readonly route = inject(ActivatedRoute);

  character = signal<Character | null>(null);

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.rickService.getCharacter(id).subscribe(c => this.character.set(c));
  }
}
