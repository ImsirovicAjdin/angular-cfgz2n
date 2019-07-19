import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms'; 
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs'; // (3b) We'll Import Observable from module rxjs. 

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: [ './user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings : UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null,
    password: null,
    testing: null    
  }

  userSettings : UserSettings = { ...this.originalUserSettings};
  postError = false;
  postErrorMessage = '';
  /* (2) 
  subscriptionTypes = ['one', 'two', 'three']; 
  
  So I'll copy this variable name we're using, go to the component, and we'll add this in. And for now, let's make it a simple array of strings. And I'll use one, two, and three. 
  So I'll make sure everything is saved with a Save All, and let's look at our form. Under Subscription Type, we get one, two, and three. So that's working fine, the only problem is we're still hard coding the values into our application, one, two, and three right here. 
  */

/*
// (3a):
We want to reach out to a DataService and get the values from there. So let's just say that subscriptionTypes is an observable, and the type can be a string array. If you want to get objects, that's fine too. 
*/
  subscriptionTypes: Observable<string[]>; // (3a)

  constructor(private dataService: DataService) { }

  ngOnInit() { 
    this.dataService.getSubscriptionTypes(); // (4) And we need to populate subscriptionTypes now. We can do that in ngOnInit. We have our DataService, and we'll create a new method on that, we'll call it getSubscriptionTypes. 
  }

  onHttpError(errorResponse: any) {
    error => console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit', form.valid);

    if(form.valid) {
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        result => console.log('success: ', result),
        error => console.log('error: ', error)
      )
    } else {
      this.postError = true;
      this.postErrorMessage = "Please fix the above errors";
    }
    
  }

  onBlur(field: NgModel) {
    console.log('in onBlur', field.valid);
  }

}