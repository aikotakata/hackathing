# Hack a Thing

## Dartmouth On-Campus Jobs Website

### Henry Foster and Aiko Takata

### Website Purpose

The Dartmouth On-Campus Jobs Website is a centralized place for people to view on-campus jobs. At many schools, including Dartmouth, finding an on-campus job can be confusing. Our website aims to make connecting people with on-campus jobs easier.

### Website Features

The website features a table that shows all of the currently available jobs on campus. Each row represents a job. The columns have information about the job. The columns are job title, description, pay, and date posted. The table allows the user to click on the top of the column to change how the list of jobs is sorted. The list can be sorted by job title (alphabetical), pay, and date posted in ascending or descending order. Ascending or descending is noted with an up or down arrow. 

For more information about the job, the user can click on the row with the job. A Modal will appear with a contact and email address for the job.

### Details

The jobs are all stored in a json file. We created the table in a .jsx file and referenced the information about the jobs from the json file. 

We changed the appearance of the website in a few ways. We changed the font and colors. In addition, we modified the table. The table is striped in color (alternating), highlights the row when hovered over, and has a dark inverted color heading. For the sort of the table, there are icons to indicate which column the table has been sorted by. 

We implemented the table and modal with bootstrap. 

### How to Test

Do yarn start to view the webpage. Click each of the columns to see how you can sort the list of jobs. Click on a row to see more information about the job.

