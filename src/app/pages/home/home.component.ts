import { Component, OnInit } from '@angular/core';
import data from '../../../assets/json/skills.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  skills = data;

  ngOnInit(): void {}
}
