var postcss = require('postcss');

module.exports = postcss.plugin('postcss-hingarian-stylesheets', function (opts) {
    opts = opts || {};

    return function (css) {
        css.eachDecl(function transformDecl(decl) {
            decl.prop = decl.prop.replace('háttér', 'background');
            decl.prop = decl.prop.replace('úszás', 'float');
            decl.prop = decl.prop.replace('szélesség', 'width');
            decl.prop = decl.prop.replace('magasság', 'height');
            decl.prop = decl.prop.replace('lekerekítés', 'border-radius');
            decl.value = decl.value.replace('balra', 'left');
            decl.prop = decl.prop.replace('bal', 'left');
            decl.value = decl.value.replace('jobbra', 'right');
            decl.prop = decl.prop.replace('jobb', 'right');
            decl.value = decl.value.replace('fent', 'top');
            decl.prop = decl.prop.replace('fel', 'top');
            decl.value = decl.value.replace('lent', 'bottom');
            decl.prop = decl.prop.replace('le', 'bottom');
            decl.prop = decl.prop.replace('betűtávolság', 'letter-spacing');
            decl.value = decl.value.replace('aláhúzás', 'underline');
            decl.prop = decl.prop.replace('mutató', 'cursor');
            decl.value = decl.value.replace('mutatóujj', 'pointer');
            decl.value = decl.value.replace('kapitális', 'uppercase');

            if (decl.value.indexOf('!fontos') >= 0) {
                decl.value = decl.value.replace(/\s*!fontos\s*/, '');
                decl.important = true;
            }
        });
    };
});
