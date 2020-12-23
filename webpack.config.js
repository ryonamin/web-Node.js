const c = {};                               
c.output = {};                              
c.module = {};                              
c.module.rules = [];                        
c.module.rules[0] = {};                     
c.module.rules[0].use = {};                 
c.module.rules[0].use.options = {};         
c.module.rules[0].use.options.presets = []; 
c.module.rules[0].use.options.plugins = []; 

//c.mode  = 'production';                    
c.mode  = 'development';                     
c.devtool = 'inline-source-map';             

c.entry = __dirname + '/frontend/src/index.js';     
c.output.path = __dirname+'/frontend/dist';
c.output.filename = 'main.js';
c.module.rules[0].test = /\.js[x]?$/;
c.module.rules[0].exclude = /node_modules/;
c.module.rules[0].use.loader = 'babel-loader';
c.module.rules[0].use.options.presets[0] = '@babel/preset-env';       
c.module.rules[0].use.options.presets[1] = '@babel/preset-react';
c.module.rules[0].use.options.plugins[0] = '@babel/plugin-syntax-jsx';

module.exports = c;
