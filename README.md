![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# nc-img :framed_picture:
A custom element for non-copyable HTML images.

`nc-img = non-copyable + img` :sparkles:


## :scroll: About
Have you ever tried to create non-copyable images for your website? Or, at least, discourage users from copying your website's images?

If so, you've found the right package! :tada:

`nc-img` is a web component that wrapps your image in some custom HTML with some nasty CSS rules, so users can't right-click your image to copy it, or drag'em into their desktop.

> If the users wants to copy your image, they'll have to sweat - sneaking into the browser console to inspect your markup, or to search within the transferred resources.

## :closed_book: How to use
You can use this package with [unpkg](https://unpkg.com/) CDN, putting the script tag into your `.html` file:

```html
<script type="module" src="https://unpkg.com/nc-img/dist/nc-img/nc-img.esm.js"></script>
<script nomodule src="https://unpkg.com/nc-img/dist/nc-img/nc-img.js"></script>
```
So, you can use the following markup wherever you need a non-copyable image:
```html
<nc-img src="<img_source>" alt="<img_alt>" />
```

It can be used with plain HTML and/or with any JS framework/lib you're using right now :confetti_ball:

## :computer: Developing

## :closed_lock_with_key: License
Licensed under the [MIT](https://github.com/jlozovei/nc-img/blob/master/LICENSE).
