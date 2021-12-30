

# Backend for Android Project

Tech

## Tech Stack

**Client:** Bebas terserah front end

**Server:** Node, Express

**Database:** MySQL



## Installation

Install backend-api with npm

```bash
  npm i
  cd backend-api
```
    
## Run Locally

Clone the project

```bash
  git clone https://github.com/dhaffaabdillah/backend-api
```

Go to the project directory

```bash
  cd backend-api
```

Install dependencies

```bash
  npm install
  // or
  npm i
```

Start the server

```bash
  npm run start
  nodemon --watch src
  npm run dev
```


## API Usage

#### Register first

```http
  POST http:localhost:{port}/api/v1/users
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your username, min lengths: **3** |
| `first_name` | `string` | **Required**. Your first_name, min lengths: **3** |
| `last_name` | `string` | **Required**. Your last_name, min lengths: **3** |
| `email` | `email` | **Required**. |
| `role` | `string` | **Optional**. Value: `Admin`, `SuperAdmin`, `User`|
| `password` | `string` | **Required**. Min lengths: **6**, Max lengths: **10**|
| `confirm_password` | `string` | **Required**. Min lengths: **6**, Max lengths: **10**|
| `age` | `numeric` | **Optional**.|

##### **CONTOH register di postman**
```json
{
    "username": "dhaffaabdillah",
    "first_name": "Dhaffa",
    "last_name": "Abdillah",
    "email": "superadmin@gmail.com",
    "role": "SuperUser",
    "password": "sotobabat",
    "confirm_password": "sotobabat",
    "age": 17
}
```

#### Abis itu **Login**

```http
  POST /api/v1/users/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `email` | **Required**.|
| `password` | `string` | **Required**.|

### Contoh Login pada postman
```json
{
    "email": "superadmin@gmail.com",
    "password" : "sotobabat"
}
```

##### **Response Login**
```json 
{
    "id": 1,
    "username": "dhaffaabdillah",
    "first_name": "Dhaffa",
    "last_name": "Abdillah",
    "email": "superadmin@gmail.com",
    "role": "SuperUser",
    "age": 17,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMSIsImlhdCI6MTY0MDg0Mjk5NiwiZXhwIjoxNjQwOTI5Mzk2fQ.F2HT6fAooU-NG1qeoE6A-XcyDrp1T6W-Stz0wnKBMD4"
}
```

##### **Ambil Tokennya**
```json 
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMSIsImlhdCI6MTY0MDg0Mjk5NiwiZXhwIjoxNjQwOTI5Mzk2fQ.F2HT6fAooU-NG1qeoE6A-XcyDrp1T6W-Stz0wnKBMD4"  
```
#### Get Users

```http
  GET /api/v1/users
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `bearer_token`      | `string` | **Required** for login. |

#### **Klik authorization, lalu pilih bearer token dan isikan dengan token seperti di atas**

#### Find User by username
```http
  GET /api/v1/users/username/:username
```

#### Find User by id
```http
  GET /api/v1/users/id/:id
```
#### Update User
```http
  PATCH /api/v1/users/id/:id
```
#### Delete User
```http
  DELETE /api/v1/users/id/:id
```

#### Get Current User Session
```http
  GET /api/v1/users/whoami
```

## IMPLEMENT  IN FRONT END
- [Reference fetch API using VueJS and Axios](https://www.wahyunanangwidodo.com/2021/06/autentikasi-laravel-vuejs-multiple-roles-user-admin-manager.html)
![Logo](https://smkn1depok.sch.id/assets/images/logo.png)

## Authors

- [Dhaffa Abdillah Hakim](https://www.github.com/dhaffaabdillah)
- [Ekky Mulia Lasardi](https://www.github.com/)
- [Pancaran Ratna Mustika](https://www.github.com/)
- [Jasmine Ramadhifa](https://www.github.com/)
- [Ilham Prayogo Sampurno](https://www.github.com/)
