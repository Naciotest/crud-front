import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './views/list/list.component';
import { CreateComponent } from './views/create/create.component';
import { DetailsComponent } from './views/details/details.component';
import { UserRouting } from './user.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    UserRouting,
    ReactiveFormsModule
  ],
  declarations: [
    LayoutComponent,
    ListComponent,
    CreateComponent,
    DetailsComponent
  ]
})
export class UserModule { }
