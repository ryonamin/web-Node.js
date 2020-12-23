import express from 'express';
import {getUsers, postUser} from './users.mjs';

const app = express();

app.set('port', process.env.PORT || 5000);
console.log(import.meta);

app.use(express.json());

// API
app.use((req,res,next) => { // cross-origin resource sharing
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.post('/post_user', postUser, getUsers);
app.get('/get_users', getUsers);

app.listen(app.get('port'), 
  () => {
    console.log('server listening on port :' + app.get('port'));
  }
)
