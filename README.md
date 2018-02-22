# BlockChain+

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```
nodeJS
npm OR yarn
```

### Installing

Clone the repository

```
git clone https://{yourUsername}@bitbucket.org/mistletoe91/blockchainplus.git
```

Change directory

```
cd blockchainplus
```

Install dependencies

```
yarn install
```

Run (browser will automatically open and page will load)

```
yarn start
```

## Production

### Build & Deploy Instructions (Needs to be automated)

Create an optimized production build

```
yarn build
```

Copy the contents of the newly created `build` folder

Connect to the web server, navigate to `/var/www/html/blockchainplus.co` and paste the contents of your clipboard

Open index.php and edit these lines to match the new js / css bundles located in `static`:

```
<script type="text/javascript" src="/blockchain-plus-website/static/js/main.{versionGUID}.js"></script>
<link href="/blockchain-plus-website/static/css/main.{versionGUID}.css" rel="stylesheet">
```

## Built With

* [React](https://facebook.github.io/react/) - A declarative, efficient, and flexible JavaScript library for building user interfaces
* [Webpack](https://webpack.github.io/) - Module bundler
