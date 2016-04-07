var postcss = require('postcss');

module.exports = postcss.plugin('postcss-hungarian-stylesheets', function (opts) {
	opts = opts || {};

	return function (css) {
		css.eachDecl(function transformDecl(decl) {
			decl.prop = decl.prop.replace('háttér', 'background');
			decl.prop = decl.prop.replace('úszás', 'float');

			decl.prop = decl.prop.replace('szélesség', 'width');
			decl.prop = decl.prop.replace('magasság', 'height');

			decl.prop = decl.prop.replace('lekerekítés', 'border-radius');

			decl.prop = decl.prop.replace('bal', 'left');
			decl.prop = decl.prop.replace('jobb', 'right');
			decl.prop = decl.prop.replace('fel', 'top');
			decl.prop = decl.prop.replace('le', 'bottom');

			decl.prop = decl.prop.replace('szöveg-átalakítás', 'text-transform');
			decl.prop = decl.prop.replace('betűtávolság', 'letter-spacing');
			decl.prop = decl.prop.replace('mutató', 'cursor');
			decl.prop = decl.prop.replace('betűforma', 'font-style');
			decl.prop = decl.prop.replace('betűkövérség', 'font-weight');

			decl.value = decl.value.replace('bal', 'left');
			decl.value = decl.value.replace('jobb', 'right');
			decl.value = decl.value.replace('fel', 'top');
			decl.value = decl.value.replace('le', 'bottom');

			decl.value = decl.value.replace('aláhúzás', 'underline');
			decl.value = decl.value.replace('mutatóujj', 'pointer');
			decl.value = decl.value.replace('nagybetű', 'uppercase');
			decl.value = decl.value.replace('kisbetű', 'lowercase');
			decl.value = decl.value.replace('kapitális', 'capitalize');
			decl.value = decl.value.replace('átlagos', 'normal');
			decl.value = decl.value.replace('dőlt', 'italic');
			decl.value = decl.value.replace('kövér', 'bold');
			decl.value = decl.value.replace('kövérebb', 'bolder');
			decl.value = decl.value.replace('vékonyabb', 'lighter');

			if (decl.value.indexOf('!fontos') >= 0) {
				decl.value = decl.value.replace(/\s*!fontos\s*/, '');
				decl.important = true;
			}
		});
	};
});
