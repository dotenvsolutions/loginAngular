import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { settings } from '../settings/appsettings';
import { Observable, map } from 'rxjs';
import { ApiResponse } from '../interfaces/ApiResponse';
import { Login } from '../interfaces/Login';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private readonly serviceUrl:string = settings.apiURL
 
  constructor(private http : HttpClient) { }

  loginUser(user: Login): Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.serviceUrl+'/auth/login', user).pipe(map((dataRaw: ApiResponse) => dataRaw))
  }

  registerUser(userData: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.serviceUrl+'/auth/register',userData).pipe(map((data: ApiResponse) => data))
  }
}
