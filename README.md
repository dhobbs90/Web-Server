# Web-Server
A web application built with Node & Express that prompts the user for latitude and longitude coordinates, uses that data to make an API call to weatherstack.com, then displays
the returned json data to the client

**Requires:**<br>
  - a weatherstack api key stored in .env as 'API_KEY'

**This project implements:**
- Express<br>
  - Handlerbars for Express<br>
  - Modular express routers<br>
- Axios<br>

**Functional endpoints:**
 - /         = prompts the user for lat+long then allows them to submit<br>
 - /about    = Information about the site & its creator<br>
 - /help     = Help resources<br>
 - /weather  = endpoint that handlers calls to weatherstack api<br>
 - /*        = 404 error handling for undefined pages<br>

