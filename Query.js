//1.Find all the topics and tasks which are thought in the month of October

db.topics.find({date:{$gt:ISODate("2020-10-01T00:00:00Z"),$lt:ISODate("2020-10-31T00:00:00Z")}}).pretty()

//2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.drives.find({date:{$gt:ISODate("2020-10-15T00:00:00Z"),$lt:ISODate("2020-10-31T00:00:00Z")}}).pretty()

//3.Find all the company drives and students who are appeared for the placement.

db.drives.find({},{_id:0,drive_id:1,drive_name:1,user_ids:1}).pretty()

//4.Find the number of problems solved by the user in codekata

db.codekata.find({},{_id:0,userId:1,problemsSolved:1}).pretty()

//5.Find all the mentors with who has the mentee's count more than 15

db.mentors.find({mentee_count:{$gt:15}},{_id:0,mentor_id:1,mentee_ids:1}).pretty()

//6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.attendance.aggregate([{$match:{status:"absent"}}]);
db.tasks.find({task_status:"No"}).pretty()

