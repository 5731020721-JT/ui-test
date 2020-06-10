
    import { Injectable } from '@angular/core';
    import { HttpClient, HttpHeaders } from '@angular/common/http';
    import { IUserinfo} from './payment-info.model'
    import { BehaviorSubject, Observable, of } from 'rxjs';
    import { Router } from '@angular/router';
    import { map } from 'rxjs/operators';
    @Injectable({
      providedIn: 'root'
    })
    export class LoginService {

      private currentUserSubject: BehaviorSubject<IUserinfo>;
      public currentUser: Observable<IUserinfo>;

       User :any;
    
       private baseUrl = 'http://localhost:5555/userid/';

        constructor(private httpClient:HttpClient, private router: Router) { 

          this.currentUserSubject = new BehaviorSubject<IUserinfo>(JSON.parse(localStorage.getItem('currentUser')));
          this.currentUser = this.currentUserSubject.asObservable();

        }

        public get currentUserValue(): IUserinfo {
          return this.currentUserSubject.value;
      }
      
        getUser(id): Observable<IUserinfo[]> {
          console.log(id)

          return this.httpClient.post<any>(`${this.baseUrl}`, {id : id})
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                    console.log(user)
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    return user;
            }));
             
          // localStorage.setItem('currentUser', JSON.stringify(user));
          // this.currentUserSubject.next(user);
         // return  this.httpClient.get<IUserinfo[]>(`${this.baseUrl}` + `${id}`)
         
        }

        
    logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
   }

      
      
}