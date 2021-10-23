# cra-webpack-rewired
A plugin to override create-react-app webpack configuration with minimal changes. This plugin internally uses the `react-script` only to `start` and `build` the application.

### 1. Installation
```shell
npm install --save-dev cra-webpack-rewired
```

### 2. Update the package.json, replace `react-scripts` command with `cra-webpack-rewired` command
```diff
 "scripts": {
-    "start": "react-scripts start",
+    "start": "cra-webpack-rewired start",
-    "build": "react-scripts build",
+    "build": "cra-webpack-rewired build",
  }
```

### 3. Add webpack extend file at path config/webpack.extend.js
```javascript
module.exports = {
  dev: (config) => {
    //override webpack configuration
    config.externals =[..];
    return config;
  },
  prod: (config) => {
    //override webpack configuration
    config.externals =[..];
    return config;
  }
};
```

### Thats it !
