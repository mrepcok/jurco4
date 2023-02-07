import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { PoistnaUdalost } from '../models/poistna-udalost.model';

function processError<T>(error:HttpErrorResponse):Observable<T>{
  console.log(error);
  if (error.status===401){
    return throwError(() => new Error('Unauthorize'));
  }
  else{
    return throwError(()=> new Error('Unexpected error'));
  }
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly httpClient: HttpClient) { }

  getPoistneUdalosti<T=PoistnaUdalost[]>():Observable<T>{
    return this.httpClient.get<T>('https://fierce-bayou-75726.herokuapp.com/udalosti/')
    .pipe(catchError(error => processError<T>(error)), map(data => data))
  }
}
