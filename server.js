//Install express server
const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();

const clientID = '<your client id>'
const clientSecret = '<your client secret>'

// Serve only the static files form the dist directory
app.use(express.static('./dist/FantasyTeamNameGenerator'));

app.get('/', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/FantasyTeamNameGenerator/index.html'));
});

// Declare the redirect route
app.get('/oauth/redirect', (req, res) => {
    // // The req.query object has the query params that
    // // were sent to this route. We want the `code` param
    // const requestToken = req.query.code
    // axios({
    //   // make a POST request
    //   method: 'post',
    //   // to the Github authentication API, with the client ID, client secret
    //   // and request token
    //   url: `https://api.login.yahoo.com/oauth2/get_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}&grant_type=authorization_code&redirect_uri=http://fantasynamegenerator.herokuapp.com/oauth/redirect`,
    //   // Set the content type header, so that we get the response in JSOn
    //   headers: {
    //        accept: 'application/json'
    //   }
    // }).then((response) => {
    //   // Once we get the response, extract the access token from
    //   // the response body
    //   const accessToken = response.data.access_token
    //   // redirect the user to the welcome page, along with the access token
    //   res.redirect(`/nicknames/${accessToken}`)
    // })
    res.send('Hello World!')
  })

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);