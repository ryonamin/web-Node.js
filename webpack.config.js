const c = {};                               
c.output = {};                              
c.module = {};                              
c.module.rules = [];                        
c.module.rules[0] = {};                     
c.module.rules[0].use = [];                 
c.module.rules[0].use[0] = {};         
c.module.rules[0].use[0].options = {};         
c.module.rules[0].use[0].options.presets = []; 
c.module.rules[0].use[0].options.plugins = []; 
c.module.rules[1] = {};                     
c.module.rules[1].use = [];                 
c.module.rules[1].use[0] = {};                 
c.module.rules[1].use[1] = {};                 
c.module.rules[1].use[1].options = {};                 
c.module.rules[1].use[2] = {};                 

//c.mode  = 'production';                    
c.mode  = 'development';                     
c.devtool = 'inline-source-map';             

c.entry = __dirname + '/frontend/src/index.js';     
c.output.path = __dirname+'/frontend/dist';
c.output.filename = 'main.js';
c.module.rules[0].test = /\.js[x]?$/;
c.module.rules[0].exclude = /node_modules/;
c.module.rules[0].use[0].loader = 'babel-loader';
c.module.rules[0].use[0].options.presets[0] = '@babel/preset-env';       
c.module.rules[0].use[0].options.presets[1] = '@babel/preset-react';
c.module.rules[0].use[0].options.plugins[0] = '@babel/plugin-syntax-jsx';
c.module.rules[1].test = /\.(sa|sc|c)ss$/;
c.module.rules[1].exclude = /node_modules/;
c.module.rules[1].use[0].loader = 'style-loader';
c.module.rules[1].use[1].loader = 'css-loader';
c.module.rules[1].use[1].options.modules = true;
c.module.rules[1].use[2].loader = 'sass-loader';

module.exports = c;
