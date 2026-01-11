import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
   name: string ='';
   email: string ='';
   password: string ='';
   onSubmit(form:any){
      if(!form.valid)  return;
      const API_URL= 'http://127.0.0.1:8000/api/login';
      fetch(API_URL,{
             method: 'POST',
             headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
             },
             body: JSON.stringify({
                name: this.name,
                email: this.email,
                password: this.password
             })

      }).then(res => res.json())
        .then(data => {
                        console.log('Success', data); 
        })
        .catch(err => { console.error('Error', err);})
   }
}
