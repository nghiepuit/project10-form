import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
// Component
import { MyFormComponent } from './components/form/form.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/form', pathMatch: 'full'},
	{ path: '', component: MyFormComponent },
	{ path: 'form', component: MyFormComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TemplateDrivenRoutingModule {}