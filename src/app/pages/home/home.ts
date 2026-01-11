import { Component, OnInit } from '@angular/core';
import { Job } from "../../../../../app/Models/Job";
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  jobs: Job[]=[];
  ngOnInit(): void {
    this.fetchJobs();
  }
  fetchJobs(){
    fetch('http://127.0.0.1:8000/api/jobs')
      .then(res => res.json())
      .then((data: Job[]) => {
        this.jobs = data;
      });
  }
}

