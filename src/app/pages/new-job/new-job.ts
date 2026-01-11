import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-job',
  imports: [],
  templateUrl: './new-job.html',
  styleUrl: './new-job.css',
})
export class NewJob {
  title = '';
  description = '';
  location = '';
  selectedFile!: File | null;
  selectedFileName='';
  contact_email = '';
  web_url = '';
  tags = '';
  company_logo= '';
 
  constructor(private Location: Location){}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;             // store the File object
      this.selectedFileName = file.name;    // display file name in UI
    }
  }
   onSubmit(event: any){
      const formData=new FormData();
      formData.append('title', this.title);
      formData.append('description',this.description);
      formData.append('location',this.location);
      formData.append('contact_email',this.contact_email);
      formData.append('web_url',this.web_url);
      formData.append('tags',this.tags);
      if(this.selectedFile)
           formData.append('company_logo',this.selectedFile);
      fetch('http://127.0.0.1:8000/api/job',{ method: 'POST', body: formData})
      .then(res=>res.json())
      .then(data=> alert('Job Saved Successfully'))
      .catch(err=> { console.log('error has occured',err); alert('error has occured');})
   }
   goBack(){
      this.Location.back();
  }
}
