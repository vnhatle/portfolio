import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LayoutComponent],
  imports: [CommonModule, RouterModule, MenubarModule, DividerModule],
  exports: [CommonModule, HeaderComponent, FooterComponent, LayoutComponent],
})
export class SharedModule {}
