import { Component } from '@angular/core';
import { Job } from "../../../../../app/Models/Job";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-view',
  imports: [],
  templateUrl: './job-view.html',
  styleUrl: './job-view.css',
})
export class JobView {
        job:  Job={
         id: 0,
         company_name: '',
         job_title: '',
         job_location: '',
         contact_email: '',
         web_url: '',
         tags: '',
         company_logo: '',
         job_description: ''
    };
    constructor(private route:ActivatedRoute) {}

    ngOnInit(){
         const id = this.route.snapshot.paramMap.get('id');
    }

}
