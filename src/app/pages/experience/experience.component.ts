import { Component, OnInit } from '@angular/core';
import data from '../../../assets/json/experience.json';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experiences = data;
  ngOnInit(): void {}
}
