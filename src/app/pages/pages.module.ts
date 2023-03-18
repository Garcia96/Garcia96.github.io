import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewProjectComponent } from './projects/view-project/view-project.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    HomeComponent,
    ExperienceComponent,
    ProjectsComponent,
    ViewProjectComponent,
  ],
  providers: [],
  imports: [BrowserModule, AppRoutingModule, ComponentsModule],
})
export class PagesModule {}
