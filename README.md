![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# nc-img :framed_picture:
A custom element for non-copyable HTML images.

`nc-img = non-copyable + img` :sparkles:


## :scroll: About
Have you ever tried to create non-copyable images for your website? Or, at least, discourage users from copying your website's images?

If so, you've found the right package! :tada:

`nc-img` is a web component that wrapps your image in some custom HTML with some nasty CSS rules, so users can't right-click your image to copy it, or drag'em into their desktop.

> If the users wants to copy your image, they'll have to sweat - sneaking into the browser console to inspect your markup, or to search within the transferred resources.

> This web component also prevents the Pinterest extension on [Chrome](https://chrome.google.com/webstore/detail/pinterest-save-button/gpdjojdkbbmdfjfahjcgigfpmkopogic?hl=pt) and [Firefox](https://addons.mozilla.org/pt-BR/firefox/addon/pinterest/) from saving your photos - the user can still search them by selecting the screen area. To prevent Pinterest plugin in your pages, you can use this metatag as well:

```html
<meta name="pinterest" content="nopin" />
```


## :gem: Stack
This project is built with [Stencil](https://stenciljs.com/), a toolchain for building web components and design systems using the [Web Components API](https://developer.mozilla.org/en-US/docs/Web/Web_Components). The actual project was created using the `component` starter, offered by `stencil-cli`.

Stencil play as a compiler for the web components; and those components uses Angular under the hood - we can also create them in a functional style too. Stencil offers a great tooling, and the components were generated using stencil generate helper.

The styles are component-scoped, and the stylesheets are written in plain CSS.

As the package manager, it uses [npm](https://www.npmjs.com/get-npm); [prettier](https://www.npmjs.com/package/prettier), [husky](https://www.npmjs.com/package/husky) and [lint-staged](https://www.npmjs.com/package/lint-staged) are used to ensure code's patterns.

The project also uses [semantic-release](https://www.npmjs.com/package/semantic-release) with [commitizen](https://www.npmjs.com/package/commitizen) to ensure a correct package versioning.

For testing, it uses [jest](https://jestjs.io/) with Stencil's abstractions.


## :closed_book: How to use
You can use this package with [unpkg](https://unpkg.com/) CDN, putting the script tag into your `.html` file:

```html
<script type="module" src="https://unpkg.com/nc-img/dist/nc-img/nc-img.esm.js"></script>
<script nomodule src="https://unpkg.com/nc-img/dist/nc-img/nc-img.js"></script>
```
So, you can use the following markup wherever you need a non-copyable image:
```html
<!-- default state, with full size (width/height) -->
<nc-img src="<img_source>" alt="<img_alt>" />

<!--
  if your images will have explicit size (width/height)
  through CSS rules, you must use the `has-size="true"` attribute
  so the web component knows what to do to not distort your image
 -->
<nc-img src="<img_source>" alt="<img_alt>" has-size="true" />
```

It can be used with plain HTML and/or with any JS framework/lib you're using right now :confetti_ball:

## :computer: Developing
> This project uses [Stencil](https://stenciljs.com/). If you're not familiar with it, take a look on [their docs](https://stenciljs.com/docs/getting-started) before starting.

### :school_satchel: Requirements
In order to have the correct development experience, you need to install the following:

- [node.js](https://nodejs.org/) (version 12 or above)
- [npm](https://www.npmjs.com/get-npm) (npm is shipped with node; if you don't have it, try the link above)

### :microscope: Writing code
After setting up your local environment and forking the repo, use the following commands to start developing:

```bash
# install dependencies
npm install

# start development server at localhost:3333
npm start

# run the test suite
npm run test

# create a local build
npm run build

# commit changes using git-cz + commitizen
npm run commit
```

> I'm using [npm](https://www.npmjs.com/) as the package manager, but you can also use [yarn](https://yarnpkg.com/) as well; no problem :tada:

> If you're not familiar with [semantic versioning](https://semver.org/) or [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), you should read their docs before starting.

> If you have any doubt, take a look at the [contributing guide](https://github.com/jlozovei/nc-img/blob/master/.github/CONTRIBUTING.md)!

### :rocket: Build and release
This project is release on [npm](https://www.npmjs.com/package/nc-img) with the help of [semantic-release](https://www.npmjs.com/package/semantic-release) and GitHub Actions; [commitizen](https://www.npmjs.com/package/commitizen) acts as a linter for commits, and `semantic-release` uses the signature the commits' signature to create new releases following the [semver](https://semver.org/) convention.

Every merged PR (pull request) into `master` branch will start the release workflow; if everything works fine, a new version will be automatically released within seconds.

> The `master` branch is blocked. When working on this project create new, dedicated branches to your changes and always merge it into `master`.


## :closed_lock_with_key: License
Licensed under the [MIT](https://github.com/jlozovei/nc-img/blob/master/LICENSE).
