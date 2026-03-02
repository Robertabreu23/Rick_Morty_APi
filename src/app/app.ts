import { Component, ChangeDetectionStrategy, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Loading } from './loading/loading';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, Loading],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  readonly showLoading = signal(true);
  readonly isHidingLoading = signal(false);

  ngOnInit(): void {
    setTimeout(() => this.isHidingLoading.set(true), 2500);
    setTimeout(() => this.showLoading.set(false), 3200);
  }
}
