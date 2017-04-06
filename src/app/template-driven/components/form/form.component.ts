import { Component, OnInit } from '@angular/core';
import { IUser } from './../../defines/user.interface';

@Component({
	selector: 'my-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class MyFormComponent implements OnInit {

	user : IUser = null;
	resultSubmit : any;

	constructor() { }

	ngOnInit() {
		this.user = {
			username : "",
			password : "",
			email : "",
			status : true
		}
	}

	resetForm(frmUser : any){
		frmUser.reset();
	}

	onSubmitForm(value : any){
		this.resultSubmit = value;
	}

}
