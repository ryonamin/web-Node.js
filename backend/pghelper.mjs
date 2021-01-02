import pg from 'pg';
import cfg from '../conf.json'; 

var pgQuery = (sql, values, callback) => {
  console.log(sql, values);
  var pool = new pg.Pool(cfg.PostgreSQL.config);
  pool.connect(
    (err, client, releaseCallback) => { // client : pg.Client
      if (err) {
        return callback(err);
      }
      try {
          client.query(sql, values, (err, res) => {
            releaseCallback(); // releaseCallback() must be called when all jobs have been done with a client
            if (err) {
              callback(err);
            } else {
              callback(null, res.rows);
            }
         });
      } catch(e) {
        releaseCallback();
        callback(e);
      }
    }
  );
  pool.end();
}

export {pgQuery};
