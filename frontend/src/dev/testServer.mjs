import express from 'express';
import cfg from 'config'; // see config/default.json
const app = express();
app.set('port', process.env.PORT || cfg.testServer.port);

let path = import.meta.url;
path = path.replace('file://','');
path = path.replace('scripts/dev/testServer.mjs','');
console.log('path = ' + path);
app.use('/', express.static(path));

app.listen(app.get('port'),()=>{
  console.log('testServer listening on port :' + app.get('port'))
});
