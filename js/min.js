//---------------------  FILTER JS ----------------------------

// document.getElementById("filter-form").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the form from submitting normally

//     // Collect filter values
//     const jobType = document.getElementById("job-type").value;
//     const experienceLevel = document.getElementById("experience-level").value;
//     const location = document.getElementById("location").value;
//     const salaryMin = document.getElementById("salary-min").value;
//     const salaryMax = document.getElementById("salary-max").value;

//     // Prepare filter parameters
//     const filters = {
//         job_type: jobType,
//         experience_level: experienceLevel,
//         location: location,
//         salary_min: salaryMin,
//         salary_max: salaryMax
//     };

//     // Fetch filtered jobs (this function would send filters to your server)
//     fetchJobs(filters);
// });

// function fetchJobs(filters) {
//     // Send filters to the backend via AJAX (using fetch API as an example)
//     fetch("/api/jobs", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(filters)
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Update the job listings with filtered results
//         displayJobs(data);
//     })
//     .catch(error => console.error("Error fetching jobs:", error));
// }

// function displayJobs(jobs) {
//     // Render jobs dynamically in the job listing section
//     const jobList = document.getElementById("job-list");
//     jobList.innerHTML = ''; // Clear current listings
//     jobs.forEach(job => {
//         const jobElement = document.createElement("div");
//         jobElement.className = "job-card";
//         jobElement.innerHTML = `<h3>${job.title}</h3><p>${job.location}</p><p>${job.salary}</p>`;
//         jobList.appendChild(jobElement);
//     });
// }
