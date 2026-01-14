import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Job} from '../../../../../app/Models/Job';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-user-jobs-list',
  imports: [],
  templateUrl: './user-jobs-list.html',
  styleUrl: './user-jobs-list.css',
})
export class UserJobsList implements OnInit  {
   jobs: Job[]=[];
    apiUrl = environment.apiUrl;
    appUrl = environment.appUrl;
   constructor(private http: HttpClient, private router: Router,
   ){}

   ngOnInit(): void {
       this.loadJobs();
   }

  loadJobs(): void {
    this.http.get<any[]>('{apiUrl}/users')
      .subscribe(data => this.jobs = data);
  }
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
