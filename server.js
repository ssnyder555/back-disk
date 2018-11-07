const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const cors           = require('cors');



require('./db/db');


// SET UP CORS AS MIDDLEWARE, SO any client can make a request to our server
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, // This allows the session cookie to be sent back and forth
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));



const gameController = require('./controllers/gameController');

app.use('/api/v1/disk', gameController);


app.listen(process.env.PORT || 9000, () => {
  console.log('listening on port 9000');
});
