var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function (error) {
        done(error);
    });
};

describe('postcss-hungarian-stylesheets', function () {

    it('converts lekerekítés to border-radius', function (done) {
        test('a{ lekerekítés: 3px; }', 'a{ border-radius: 3px; }', { }, done);
    });

    it('converts háttér to background', function (done) {
        test('a{ háttér: #fff; }', 'a{ background: #fff; }', { }, done);
    });

    it('converts szélesség to width', function (done) {
        test('a{ szélesség: 300px; }', 'a{ width: 300px; }', { }, done);
    });

    it('converts magasság to height', function (done) {
        test('a{ magasság: 300px; }', 'a{ height: 300px; }', { }, done);
    });

    it('converts fent to top', function (done) {
        test('a{ fent: 300px; }', 'a{ top: 300px; }', { }, done);
    });

    it('converts lent to bottom', function (done) {
        test('a{ lent: 300px; }', 'a{ bottom: 300px; }', { }, done);
    });

    it('converts balra to left', function (done) {
        test('a{ balra: 300px; }', 'a{ left: 300px; }', { }, done);
    });

    it('converts jobbra to right', function (done) {
        test('a{ jobbra: 300px; }', 'a{ right: 300px; }', { }, done);
    });

    it('converts betűtávolság to letter-spacing', function (done) {
        test('a{ betűtávolság: -1px; }', 'a{ letter-spacing: -1px; }', { }, done);
    });

    it('converts mutató to cursor', function (done) {
        test('a{ mutató: pointer; }', 'a{ cursor: pointer; }', { }, done);
    });

    it('converts pointer to mutatóujj', function (done) {
        test('a{ cursor: mutatóujj; }', 'a{ cursor: pointer; }', { }, done);
    });

    it('converts !fontos to !important', function (done) {
        test('a{ color: #000 !fontos; }',
             'a{ color: #000 !important; }', {}, done);
    });

});
