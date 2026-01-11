<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    protected $table="job";
    protected $fillable = [ 'id', 'company_name', 'job_title', 'job_location', 'contact_email', 'web_url', 'tags', 'company_logo', 'job_description'];
}
