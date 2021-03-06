import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
// Component
import { MyFormComponent } from './components/form/form.component';

const appRoutes: Routes = [
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