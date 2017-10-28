# Views

1. Index: Plain clean background with just a login interface
2. Main: List of Adventures (later we can add categories/folders but for now just have a pure list of Adventures)
3. Graph: Adventure displayed as a graph. Tools on the left to create objects, window on the right to view and inspect objects already created. Click to drag, right click to create a directed edge. 

# Backend:

1. Database Input/Output
2. Graph Updater - Create/Update DAG representations
3. Object CRUD
4. Handle Ajax requests from the frontend at the various endpoints (/create/user/, /update/object, etc.)

# Frontend:

Literally everything can be boiled down into 3 steps.
Timeline of a transaction:
1. CRUD Ajax to backend
2. Deal with the response from the CRUD
3. Update the view

Now do that in as many flavors as needed (Login, pick an adventure, create an object, view an object in the inspector, etc.)




# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
