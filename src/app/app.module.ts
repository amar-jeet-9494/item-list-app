import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
 declarations: [
  AppComponent,
   ItemListComponent
 ],
 imports: [
   BrowserModule,
   HttpClientModule,
   FormsModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
