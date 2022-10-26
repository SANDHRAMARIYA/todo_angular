import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { TodoComponent } from './todo/todo.component';

const appRoutes:Routes=[
  {
    path:"",component:SigninComponent
  },
  {
    path:"signup",component:SignupComponent
  },
  {
    path:"todo",component:TodoComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
