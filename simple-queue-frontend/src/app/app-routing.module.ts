import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPage } from './pages/registration-page/registration-page.component';
import { PAGES, TEXTS } from './app.constants';
import { WelcomePage } from './pages/welcome-page/welcome.page';
import { MonitoringPage } from './pages/monitoring-page/monitoring-page.component';
import { TicketsResolverService } from './shared/resolver/tickets-resolver.service';

const EVERY_PATHS = '**';
const PATH_MATCH_FULL = 'full';

const routes: Routes = [
  {
    path: TEXTS.EMPTY_STRING,
    redirectTo: PAGES.WELCOME,
    pathMatch: PATH_MATCH_FULL,
  },
  {
    path: PAGES.WELCOME,
    component: WelcomePage,
  },
  {
    path: PAGES.REGISTRATION,
    component: RegistrationPage,
  },
  {
    path: PAGES.MONITORING,
    component: MonitoringPage,
    resolve: {
      tickets: TicketsResolverService
    }
  },
  {
    path: EVERY_PATHS,
    redirectTo: PAGES.WELCOME,
    pathMatch: PATH_MATCH_FULL,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
