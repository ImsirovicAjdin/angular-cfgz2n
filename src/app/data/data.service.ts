import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }


  postUserSettingsForm(userSettings: UserSettings) : Observable<any> {    
    return this.http.post('https://putsreq.com/6svnkfxLvb4dRTXVdDLO', userSettings);
  }

}
/*
A data service is an angular object that's marked as Injectable, and has a property providedIn with the value of 'root', so that creates a singleton that we can use throughout our application.
*/

/*
We build an observable, then call a subscribe method on it. That will kick off any asynchronous call.
*/

/*
HTTP Access Using HttpClient:

We had to make sure to import the HttpClientModule into our app's main module. And then once we did that, we could inject HttpClient into our data service.
*/

/*
Post a Form Using HttpClient
- http.post(url, data) (We pass it the url, and the data that we wanna post - which comes directly from our form).
*/

/* 

Handling POST errors: 
- Client-side errors are in the 400 range,
- Server-side errors are in the 500 range
*/

/*
Retrieve Data for Select Elements
- Use async pipe
- *ngFor="let item of items | async" (of course, 'item' would be some kind of Observable)
- This way if we're waiting for items to load asynchronously, we won't get any template errors
- items must be an Observable - if it's simply an array, you're gonna have problems
*/



