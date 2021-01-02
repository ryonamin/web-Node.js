import express from 'express';
import passport from 'passport';
import cfg from '../conf.json'; 
import {getUsers, postUser} from './users.mjs';

const app = express();

app.set('port', process.env.PORT || cfg.backend.port);
console.log(import.meta);

app.use(express.json());

// API
app.use((req,res,next) => { // cross-origin resource sharing
  res.header("Access-Control-Allow-Origin", "http://"+cfg.testServer.host+":"+cfg.testServer.port);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.post('/post_user', postUser, getUsers); // 2nd, 3rd arguments are callbacks.
app.get('/get_users', getUsers);

app.listen(app.get('port'), 
  () => {
    console.log('server listening on port :' + app.get('port'));
  }
)
