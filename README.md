# Creating a React skeleton

create readme.md
create main project directory
create directory structure

public
src/components
public/js
public/css

## Setting up tools
Ensure node and npm installed
create package.json file - npm init
### install packages
```
npm install --save react react-dom watchify babelify babel-preset-react browserify
```
Update package.json start to launch watchify and enable build -->
```
...
"scripts": {
  "start": "watchify src/main.jsx -v -t [ babelify --presets [ react ] ] -o public/js/main.js",
...
}
```
## Required scripts to download
- jquery.min.js
- bootstrap.min.js
Download scripts to src/js
## Required css to download
- boostrap.min.css
- bootstrap-theme.min.css
Download css to src/css
## Create public/index.html
- add html structure
- add head and body structure
- add scripts for jquery.min.js, bootstrap.min.js, main.js
- add id="componentID" to place where the component should be in the index.html

Update main.jsx to test functionality

Use the following to launch the main componentID
```
ReactDOM.render(<TestComponent title="Test" />, document.getElementById('test1'));
```
## Import packages in components
```
var React = require('react');
var ReactDOM = require('react-dom');
```
