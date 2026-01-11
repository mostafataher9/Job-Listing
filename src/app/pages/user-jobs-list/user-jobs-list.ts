import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-jobs-list',
  imports: [],
  templateUrl: './user-jobs-list.html',
  styleUrl: './user-jobs-list.css',
})
export class UserJobsList {

   constructor(
    private router: Router,
   ){}
  
  viewJob(job: any) {
    this.router.navigate(['/job-view', job.id]);
  }

  
  editJob(job: any) {
    this.router.navigate(['/job-view', job.id]);
  }

    
  deleteJob(id: number) {
    if (!confirm('Are you sure you want to delete this job?')) return;

    // Call API here
    console.log('Deleting job with id:', id);
   

}
