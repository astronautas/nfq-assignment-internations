# NFQ Front-end assignment
NFQ Front-end assignment for Internations team.

To open the application, go to /dist directory and open index.html with a browser.

### Features
* Show all users
* Show all groups
* Add users
* Add groups
* Edit users (change name, add to group(s), remove from group(s), delete)
* Edit groups (change name, delete (if it has no users))

The app saves data localy in Local Storage (thus works offline). It is memory optimized too.

### Backend APIs ideas:
The application is purely front-end at the moment. For a fully featured user management system, back-end should provides APIS such as:
* GET user (id, with cookie), group (id), users, groups
* POST user (new user), group (new group), new session (login)
* PATCH user (update user), group (update group)
* DELETE user, group, session

### Technologies:
* HTML5
* CSS3
* Javascript

### Javascript libraries:
* Backbone.js
* Backbone localStorage adapter (https://github.com/jeromegn/Backbone.localStorage)
* Backbone Judge (validator plugin) (https://github.com/astronautas/backbone-judge.js)
* Underscore.js
* Underscore.js text templates for requireJS (https://github.com/requirejs/text)
* jQuery

### Task managers:
* Gulp (with CSS autoprefixer, babel and sass compiler)
