# Basic Express Server: GET all, GET one

## Objectives

* Build a basic express server from scratch
* Write a GET all route
* Write a GET one route
  * Use route parameters

## Resources

* [Express Docs - Hello World](https://expressjs.com/en/starter/hello-world.html)
* [Express Docs - Basic Routing](https://expressjs.com/en/starter/basic-routing.html)
* [Express Docs - Routing](https://expressjs.com/en/guide/routing.html)


# Basic Express Server: Error Handling, POST 

## Objectives

* Review GET routes
* Add error handlers to an express server
* Write a POST route
  * Add bodyParser middleware

## Resources

* [Dan Levy - Express Guides](https://github.com/justsml/guides/blob/master/express/setup-guide/app.js)
* [Learn - Express Middleware](https://learn-2.galvanize.com/cohorts/757/blocks/29/content_files/Server%20Development/06-libraries.md)
* [Learn - Error Handling](https://learn-2.galvanize.com/cohorts/757/blocks/29/content_files/Server%20Development/07-errors.md)

## Notes

* What is Express Router?
  - Handles middleware
  - Referred to as a "mini-app"
    * Self-contained
    * Can be used in other parts of app
  - Handles routing functions
  - Recreate same functionality of having every route in app.js but with the benefits of modularization
  - Just an object
  - How do we use the Router?
    * As middleware

* Modularize server routes
  - Separate routes into their own folder
    1. Create routes folder and route file
    2. Require express library
    3. Capture the express.Router() in a variable
    4. Export the router with module.exports
  - Routers must be app.use() at the correct place in the app's pipeline
    * After middleware
    * Before error handlers


# Basic Express Server: Knex Migrations & Seeds

## Objectives

* Add knex to a project
* Setup connection to a local database
* Create and run migration files
* Create and run seed files

## Resources

* [Knex.js Docs](https://knexjs.org/)
* [Knex.js Docs - Schema Builder](https://knexjs.org/#Schema)

# Basic Express Server: Knex CRUD

## Objectives

* Implement CRUD functionality using Knex!
  - Create (POST)
  - Read (GET all, GET one)
  - Update (PUT)
  - Delete (DELETE)

## Resources

* [Knex.js Docs](https://knexjs.org/)
* [Knex Cheat Sheet](https://devhints.io/knex)
