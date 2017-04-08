import { Component, OnInit } from '@angular/core';
import { IUser } from './../../defines/user.interface';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MyValidators } from './../../validators/validators.class';

@Component({
	selector: 'my-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class MyFormComponent implements OnInit {

	user : IUser = null;
	resultSubmit : any;
	frmUser : FormGroup;

	constructor(
		private _formBuilder : FormBuilder
	) { }

	ngOnInit() {
		/*  

			TH 1 : Dùng form group

		*/

		// this.frmUser = new FormGroup({
		// 	'username' : new FormControl('',[
		// 		Validators.required,
		// 		Validators.minLength(5),
		// 		Validators.maxLength(20)
		// 	]),
		// 	'password' : new FormControl('',[
		// 		Validators.required,
		// 		Validators.minLength(5),
		// 		Validators.maxLength(20)
		// 	]),
		// 	'email' : new FormControl('',[
		// 		Validators.required,
		// 		Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")
		// 	]),
		// 	'status' : new FormControl(true),
		// });

		/*  

			TH 2 : Dùng form builder

		*/

		this.frmUser = this._formBuilder.group({
			'username' : ['',[
				Validators.required,
				Validators.minLength(5),
				Validators.maxLength(20)
			]],
			'password' : ['',[
				Validators.required,
				Validators.minLength(5),
				Validators.maxLength(20)
			]],
			'repassword' : ['',[
				Validators.required,
				Validators.minLength(5),
				Validators.maxLength(20)
			]],
			'email' : ['',[
				Validators.required,
				MyValidators.emailValidators
			]],
			'status' : [true],
		}, { validator: MyValidators.matchingPasswords('password','repassword') });

		this.frmUser.valueChanges.subscribe(
			( value : any ) => {  }
		);

	}

	onSubmit(){
		if(this.frmUser.dirty && this.frmUser.valid){
			this.resultSubmit = this.frmUser.value;
			this.user = {
				'username' : this.resultSubmit.username,
				'password' : this.resultSubmit.password,
				'email' : this.resultSubmit.email,
				'status' : this.resultSubmit.status,
			}
		}
	}

	onReset(){
		this.frmUser.reset();
	}

}
