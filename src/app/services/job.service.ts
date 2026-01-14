export class JobService extends Service
getJobs() {
  return fetch('http://127.0.0.1:8000/api/jobs')
    .then(res => res.json());
}



