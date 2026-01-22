import { Component, OnInit } from '@angular/core';
import { User } from '../../../../../app/Models/User';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-management',
  imports: [],
  templateUrl: './user-management.html',
  styleUrl: './user-management.css',
})
export class UserManagement implements OnInit  {
    users: User[]=[];
    apiUrl = environment.apiUrl;
    appUrl = environment.appUrl;
    mode:  'add' | 'list' | 'view' | 'edit' = 'list';
    selectedUser: User | null=null;
    constructor(private http: HttpClient, private router: Router){}

    newUser: User={
      name:  '',
      email:  '',
      password:  '',
    };

   editUser: User={
      name:  '',
      email:  '',
      password:  '',
    };
    
    ngOnInit(): void {
       this.loadUsers();
   }

    loadUsers(): void {
    this.http.get<any[]>('{apiUrl}/users')
      .subscribe(data => this.users = data);
    }

    AddUser =async(event: any) =>{
            event.preventDefault();
            const {  name, email,  password} = this.newUser;
            this.http.post<any>(`${this.apiUrl}/user`,
            {
                 name,
                 email,
                 password
            }).subscribe({
                  next: (res) => {
                      alert(res.message || 'User added successfully');
                  }, 
                  error: (err) => {
                      console.error(err);
                      alert('Failed to add user');
                  }  
                });
    }

    // Delete member
    DeleteUser(id: number){
          if (!confirm("Are you sure you want to delete this member?")) return;
          
          this.http.delete<any>(`${this.apiUrl}/user/${id}`)
        .subscribe({
          next: (res) => {
            alert(res.message || 'User deleted Successfully');
            this.loadUsers(); // refresh table
          },
          error: (err) => {
            console.error(err);
            alert('Failed to delete user');
          }
    });
    }

    // Save edited member
    EditUser(id: number){
      const {  name, email,  password} = this.editUser;

      const res =  this.http.put<any>(`${this.apiUrl}/user/${id}`, {
                 name,
                 email,
                 password
            }).subscribe({
                  next: (res) => {
                      alert(res.message || 'User updated successfully');
                  }, 
                  error: (err) => {
                      console.error(err);
                      alert('Failed to edit user');
                  }  
                });
    }
    
   View(user: User){    
      this.selectedUser = user;
      this.mode='view';
   }

   backToList(){
      this.mode='list';
      this.selectedUser = null;
   }
   
   Edit(user: User){
      this.selectedUser = user;
      this.mode='edit';
   }
   Delete(id: number){

   }

}
