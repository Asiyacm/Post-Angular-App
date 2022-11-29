import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




const myRoute:Routes=[
  {
    path: "",
    component:AddPostComponent
  },
  {
    path:"view",
    component:ViewPostComponent
  }
]



@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    ViewPostComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
