import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CreateComponent } from './views/create/create.component';
import { ListComponent } from './views/list/list.component';
import { DetailsComponent } from './views/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: ':id',
        component: DetailsComponent
      },
      {
        path: '**',
        redirectTo: 'create'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRouting { }
