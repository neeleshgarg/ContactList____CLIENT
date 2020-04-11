import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import {Contact} from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private http:HttpClient ) { }

    getContacts() 
    {
    return this.http.get<any>('http://localhost:3000/api/contacts') 
    //.map(res=>res.json());
    }

   addContact(newContact){
     var headers = new HttpHeaders();
     headers.append('Content-type', 'application/json');
     return this.http.post('http://localhost:3000/api/contacts',newContact,{headers:headers});
   }

    //delete method
    deleteContact(id){
      return this.http.delete('http://localhost:3000/api/contact/'+id);
    }

  }   