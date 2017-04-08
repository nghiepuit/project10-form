import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
// Component
import { MyFormComponent } from './components/form/form.component';

const appRoutes: Routes = [
	{ path: 'data-driven', component: MyFormComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DataDrivenRoutingModule {}