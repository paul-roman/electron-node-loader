## electron-node-loader

This Webpack modules allows you to load a native Node.js C++ addon that can be shipped inside an Electron application.

_Usage:_

```javascript
loaders: [
  {
    test: /\.node?$/,
    use: 'electron-node-loader'
  }
]
```

Just add `electron-node-loader&prod=true`for production build.
