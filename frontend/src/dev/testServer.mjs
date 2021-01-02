import express from 'express';
import cfg from '../../../conf.json';
const app = express();
app.set('port', process.env.PORT || cfg.testServer.port);

let path = import.meta.url;
path = path.replace('file://','');
path = path.replace('src/dev/testServer.mjs','');
console.log('path = ' + path + ' --> This must point to the directory containing index.html');
app.use('/', express.static(path));

app.listen(app.get('port'),()=>{
  console.log('testServer listening on port :' + app.get('port'))
});
