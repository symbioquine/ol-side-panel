'use strict';

module.exports = {
  "source": {
    "include": ["./src"],
    "includePattern": "\\.(js)$"
  },
  "plugins": [
    "jsdoc-plugins/observableProperty.js"
  ],
  "opts": {
    "encoding": "utf8",
    "destination": "./docs/",
    "recurse": true,
    "verbose": true,
    "readme": "./README.md",
    "template": "./node_modules/docdash",
    "theme_opts": {
      "theme": "light",
      "menu": [
        {
            "title": "Github",
            "id": "github",
            "link": "https://github.com/symbioquine/ol-side-panel"
        },
        {
            "title": "npm",
            "id": "npm",
            "link": "https://www.npmjs.com/package/ol-side-panel"
        }
      ],
    }
  },
  "docdash": {
    "static": true,
    "openGraph": {
      "title": "Docdash",
      "type": "website",
      "image": "https://cloud.githubusercontent.com/assets/447956/13398144/4dde7f36-defd-11e5-8909-1a9013302cb9.png",
      "site_name": "Docdash",
      "url": "http://clenemt.github.io/docdash/"
    },
    "meta": {
      "title": "ol-side-panel",
      "description": "A clean, responsive documentation template theme for JSDoc 3.",
      "keyword": "jsdoc, docdash"
    },
    "search": true,
    "collapse": true,
    "typedefs": true,
    "removeQuotes": "none",
    "scripts": [],
    "menu":{
      "Github repo":{
        "href":"https://github.com/symbioquine/ol-side-panel",
        "class":"menu-item",
        "id":"repository"
      }
    }
  }
};
