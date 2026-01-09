<?php
namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request; 
class JobController extends Controller{
 
    public function getJobs(){
       //This guarantees sequential IDs every time to avoid Once I edit a member it updated in db and edited member appears in postgresql and browser at the last row
        return Job->orderBy('id', 'asc')->get();
    }
    
    public function getJob($id){
        return Job::findOrFail($id);  
        //Finds the record with that ID  If not found → Laravel automatically returns 404 Not Found 
    }

    public function add(Request $request){
        $request->validate([
            "company_name" => "required|string",
            "job_title" => "required|string",
            "job_location" => "required|string",
            "contact_email" => "required|string",
            "web_url" => "required|string",
            "tags" => "required|string",
            "company_logo" => "required|string",
            "job_description" => "required|string"
        ]);
        //to create job I need to create the id  
        $nextId = Job::max('id') + 1;
        $job=Job::create([
            "id" => $nextId,
            "company_name" => $request->company_name,
            "job_title" => $request->job_title,
            "job_location" => $request->job_location,
            "contact_email"=> $request->contact_email,
            "web_url" => $request->web_url,
            "tags" => $request->tags,
            "company_logo" => $request-> company_logo,
            "job_description" => $request-> job_description
        ]);
        return response()->json([
            'job' => $job,
            'message' => 'Job was added successfully',
       ]);
    }

    public function update(Request $request, $id){
           $request->validate([
                                "company_name" => "required|string",
                                "job_title" => "required|string",
                                "job_location" => "required|string",
                                "contact_email" => "required|string",
                                "web_url" => "required|string",
                                "tags" => "required|string",
                                "company_logo" => "required|string",
                                "job_description" => "required|string"
            ]);
            $job = Job::findOrFail($id);
            $job->update([
               "company_name" => $request->company_name,
                "job_title" => $request->job_title,
                "job_location" => $request->job_location,
                "contact_email"=> $request->contact_email,
                "web_url" => $request->web_url,
                "tags" => $request->tags,
                "company_logo" => $request-> company_logo,
                "job_description" => $request-> job_description
            ]);
        return response()->json([
                'job' => $member,
                'message' => 'Update was successful',
        ]);
        
    }

    public function delete($id){
        $job = Job::findOrFail($id);
        $job->delete();
        return response()->json([
          'message' => 'Job deleted'
        ]);
    
    }

}
?>