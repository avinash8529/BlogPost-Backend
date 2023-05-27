# Blog Post

blog post.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

```
Node@v12.x.x
PostgreSql@11.x
```

# Steps to start blog post

1. clone this repository in your local system

2. create a database in postgreSQL server in your local system

3. create a user for local databases and assign all privilages to the user 

4. establish connection of database in portgreSQL

# setting up environvent variables 

1. change DB_NAME to "db_name" you created in your local system 
2. change DB_USER_NAME to "db_user_name" you created in your local system 
3. also change password accordingly

# for starting your server

1. open terminal in blogpost 
2. do cd server
3. execute these commands in terminal--

 (a) export DB_NAME=db_name
 (b) export DB_USER_NAME=user_name
 (c) export DB_PASSWORD=password

4. npm run start 




# All Api Created in router folder

1- auth.js contains login sign-up and my middleware api

2- blogs.js contains update, get all blogs, delete blog, fetch single blog API's

# How To Use Api

NAME of API's are specified in router => Auth.js && blogs.js 

for blogs.js API's you have to provide BEARER TOKEN IN AUTHENTICATION POSTMAN which you GET at time of LOGIN

beyond that for UPDATE blog post and DELETE blog post you have to provide the PUBLIC_ID IN PARAMS for the same which you want to perform the operation 

# Postman Api collection provide

Blogpost-API.json 
1. import this file in your postman 


# BlogPost-backend
# BlogPost-backend
