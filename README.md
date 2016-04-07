# PostCSS Hungarian Stylesheets

[PostCSS] plugin for writing Hungarian Stylesheets..

[PostCSS]: https://github.com/postcss/postcss

```css
.foo {
    lekerekítés: 3px;
    háttér: #fff;
    szélesség: 300px;
    magasság: 200px;
    úszás: balra;
    fel: 10px;
    le: 0px;
    bal: 100px;
    jobb: 100px;
    betűtávolság: -1px;
    mutató: mutatóujj !fontos;
    szöveg-átalakítás: kapitális;
}
```

```css
.foo {
    border-radius: 3px;
    background: #fff;
    width: 300px;
    height: 200px;
    float: left;
    top: 10px;
    bottom: 0px;
    left: 100px;
    right: 100px;
    letter-spacing: -1px;
    cursor: pointer !important;
    text-transform: capitalize;
}
```

## Usage

```js
postcss([ require('postcss-hungarian-stylesheets') ])
```

See [PostCSS] docs for examples for your environment.
