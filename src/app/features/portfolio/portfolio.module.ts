import { NgModule } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { ProfessionalComponent } from './components/professional/professonal.component';
import { TechnicalComponent } from './components/technical/technical.component';
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

const routes: Routes = [{ path: '', component: PortfolioComponent }];

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    EducationComponent,
    ProfessionalComponent,
    TechnicalComponent,
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
  ],
})
export class PortfolioModule {}
