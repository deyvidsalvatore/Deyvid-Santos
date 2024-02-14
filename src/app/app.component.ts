import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from "./nav/nav.component";
import { Title } from '@angular/platform-browser';

declare var particlesJS: any;

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterOutlet, HeaderComponent, NavComponent]
})
export class AppComponent {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Deyvid Santos');
  }

  ngOnInit() {
    particlesJS.load('particles', 'assets/particles.json', () => {
      console.log('callback - particles.js config loaded');
    });
  }
  
}
