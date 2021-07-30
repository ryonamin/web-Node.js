# web-Node.js

## Setup
1. Install node, npm
2. git clone git@github.com:ryonamin/web-Node.js.git 
3. cd web-Node.js
4. npm install (All packages listed in package.json will be installed.)
5. Edit config/default.json according to your environment.
6. npm start (Run script defined in package.json)

## Notes
- testServer can be used for local tests. You will find frontend/index.html by accessing http://127.0.0.1:3000 with your web browsers.
- webpack behaviours are defined in webpack.config.js
- The following command would be useful to find problems in your JavaScripts.
eslint behaviours are defined in .eslintrc.js.
```
npx eslint YOUR_JAVASCRIPT_FILE
``` 
- Database must be activated in advance if your app uses database.
```
pg_ctl start -D /usr/local/var/postgres  // Activate PostgreSQL (Mac)
pg_ctl stop -D /usr/local/var/postgres   // Deactivate PostgreSQL (Mac)
```

