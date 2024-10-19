import { NgModule } from '@angular/core';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { PortfolioComponent } from './portfolio.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { AccordionModule } from 'primeng/accordion';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { TechnicalSkillsComponent } from './components/technical-skills/technical-skills.component';
import { ProfessionalExperienceComponent } from './components/professional-experience/professional-experience.component';

const routes: Routes = [{ path: '', component: PortfolioComponent }];

@NgModule({
  declarations: [
    IntroductionComponent,
    ContactComponent,
    EducationComponent,
    TechnicalSkillsComponent,
    ProfessionalExperienceComponent,
    PortfolioComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    PanelModule,
    ButtonModule,
    ImageModule,
    TimelineModule,
    CardModule,
    DropdownModule,
    DividerModule,
    AccordionModule,
    FieldsetModule,
    AvatarModule,
    DialogModule,
    TagModule,
    NgxExtendedPdfViewerModule,
  ],
})
export class PortfolioModule {}
