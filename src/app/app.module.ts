import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router"
import { FlexLayoutModule } from "@angular/flex-layout"

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { routes } from "./app.routing"
import { MaterialModule } from "./material/material.module"

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
