import { Component, ViewEncapsulation } from '@angular/core';
import { LoaderService } from '../loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SpinnerComponent {
  message = 'Loading...';
  constructor(public loader: LoaderService) {
    this.message = this.loader.getMessage();
  }
  ngDoCheck() {
    this.message = this.loader.getMessage();
  }
}
