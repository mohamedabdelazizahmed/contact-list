
## Contact-list-task

conatct-list task  API 

-  Get All User . 
-   ADD User  .
-  getRecentList .

## install 

 Run  command  "npm install" to run express , body-parser , 

## GET ALL User  

GET http://localhost:3000/users?authorization=123&fingerPrint=123&deviceToken=123&page=1&limit=3 


## ADD NEW User

POST  http://localhost:3000/add-user
Content-Type: application/json

{
    "firstName": "UserFFF",
    "lastName": "UserFFF LastName",
    "mobile": "01282434860",
    "authorization": "123",
    "fingerPrint":"123",
    "deviceToken":"123"
}


## getRecentList 

POST  http://localhost:3000/getRecentList
Content-Type: application/json

{
    "authorization": "123",
    "fingerPrint":"123",
    "deviceToken":"123"
}







