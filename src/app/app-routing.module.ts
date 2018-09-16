import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppealDetailsComponent} from './appeal-details/appeal-details.component';

const routs: Routes = [
  {path: 'appeal-details', component: AppealDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routs)],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [AppealDetailsComponent];
