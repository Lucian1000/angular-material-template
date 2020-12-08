import { Injectable } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../theme/theme.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private languageKey = 'language';
  private themeKey = 'theme';

  constructor(
    //private dateAdapter: DateAdapter<any>,
    private translateService: TranslateService,
    private themeService: ThemeService
  ) {
  }

  public get language(): string {
    return localStorage.getItem(this.languageKey);
  }

  public get theme(): string {
    return localStorage.getItem(this.themeKey);
  }

  public set language(value: string) {
    //this.dateAdapter.setLocale(value);
    this.translateService.use(value);

    localStorage.setItem(this.languageKey, value);
  }

  public set theme(value: string) {
    if (value === "dark")
      this.themeService.toDarkTheme();
    else if (value === "light")
      this.themeService.toLightTheme();

    localStorage.setItem(this.themeKey, value);
  }

  init() {
    this.theme === "dark" ? this.themeService.toDarkTheme() : this.themeService.toLightTheme();
    this.translateService.use(this.language);
  }
}
