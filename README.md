## Step 1:

- mkdir react-webpack && cd react-webpack

## Step 2:

- npm i -y
- npm install --save-dev @types/react-dom @types/react awesome-typescript-loader html-webpack-plugin source-map-loader typescript webpack webpack-cli webpack-dev-server

- npm install react react-dom

## Step 3:

- mkdir src
- cd src
- touch index.html webpack.config.js tsconfig.json App.tsx index.tsx

## Step 4:

**Copy and paste the code shown below into the webpack.config.js file**

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.tsx",
  target: "web",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
};
```

## Step 5:

**Copy and paste the code shown below into the tsconfig.json file**

```js
{
  "compilerOptions": {
    "jsx": "react",
    "module": "commonjs",
    "noImplicitAny": true,
    "outDir": "./build/",
    "preserveConstEnums": true,
    "removeComments": true,
    "sourceMap": true,
    "target": "es6"
  },
  "include": ["src/index.tsx"]
}

```
