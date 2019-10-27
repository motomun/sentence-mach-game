import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SentenceMuchComponent } from './sentence-much/sentence-much.component';

@NgModule({
  declarations: [
    AppComponent,
    SentenceMuchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [SentenceMuchComponent]
})
export class AppModule { }
