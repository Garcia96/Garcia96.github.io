import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsData } from 'src/app/utils/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projectsData = new ProjectsData();
  projects: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.projects = this.projectsData.getProjects();
  }

  navigateTo(id: any) {
    this.router.navigate(['/projects', id]);
  }
}
