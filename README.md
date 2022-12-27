# online-exam-ejs-adminjs-mongo-multer

# 🚀 Online Examination System with ejs AdminJS Mongoose and Multer 🚀

https://github.com/coding-to-music/online-exam-ejs-adminjs-mongo-multer

https://online-exam-ejs-adminjs-mongo-multer.vercel.app

From / By https://github.com/tmhuyy/online-examination-system

## Environment variables:

```java
MONGO_URI="mongodb+srv://<username>:<password>@cluster0.0skitfz.mongodb.net/online-exam-ejs-adminjs-mongo-multer?retryWrites=true&w=majority"
SESSION_SECRET="asdljasdfjasdlfjaojaeajdsfla"
PORT=3000
```

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/online-exam-ejs-adminjs-mongo-multer.git
git push -u origin main
```

# Online Examination System

## Installation

-   Install Node.js.
-   Clone repository.
-   Run <code>npm install</code> to install

## Documentation

-   Login to admin page:
    -   email: admin123@gmail.com
    -   password: admin123
-   CRUD students, records, exams, courses.

## Endpoints

> Students end point :
>
> -   <code>GET</code> **/examSchedule** - LIST all examination schedule.
> -   <code>GET</code> **/score** - LIST all scores related to students' exam.
> -   <code>GET</code> **/login** - RENDER login page.
> -   <code>POST</code> **/login** - Login the student dashboard
> -   <code>POST</code> **/logout** - Logout the student dashboard.

> Admin end point:
>
> -   <code>GET</code> **/admin/login** - RENDER a login page for admin
> -   <code>GET</code> **/courses/:id** - GET a course by ID

## Screenshots

### Admin Page

| <img src="public/img/screenshot/admin/adminLogin.png" alt="Admin login" width="400"/> |
| :-----------------------------------------------------------------------------------: |
|                                    **Admin login**                                    |

| <img src="public/img/screenshot/admin/showAllCollections.png" alt="Show all colections with CRUD operation" width="400"/> |
| :-----------------------------------------------------------------------------------------------------------------------: |
|                                        **Show all colections with CRUD operation**                                        |

| <img src="public/img/screenshot/admin/editForm.png" alt="Edit form page" width="400"/> |
| :------------------------------------------------------------------------------------: |
|                                   **Edit form page**                                   |

| <img src="public/img/screenshot/admin/insertForm.png" alt="Insert form page" width="400"/> |
| :----------------------------------------------------------------------------------------: |
|                                    **Insert form page**                                    |

### Student Page

| <img src="public/img/screenshot/student/studentLogin.png" alt="Student login" width="400"/> |
| :-----------------------------------------------------------------------------------------: |
|                                      **Student login**                                      |

| <img src="public/img/screenshot/student/studentHomePage.png" alt="Student home page" width="400"/> |
| :------------------------------------------------------------------------------------------------: |
|                                       **Student home page**                                        |

| <img src="public/img/screenshot/student/scoreSheet.png" alt="Score sheet" width="400"/> |
| :-------------------------------------------------------------------------------------: |
|                                     **Score sheet**                                     |

| <img src="public/img/screenshot/student/examSchedule.png" alt="Exam schedule" width="400"/> |
| :-----------------------------------------------------------------------------------------: |
|                                      **Exam schedule**                                      |

## Tech stacks

### Front-end

-   Bootstrap

### Back-end

-   Node.js (Express)
-   MongoDB (Mongoose)

## Contributing

Huynh Van Vinh - ITITIU19248
<br>
Nguyen Tran Hoang Nam - ITITWE18013
<br>
Nguyen Vu Nhat Quang - ITITIU20149
<br>
Nghe Thi Thanh Tam - ITITIU20302
<br>
Tran Minh Huy - ITITIU20219 - **Leader**
