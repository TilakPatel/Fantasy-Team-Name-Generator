const express = require('express')

// Import the axios library, to make HTTP requests
const axios = require('axios')

// This is the client ID and client secret that you obtained
// while registering the application
const clientID = 'dj0yJmk9VkZiY3FBaU1kZEJQJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTg1'
const clientSecret = '2419399a9e748457f722ae03b64238fd202620bc'

const app = express()

// Declare the redirect route
app.get('/oauth/redirect', (req, res) => {
  // The req.query object has the query params that
  // were sent to this route. We want the `code` param
  const requestToken = req.query.code
  axios({
    // make a POST request
    method: 'post',
    // to the Github authentication API, with the client ID, client secret
    // and request token
    url: `https://api.login.yahoo.com/oauth2/get_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    // Set the content type header, so that we get the response in JSOn
    headers: {
         accept: 'application/json'
    }
  }).then((response) => {
    // Once we get the response, extract the access token from
    // the response body
    const accessToken = response.data.access_token
    // redirect the user to the welcome page, along with the access token
    //res.redirect(`/welcome.html?access_token=${accessToken}`)
    console.log(accessToken);
  })
})

app.use(express.static(__dirname + '/public'))
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);