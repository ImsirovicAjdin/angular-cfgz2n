import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AppComponent } from './app.component';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component'; 

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, ButtonsModule ],
  declarations: [ AppComponent, UserSettingsFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

/*
ng add ngx-bootstrap --component buttons // https://blog.angular.io/version-6-of-angular-now-available-cc56b0efa7a4
*/
