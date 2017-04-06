import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//Routing
import { TemplateDrivenRoutingModule } from './template-driven-routing.module';
// Component
import { MyFormComponent } from './components/form/form.component';
// Service
import { UserService } from './services/user.service';
// SharedModule
import { SharedModule } from './../shared/shared.module';


@NgModule({
	declarations: [
		MyFormComponent
	],
	imports: [
		FormsModule,
		SharedModule,
		HttpModule,
		TemplateDrivenRoutingModule
	],
	providers: [UserService],
	bootstrap: []
})
export class TemplateDrivenModule { }
