import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppealDetailsComponent} from './appeal-details/appeal-details.component';
import { WizardsampleComponent } from './wizardsample/wizardsample.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routs: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {path: 'appeal-details', component: AppealDetailsComponent},
  {path: 'appeal-wizard', component: WizardsampleComponent},
  {path: 'dashboard', component: DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routs)],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
//export const routingComponents = [AppealDetailsComponent];
export const routes: ModuleWithProviders = RouterModule.forRoot(routs);
