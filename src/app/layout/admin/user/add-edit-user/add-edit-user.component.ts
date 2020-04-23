import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { TosterService } from 'src/app/services/toster.service';
import { Location } from '@angular/common';
import { routerTransition } from 'src/app/router.animations';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import csc from 'country-state-city'
import { ICountry, IState, ICity } from 'country-state-city'

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss'],
  animations: [routerTransition()]
})
export class AddEditUserComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  data: any = [];
  model2:any;
  id: any;
  loading: boolean = false;
  country:any=[];
  state:any=[];
  city:any=[];
  dropdownSettings = {
    singleSelection: true,
    itemsShowLimit: 2,
    allowSearchFilter: true,
    idField: 'id',
    textField: 'name',
  };;

  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private router: Router, private toaster: TosterService, private _location: Location,
    private calendar: NgbCalendar) {
    this.id = this.router.getCurrentNavigation().extras.state;
    this.createUserForm();
    if (this.id) {
      this.getUser();
    } else {
      this.loading = true;
    }
  }

  ngOnInit(): void {
    this.country=csc.getAllCountries();
  }
  createUserForm() {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email,Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]],
      dob: [null, [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]],
      password: ['', [Validators.required, Validators.minLength(6),Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]],
      country:[''],
      city: [''],
      state: [''],
      pin: [''],
      addressLine1: [''],
      addressLine2: [''],
    });
    this.userForm.controls['dob'].valueChanges.subscribe( data => {
    if(!data || (typeof data === 'string' && data.length == 0)) {
      this.userForm.patchValue({
        dob: null
      }, {emitEvent: false});
    }
  });
  }

  get f() { return this.userForm.controls; }

  getUser() {
    this.userService.getUserById(this.id).subscribe(data => {
      if (data.success) {
        this.userForm.patchValue(data.data);
        this.loading = true;
      } else {
        this.toaster.warning(data.msg, 'User');
      }
    },
      error => {
        this.toaster.error(error.error.msg, 'User');
      });
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    } else {
      this.userService.save(this.userForm.value, this.id)
        .subscribe(
          data => {
            if (data.success) {
              this.toaster.success(data.msg, 'User');
              this._location.back();
            } else {
              this.toaster.warning(data.msg, 'User');
            }
          },
          error => {
            this.toaster.error(error.error.msg, 'User');
          });
    }
  }
  backClicked() {
    this._location.back();
  }
  dateChanged() {
    let dateField = this.userForm.get('dob')
    if (dateField.valid) {
      console.log('Date field is valid')
    } else {
      console.log('Date field is invalid')
    }
    console.log('Date field value: ', dateField.value)
  }
  onCountrySelect(event){
    this.state=csc.getStatesOfCountry(event.id);
  }
  onStateSelect(event){
    this.city=csc.getCitiesOfState(event.id);
  }
}
