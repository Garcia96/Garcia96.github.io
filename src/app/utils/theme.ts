export class ConfigTheme {
  theme = '';
  private getMatchMediaTheme() {
    const userPrefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    const userPrefersLight =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches;

    return [userPrefersDark, userPrefersLight];
  }

  private setMatchMediaTheme() {
    const [userPrefersDark, userPrefersLight] = this.getMatchMediaTheme();

    if (userPrefersDark) {
      this.setTheme('dark');
    }
    if (userPrefersLight) {
      this.setTheme('light');
    }
  }

  public configTheme() {
    const localTheme = localStorage.getItem('theme');
    if (localTheme && (localTheme === 'dark' || localTheme === 'light')) {
      this.setTheme(localTheme);
    } else {
      this.setMatchMediaTheme();
    }
  }

  public setTheme(t: string) {
    document.documentElement.className = t;
    localStorage.setItem('theme', t);
    this.theme = t;
  }

  public getTheme() {
    return this.theme;
  }
}
