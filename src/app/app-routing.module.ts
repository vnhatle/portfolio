import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'portfolio',
        loadChildren: () =>
          import('./features/portfolio/portfolio.module').then(
            (m) => m.PortfolioModule
          ),
      },
      {
        path: '',
        redirectTo: '/portfolio',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
