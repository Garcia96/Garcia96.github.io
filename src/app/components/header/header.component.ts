import { Component, OnInit } from '@angular/core';
import { ConfigTheme } from 'src/app/utils/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  theme = new ConfigTheme();

  ngOnInit(): void {
    this.theme.configTheme();
  }
}
