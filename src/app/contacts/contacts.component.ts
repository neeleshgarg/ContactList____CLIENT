import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from  '../contact';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
contacts : Contact[];
contact : Contact;
first_name:String;
last_name:String;
phone:String;


  constructor(private contactService:ContactService) { }

  addContact(){
    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone      
    }
    this.contactService.addContact(newContact)
    .subscribe(contact=>{
      console.log("added result",contact);
      newContact["_id"]=contact["_id"];
      this.contacts.push(newContact);
    });
  }

  deleteContact(id: any){
    this.contactService.deleteContact(id)
    .subscribe(data=>{
      console.log("added result",data);
      if(data['n']==1){
        for(var  i=0;i<this.contacts.length;i++){
          if(this.contacts[i]._id==id)
          {
            this.contacts.slice(i,1);
          }
        }
      }
    })
  }

  ngOnInit(): void {

    this.contactService.getContacts()
    .subscribe(res=>{
      this.contacts=res;
      console.log(res);
    })

  }

}
