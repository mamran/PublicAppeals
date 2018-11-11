import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppealDetailsComponent } from './appeal-details/appeal-details.component';
import { AppRoutingModule, routes } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClarityModule, ClrFormsNextModule  } from '@clr/angular';
import { WizardsampleComponent } from './wizardsample/wizardsample.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard, StatModule } from './shared';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    AppealDetailsComponent,
    MainNavComponent,
    WizardsampleComponent,
    DashboardComponent,



  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    routes,
    ClarityModule,
    ClrFormsNextModule,
    FormsModule,
    StatModule,



    ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
