import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-loading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  template: `
    <div
      class="loading-overlay"
      [class.is-hiding]="isHiding()"
      role="status"
      aria-label="Cargando aplicación"
    >
      <div class="portal-container">
        <img ngSrc="/portalimage.webp" width="1700" height="1700" alt="" priority />
      </div>
      <p class="loading-text" aria-live="polite">Cargando...</p>
    </div>
  `,
  styleUrl: './loading.css',
})
export class Loading {
  readonly isHiding = input(false);
}
