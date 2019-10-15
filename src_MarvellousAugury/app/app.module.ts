import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserService } from './users/user.service';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { MarvellousAdminComponent } from './marvellous-admin/marvellous-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MarvellousAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
