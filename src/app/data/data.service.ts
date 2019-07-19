import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  /*
  // (5) And we don't need to pass it anything, but we're working with observables, so we can actually assign this whole observable to subscriptionTypes. And let's create this method. I created it here in our DataService. 

  getSubscriptionTypes(): Observable<string[]> {
    throw new Error("Method not implemented.");
  }
  */

  constructor(private http: HttpClient) {}


  // (6) I just want to put it underneath the constructor. Here's where we can use the of function again. We'll return of, and we'll say Monthly, Annual, and Lifetime. And we're working with a string array, so we'll make sure we have an array. So we're not reaching out to a DataService, we've already seen how to do that with our post, in this case we would simply use a get, but it's good enough for now to work with an observable created by the of function.
  
  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }


  postUserSettingsForm(userSettings: UserSettings) : Observable<any> {    
    return this.http.post('https://putsreq.com/6svnkfxLvb4dRTXVdDLO', userSettings);
  }

}