import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationPage } from './pages/registration-page/registration-page.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/component/header/navbar/navbar.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { WelcomePage } from './pages/welcome-page/welcome.page';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MonitoringPage } from './pages/monitoring-page/monitoring-page.component';
import { ModalModule } from 'ngx-bootstrap/modal';

const COMPONENTS = [
  AppComponent,
];

const PAGES = [
  RegistrationPage,
  MonitoringPage
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PAGES,
    NavbarComponent,
    FooterComponent,
    WelcomePage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {
}
