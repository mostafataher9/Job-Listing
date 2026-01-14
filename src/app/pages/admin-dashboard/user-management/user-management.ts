import { Component, OnInit } from '@angular/core';
import {User} from '../../../../../app/Models/User';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

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
    mode: 'list' | 'view' | 'edit' = 'list';
    selectedUser: User | null=null;

     
    constructor(private http: HttpClient){}

    ngOnInit(): void {
       this.loadUsers();
   }

    loadUsers(): void {
    this.http.get<any[]>('{apiUrl}/users')
      .subscribe(data => this.users = data);
    }

      AddUser =async(event: any) =>{
            event.preventDefault();
            const { id, name,  phone, email, employment_type, members_role_id } = newMember;
            const res= await fetch(`${apiUrl}/user`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" ,
                            "accept": "application/json"
                },
                body: JSON.stringify({ name,  email, password }),
            });
        
            const data = await res.json();
            if (res.ok) {
              alert(data.message)
              // Store token
              router.push("/");
            } else {
                 setError(data.message || "Member Creation Failed");
            }
    };

    // Delete member
    DeleteUser(id: number){
      if (!confirm("Are you sure you want to delete this member?")) return;
      
       this.http.delete<any>(`${this.apiUrl}/user/${id}`)
    .subscribe({
      next: (res) => {
        alert(res.message);
        this.loadUsers(); // refresh table
      },
      error: (err) => {
        console.error(err);
        alert('Failed to delete user');
      }
    });
      const res=await fetch(`${apiUrl}/user/${id}`, { method: "DELETE" });
      const data = await res.json();
      alert(data.message)
    };

    // Save edited member
    EditUser(user: User){
      this.selectedUser = user;
      this.mode='edit';
      e.preventDefault();
      if (!editingMember) return;
      
      const { id, name,  phone, email, employment_type, members_role_id } = editingMember;

      const res = await fetch(`${apiUrl}/user/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone,  email, employment_type, members_role_id }),
      });
      const updatedMember = await res.json();
      alert(updatedMember.message);
      setMembers(prev =>
                prev.map(m => (m.id === updatedMember.member.id ? updatedMember.member : m))
      );
      setEditingMember(null);
    };
    
   ViewUser(user: User){    
      this.selectedUser = user;
      this.mode='view';
   }

   backToList(){
      this.mode='list';
      this.selectedUser = null;
   }

}
