import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routing';
import { CandidatesComponent } from './candidates/candidates.component';
import { IndexComponent } from './index/index.component';
import { MaterialModule } from './material/material.module';
import { NumberSummaryPipe } from './number-summary.pipe';
import { ServicesComponent } from './services/services.component';
import { AboutEducadosComponent } from './about-educados/about-educados.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CandidatesComponent,
    ServicesComponent,
    NumberSummaryPipe,
    AboutEducadosComponent
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
