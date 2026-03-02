import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: { name: string };
  location: { name: string };
}

export interface CharactersResponse {
  results: Character[];
}

@Injectable({ providedIn: 'root' })
export class RickmortyService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  getCharacters(): Observable<CharactersResponse> {
    return this.http.get<CharactersResponse>(`${this.baseUrl}/character`);
  }

  getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}/character/${id}`);
  }
}
