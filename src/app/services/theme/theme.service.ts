import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() {
  }

  toDarkTheme() {
    var body = document.getElementById('body');
    body.classList.remove("dark-theme");
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  }

  toLightTheme() {
    var body = document.getElementById('body');
    body.classList.remove("dark-theme");
    body.classList.remove("light-theme");
    body.classList.add("light-theme");
  }
}
