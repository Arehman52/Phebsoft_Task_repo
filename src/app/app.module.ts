import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input/public-api';

@NgModule({
  imports: [BrowserModule, FormsModule, MatInputModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
