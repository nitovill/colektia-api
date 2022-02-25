# Server Base - Proyecto ONG

## Envinroment setup

1. Create database
2. Replace with your credentials .env.example
3. To install dependencies, run

```bash
npm install
```

4.

## Start local server

```bash
npm start

```

Colektia

create Employee
POST
/api/employee
EXAMPLE BODY
{
"username": "nito3",
"email": "nitovillafuerte@outlook3.com",
"password": "guniguni"
}
EXAMPLE RESPONSE
{
"data": {
"disabled": false,
"id": "85541ba7-50d9-41ac-bf80-678cc32ae1b1",
"username": "nito3",
"email": "nitovillafuerte@outlook3.com",
"password": "$2b$10$liBoBlis2ThiZzvby3KxCObRrBTL/EkpV.U54/MmmiNkdB6DGEG..",
"updatedAt": "2022-02-25T14:13:58.797Z",
"createdAt": "2022-02-25T14:13:58.797Z"
}
}

Read Employee
GET

/api/employee/:id
EXAMPLE PARAMS id: 85541ba7-50d9-41ac-bf80-678cc32ae1b1

EXAMPLE RESPONSE
{
"data": {
"disabled": false,
"id": "85541ba7-50d9-41ac-bf80-678cc32ae1b1",
"username": "nito3",
"email": "nitovillafuerte@outlook3.com",
"password": "$2b$10$liBoBlis2ThiZzvby3KxCObRrBTL/EkpV.U54/MmmiNkdB6DGEG..",
"updatedAt": "2022-02-25T14:13:58.797Z",
"createdAt": "2022-02-25T14:13:58.797Z"
}
}

PUT
update
/api/employee/:id
EXAMPLE PARAMS id: 85541ba7-50d9-41ac-bf80-678cc32ae1b1
BODY EXAMPLE
{
"username": "nitoedit",
"email": "nitovillafuerte@outlook.com",
"password": "guniguni"
}
RESPONSE EXAMPLE JSON
{
"data": "Successful update"
}

DEL
/api/employee/:id
EXAMPLE PARAMS id: 85541ba7-50d9-41ac-bf80-678cc32ae1b1

RESPONSE EXAMPLE JSON
{
"data": "Successfully removed"
}

GET getAll
/api/employee

RESPONSE EXAMPLE JSON
{
"data": [
{
"id": "85541ba7-50d9-41ac-bf80-678cc32ae1b1",
"username": "nitoedit",
"email": "nitovillafueEWQrte@outlook.com",
"documentnumber": null,
"image": null,
"firstname": null,
"lastname": null,
"password": "$2b$10$eSnZuCdmw/3XMCLTYcy0l.5oo86VIYc6o0bUMqpuZDE1ATJYshsQq",
"disabled": false,
"createdAt": "2022-02-25T14:13:58.000Z",
"updatedAt": "2022-02-25T14:19:18.000Z"
},
{
"id": "ba61e973-911a-4b21-8246-16fa52c7b72f",
"username": "nitoedit",
"email": "nitovillafuerte@outlook.com",
"documentnumber": null,
"image": null,
"firstname": null,
"lastname": null,
"password": "$2b$10$XsELoepiuEUrwfFrOeVK2uL4APEEqBsmxgKkE8t/Tz3OeXuFpaOGi",
"disabled": false,
"createdAt": "2022-02-25T14:03:30.000Z",
"updatedAt": "2022-02-25T14:05:38.000Z"
}
]
}
