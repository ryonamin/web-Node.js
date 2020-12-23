import {pgQuery} from './pghelper.mjs';

let getUsers = (req, res) => {
  console.log('getUsers called');
  pgQuery(
    'SELECT * FROM users',
    [],
    (err, data) => {
      if (err) {
        console.log(err);
        return res.status(400).send('エラーが発生しました');
      }
      return res.send(JSON.stringify(data));
    }
  );
}

let postUser = (req, res, next) => {
  var user = req.body;
  pgQuery(
    'INSERT INTO users (name, mail) VALUES ($1, $2) ',
    [user.name, user.mail],
    (err) => {
      if (err) {
        console.log(err);
        return res.status(400).send('エラーが発生しました');
      }
      return next();
    }
  );
}

export {getUsers, postUser};
