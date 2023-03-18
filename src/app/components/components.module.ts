import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [HeaderComponent, SkillsComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, SkillsComponent],
})
export class ComponentsModule {}
