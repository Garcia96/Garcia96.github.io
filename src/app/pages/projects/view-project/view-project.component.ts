import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProjectsData } from 'src/app/utils/projects';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css'],
})
export class ViewProjectComponent implements OnInit {
  project: any;
  safeUrl: any;
  id: string | null = '';
  projectsData = new ProjectsData();

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProject(this.id);
  }

  getProject(id: any) {
    const projectData = this.projectsData
      .getProjects()
      .find((d) => d.id === Number(id));
    if (projectData) {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        projectData.demo_link
      );
      this.project = projectData;
    }
  }
}
