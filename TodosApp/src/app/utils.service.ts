import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  //Dependency injection=server calls
  constructor(private http:HttpClient,private router:Router) { }

  //CRUD operations
  getPersons()
  {
    return this.http.get('http://localhost:8000/api/user/');
  }

  getPerson(userID:string)
  {
    return this.http.get('http://localhost:8000/api/user/'+userID);
  }

  updatePerson(userID:string,updatedPer:any)
  {
    return this.http.put('http://localhost:8000/api/user/'+userID,updatedPer);

  }

 deletePerson(userID:string)
  {
    return this.http.delete('http://localhost:8000/api/user/'+userID);

  }

  addPerson(newPerObj:any)
  {
    return this.http.post('http://localhost:8000/api/user/',newPerObj);

  }



}
