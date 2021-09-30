# Web-Server
A web application built with Node & Express that prompts the user for latitude and longitude coordinates, uses that data to make an API call to weatherstack.com, then displays
the returned json data to the client

Requires
-a weatherstack api key stored in .env as 'API_KEY'

This project implements:
-Express
--Handlerbars for Express
--Modular express routers
-Axios

Functional endpoints
/         = prompts the user for lat+long then allows them to submit
/about    = Information about the site & its creator
/help     = Help resources
/weather  = endpoint that handlers calls to weatherstack api
/*        = 404 error handling for undefined pages

