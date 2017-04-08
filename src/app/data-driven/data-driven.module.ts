import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

//Routing
import { DataDrivenRoutingModule } from './data-driven-routing.module';
// Component
import { MyFormComponent } from './components/form/form.component';
// Service
import { UserService } from './services/user.service';
// SharedModule
import { SharedModule } from './../shared/shared.module';
import { ControlMessageComponent } from './components/control-message/control-message.component';
import { FormMessageComponent } from './components/form-message/form-message.component';


@NgModule({
	declarations: [
		MyFormComponent,
		ControlMessageComponent,
		FormMessageComponent
	],
	imports: [
		SharedModule,
		HttpModule,
		ReactiveFormsModule,
		DataDrivenRoutingModule
	],
	providers: [UserService],
	bootstrap: []
})
export class DataDrivenModule { }
