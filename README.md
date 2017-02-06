# my-react-app
Code from react tutorial by Robin Orheden on Scoth.io

https://scotch.io/tutorials/build-a-react-app-with-user-authentication

## Instructions

Create a `stormpath.yml` file with the following info:

```
client:
  apiKey:
    id: YOUR_API_KEY_ID
    secret: YOUR_API_KEY_SECRET
application:
  href: https://api.stormpath.com/v1/applications/XXXX <-- YOUR APP HREF
```

Then just run the app

`node server.js`