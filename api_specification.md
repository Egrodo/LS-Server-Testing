<!-- ### API Design
* We want you to take a step back and actually come up with an API design specification for your application. 
* Create an `api_specification.md` file that you will use to create a your spec.
* You're not going to need to worry about designing any Schema until you get to the Extra credit so don't worry about that right away. 
* You will need to think about the type of data each client should have in the vet's office. Because this is a RESTful API you'll need to have at least one of each of these, POST, GET, PUT and DELETE endpoint. After that you can get as creative as you'd like. 

#### HINT - Your data could be thought of like this.
* i.e. Each client needs a `name`, some sort of `unique ID` (because Mongo isn't doing this for you until the extra credit, you'll have to think about how to implement this yourself), a `species`, some sort of `'visit' timestamp`, and an `owner` with a `name`, `address`, `phone` `number` and `optional email`. Ask yourself, what does all of this information need to look like.
  * [Tips and tricks for writing a Markdown File](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) -->

TABLE OF CONTENTS TO BE ADDED

# API Specification for Vet Database

Here are the different routes for the backend-app I (am going to have) created.

## POST /path/here

The post request is used to add a new pet to the database.

Parameters

| Name      | Type       | Description               |
|:----------|:-----------|:--------------------------|
| `name`    |  `string`  | `Pet's Name`              |
| `species` |  `string`  | `Pet's species`           |
| `owner`   |  `string`  | `Owner's name`            | 
| `address` |  `string`  | `Owner's Address`         |
| `phone`   |  `string`  | `Owner's phone number`    |
| `email`   |  `string`  | `OPTIONAL Owner's email`  |
| `visit`   |  `string`  | `In format "YYYY-mm-dd"`  |

Response

```
{
    "name": "Tabitha the Bear",
    "species": "Some sorta pupper",
    "owner": "Bearso owns herself",
    "address": "123 squaberly lane",
    "phone": "999-999-9999",
    "email": "donttalktome@ormykids.everagain",
    "visit": "1970-01-01"
}
```


## GET /path/here

This get request does x.

Response

```
The get request response
goes here
```


## PUT /path/here

This put request does x.

Response

```
The get request response
goes here
```

## DELETE /path/:todel

This delete request does x.

Response

```
The get request response
goes here
```
