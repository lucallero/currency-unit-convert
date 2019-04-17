/* eslint-disable no-undef */
const assert = require('assert');
const Units = require('../index.js');

describe('Units', () => {
  describe('convertBTC', () => {
    it('should convert BTC to smaller units', () => {
      assert.equal(Units.convertBTC('1', 'btc', 'mbtc'), '1000');
      assert.equal(Units.convertBTC('1', 'btc', 'ubtc'), '1000000');
      assert.equal(Units.convertBTC('1', 'btc', 'bit'), '1000000');
      assert.equal(Units.convertBTC('1', 'btc', 'satoshi'), '100000000');
    });
    it('should convert mbtc to other units', () => {
      assert.equal(Units.convertBTC('1', 'mbtc', 'btc'), '0.001');
      assert.equal(Units.convertBTC('1', 'mbtc', 'ubtc'), '1000');
      assert.equal(Units.convertBTC('1', 'mbtc', 'satoshi'), '100000');
    });
    it('should convert ubtc to other units', function () {
      assert.equal(Units.convertBTC('1', 'ubtc', 'btc'), '0.000001');
      assert.equal(Units.convertBTC('1', 'ubtc', 'mbtc'), '0.001');
      assert.equal(Units.convertBTC('1', 'ubtc', 'satoshi'), '100');
    });
    it('should convert Satoshi to bigger units', () => {
      assert.equal(Units.convertBTC('1', 'satoshi', 'bit'), '0.01');
      assert.equal(Units.convertBTC('1', 'satoshi', 'ubtc'), '0.01');
      assert.equal(Units.convertBTC('1', 'satoshi', 'mbtc'), '0.00001');
      assert.equal(Units.convertBTC('1', 'satoshi', 'btc'), '0.00000001');
    });
    it('should fail on invalid input satoshi', () => {
      assert.throws(() => {
        Units.convertBTC('1', 'random', 'satoshi');
      }, /^Error: Unsupported input unit$/);
    });
    it('should fail on invalid input btc', () => {
      assert.throws(() => {
        Units.convertBTC('1', 'random', 'btc');
      }, /^Error: Unsupported input unit$/);
    });
    it('should fail on invalid output btc', () => {
      assert.throws(() => {
        Units.convertBTC('1', 'satoshi', 'random');
      }, /^Error: Unsupported input unit$/);
    });
    it('should fail on non-decimal input', function () {
      assert.throws(function () {
        Units.convertBTC('1,00', 'btc', 'random');
      }, /^Error: Unsupported value$/);

      assert.throws(function () {
        Units.convertBTC('test', 'btc', 'random');
      }, /^Error: Unsupported value$/);
    });
    it('should work with decimal first numbers', () => {
      assert.equal(Units.convertBTC('.1', 'btc', 'satoshi'), '10000000');
    });
    it('should work with any capitalization', () => {
      assert.equal(Units.convertBTC('1', 'bTc', 'satOSHi'), '100000000');
    });
  });

  describe('convertBCH', () => {
    it('should convert BCH to smaller units', () => {
      assert.equal(Units.convertBCH('1', 'bch', 'mbch'), '1000');
      assert.equal(Units.convertBCH('1', 'bch', 'ubch'), '1000000');
      assert.equal(Units.convertBCH('1', 'bch', 'bit'), '1000000');
      assert.equal(Units.convertBCH('1', 'bch', 'satoshi'), '100000000');
    });
    it('should convert mbch to other units', () => {
      assert.equal(Units.convertBCH('1', 'mbch', 'bch'), '0.001');
      assert.equal(Units.convertBCH('1', 'mbch', 'ubch'), '1000');
      assert.equal(Units.convertBCH('1', 'mbch', 'satoshi'), '100000');
    });
    it('should convert ubch to other units', function () {
      assert.equal(Units.convertBCH('1', 'ubch', 'bch'), '0.000001');
      assert.equal(Units.convertBCH('1', 'ubch', 'mbch'), '0.001');
      assert.equal(Units.convertBCH('1', 'ubch', 'satoshi'), '100');
    });
    it('should convert Satoshi to bigger units', () => {
      assert.equal(Units.convertBCH('1', 'satoshi', 'bit'), '0.01');
      assert.equal(Units.convertBCH('1', 'satoshi', 'ubch'), '0.01');
      assert.equal(Units.convertBCH('1', 'satoshi', 'mbch'), '0.00001');
      assert.equal(Units.convertBCH('1', 'satoshi', 'bch'), '0.00000001');
    });
    it('should fail on invalid input satoshi', () => {
      assert.throws(() => {
        Units.convertBCH('1', 'random', 'satoshi');
      }, /^Error: Unsupported input unit$/);
    });
    it('should fail on invalid input bch', () => {
      assert.throws(() => {
        Units.convertBCH('1', 'random', 'bch');
      }, /^Error: Unsupported input unit$/);
    });
    it('should fail on invalid output bch', () => {
      assert.throws(() => {
        Units.convertBCH('1', 'satoshi', 'random');
      }, /^Error: Unsupported input unit$/);
    });
    it('should fail on non-decimal input', function () {
      assert.throws(function () {
        Units.convertBCH('1,00', 'bch', 'random');
      }, /^Error: Unsupported value$/);

      assert.throws(function () {
        Units.convertBCH('test', 'bch', 'random');
      }, /^Error: Unsupported value$/);
    });
    it('should work with decimal first numbers', () => {
      assert.equal(Units.convertBCH('.1', 'bch', 'satoshi'), '10000000');
    });
    it('should work with any capitalization', () => {
      assert.equal(Units.convertBCH('1', 'bch', 'satOSHi'), '100000000');
    });
  });

  describe('convertETH', () => {
    it('should convert eth big unit to small unit', () => {
      assert.equal(Units.convertETH('1', 'eth', 'wei'), '1000000000000000000');
      assert.equal(Units.convertETH('20', 'gwei', 'wei'), '20000000000');
      assert.equal(Units.convertETH('20.05', 'gwei', 'wei'), '20050000000');
      assert.equal(Units.convertETH('20.005', 'kwei', 'wei'), '20005');
    });
    it('should convert wei to bigger unit', function () {
      assert.equal(Units.convertETH('1', 'wei', 'eth'), '0.000000000000000001');
      assert.equal(Units.convertETH('1', 'wei', 'finney'), '0.000000000000001');
      assert.equal(Units.convertETH('1', 'wei', 'gwei'), '0.000000001');
      assert.equal(Units.convertETH('1', 'wei', 'mwei'), '0.000001');
      assert.equal(Units.convertETH('1', 'wei', 'kwei'), '0.001');
    });
    it('should convert kwei to bigger unit', function () {
      assert.equal(Units.convertETH('1', 'kwei', 'eth'), '0.000000000000001');
      assert.equal(Units.convertETH('1', 'kwei', 'finney'), '0.000000000001');
      assert.equal(Units.convertETH('1', 'kwei', 'gwei'), '0.000001');
      assert.equal(Units.convertETH('1', 'kwei', 'mwei'), '0.001');
      assert.equal(Units.convertETH('1', 'kwei', 'wei'), '1000');
    });
    it('should fail on invalid input wei', () => {
      assert.throws(() => {
        Units.convertETH('1', 'random', 'wei');
      }, /^Error: Unsupported input unit$/);
    });
    it('should fail on invalid output wei', () => {
      assert.throws(() => {
        Units.convertETH('1', 'wei', 'random');
      }, /^Error: Unsupported input unit$/);
    });
    it('should fail on invalid input eth', () => {
      assert.throws(() => {
        Units.convertETH('1', 'random', 'eth');
      }, /^Error: Unsupported input unit$/);
    });
    it('should fail on non-decimal input', function () {
      assert.throws(function () {
        Units.convertETH('1,00', 'eth', 'random');
      }, /^Error: Unsupported value$/);

      assert.throws(function () {
        Units.convertETH('test', 'eth', 'random');
      }, /^Error: Unsupported value$/);
    });
    it('should work with decimal first numbers', () => {
      assert.equal(Units.convertETH('.1', 'eth', 'wei'), '100000000000000000');
    });
    it('should work with any capitalization', () => {
      assert.equal(Units.convertETH('1', 'eTh', 'WEi'), '1000000000000000000');
    });
  });

  describe('convertXRP', () => {
    it('should convert Ripple big unit to small unit', () => {
      assert.equal(Units.convertXRP('1', 'xrp', 'drop'), '1000000');
      assert.equal(Units.convertXRP('1.5', 'xrp', 'drop'), '1500000');
      assert.equal(Units.convertXRP('1.05', 'xrp', 'drop'), '1050000');
    });
    it('should convert drop to bigger units', function () {
      assert.equal(Units.convertXRP('1', 'drop', 'xrp'), '0.000001');
    });
    it('should fail on invalid input drop', () => {
      assert.throws(() => {
        Units.convertXRP('1', 'random', 'drop');
      }, /^Error: Unsupported input unit$/);
    });
    it('should fail on invalid output xrp', () => {
      assert.throws(() => {
        Units.convertXRP('1', 'xrp', 'random');
      }, /^Error: Unsupported input unit$/);
    });
    it('should fail on non-decimal input', function () {
      assert.throws(function () {
        Units.convertXRP('1,00', 'xrp', 'random');
      }, /^Error: Unsupported value$/);

      assert.throws(function () {
        Units.convertXRP('test', 'xrp', 'random');
      }, /^Error: Unsupported value$/);
    });
    it('should work with decimal first numbers', () => {
      assert.equal(Units.convertXRP('.1', 'xrp', 'drop'), '100000');
    });
    it('should work with any capitalization', () => {
      assert.equal(Units.convertXRP('1', 'XrP', 'drOp'), '1000000');
    });
  });

  describe('convertLTC', () => {
    it('should convert Litecoin big unit to small unit', () => {
      assert.equal(Units.convertLTC('1', 'ltc', 'litoshi'), '100000000');
      assert.equal(Units.convertLTC('1', 'lite', 'litoshi'), '100000');
      assert.equal(Units.convertLTC('1', 'photon', 'litoshi'), '100');
      assert.equal(Units.convertLTC('1.5', 'photon', 'litoshi'), '150');
      assert.equal(Units.convertLTC('1.05', 'photon', 'litoshi'), '105');
    });
    it('should convert litoshi to bigger unit', function () {
      assert.equal(Units.convertLTC('1', 'litoshi', 'ltc'), '0.00000001');
    });
    it('should fail on invalid input litoshi', () => {
      assert.throws(() => {
        Units.convertLTC('1', 'random', 'litoshi');
      }, /^Error: Unsupported input unit$/);
    });
    it('should fail on invalid output ltc', () => {
      assert.throws(() => {
        Units.convertLTC('1', 'ltc', 'random');
      }, /^Error: Unsupported input unit$/);
    });
    it('should fail on non-decimal input', function () {
      assert.throws(function () {
        Units.convertLTC('1,00', 'ltc', 'random');
      }, /^Error: Unsupported value$/);

      assert.throws(function () {
        Units.convertLTC('test', 'ltc', 'random');
      }, /^Error: Unsupported value$/);
    });
    it('should work with decimal first numbers', () => {
      assert.equal(Units.convertLTC('.1', 'ltc', 'litoshi'), '10000000');
    });
    it('should work with any capitalization', () => {
      assert.equal(Units.convertLTC('1', 'lTc', 'LitoSHi'), '100000000');
    });
  });

  describe('convertDASH', () => {
    it('should convert Dash big unit to small unit', () => {
      assert.equal(Units.convertDASH('1', 'dash', 'duff'), '100000000');

    });
    it('should convert duff to bigger unit', function () {
      assert.equal(Units.convertDASH('1', 'duff', 'dash'), '0.00000001');
    });
    it('should fail on invalid input duff', () => {
      assert.throws(() => {
        Units.convertDASH('1', 'random', 'duff');
      }, /^Error: Unsupported input unit$/);
    });
    it('should fail on invalid output dash', () => {
      assert.throws(() => {
        Units.convertDASH('1', 'dash', 'random');
      }, /^Error: Unsupported input unit$/);
    });
    it('should fail on non-decimal input', function () {
      assert.throws(function () {
        Units.convertDASH('1,00', 'dash', 'random');
      }, /^Error: Unsupported value$/);

      assert.throws(function () {
        Units.convertDASH('test', 'dash', 'random');
      }, /^Error: Unsupported value$/);
    });
    it('should work with decimal first numbers', () => {
      assert.equal(Units.convertDASH('.1', 'dash', 'duff'), '10000000');
    });
    it('should work with any capitalization', () => {
      assert.equal(Units.convertDASH('1', 'DAsh', 'dUff'), '100000000');
    });
  });

  describe('convertZEC', () => {
    it('should convert Zcash big unit to small unit', () => {
      assert.equal(Units.convertZEC('1', 'zec', 'zatoshi'), '100000000');

    });
    it('should convert duff to bigger unit', function () {
      assert.equal(Units.convertZEC('1', 'zatoshi', 'zec'), '0.00000001');
    });
    it('should fail on invalid input zatoshi', () => {
      assert.throws(() => {
        Units.convertZEC('1', 'random', 'zatoshi');
      }, /^Error: Unsupported input unit$/);
    });
    it('should fail on invalid output zec', () => {
      assert.throws(() => {
        Units.convertZEC('1', 'zec', 'random');
      }, /^Error: Unsupported input unit$/);
    });
    it('should fail on non-decimal input', function () {
      assert.throws(function () {
        Units.convertZEC('1,00', 'zec', 'random');
      }, /^Error: Unsupported value$/);

      assert.throws(function () {
        Units.convertZEC('test', 'zec', 'random');
      }, /^Error: Unsupported value$/);
    });
    it('should work with decimal first numbers', () => {
      assert.equal(Units.convertZEC('.1', 'zec', 'zatoshi'), '10000000');
    });
    it('should work with any capitalization', () => {
      assert.equal(Units.convertZEC('1', 'ZeC', 'ZAtoShI'), '100000000');
    });
  });

  describe('convertBRL', () => {
    it('should convert Real big unit to small unit', () => {
      assert.equal(Units.convertBRL('1', 'real', 'centavo'), '100');

    });
    it('should convert duff to bigger unit', function () {
      assert.equal(Units.convertBRL('1', 'centavo', 'real'), '0.01');
    });
    it('should fail on invalid input centavo', () => {
      assert.throws(() => {
        Units.convertBRL('1', 'random', 'centavo');
      }, /^Error: Unsupported input unit$/);
    });
    it('should fail on invalid output brl', () => {
      assert.throws(() => {
        Units.convertBRL('1', 'real', 'random');
      }, /^Error: Unsupported input unit$/);
    });
    it('should fail on non-decimal input', function () {
      assert.throws(function () {
        Units.convertBRL('1,00', 'real', 'random');
      }, /^Error: Unsupported value$/);

      assert.throws(function () {
        Units.convertBRL('test', 'real', 'random');
      }, /^Error: Unsupported value$/);
    });
    it('should work with decimal first numbers', () => {
      assert.equal(Units.convertBRL('.1', 'real', 'centavo'), '100');
    });
    it('should work with any capitalization', () => {
      assert.equal(Units.convertBRL('1', 'reaL', 'CentaVo'), '100');
    });
  });

  describe('convertUSD', () => {
    it('should convert Dolar big unit to small unit', () => {
      assert.equal(Units.convertUSD('1', 'dollar', 'cent'), '100');

    });
    it('should convert duff to bigger unit', function () {
      assert.equal(Units.convertUSD('1', 'cent', 'dollar'), '0.01');
    });
    it('should fail on invalid input cent', () => {
      assert.throws(() => {
        Units.convertUSD('1', 'random', 'cent');
      }, /^Error: Unsupported input unit$/);
    });
    it('should fail on invalid output usd', () => {
      assert.throws(() => {
        Units.convertUSD('1', 'dollar', 'random');
      }, /^Error: Unsupported input unit$/);
    });
    it('should fail on non-decimal input', function () {
      assert.throws(function () {
        Units.convertUSD('1,00', 'dollar', 'random');
      }, /^Error: Unsupported value$/);

      assert.throws(function () {
        Units.convertUSD('test', 'dollar', 'random');
      }, /^Error: Unsupported value$/);
    });
    it('should work with decimal first numbers', () => {
      assert.equal(Units.convertUSD('.1', 'dollar', 'centavo'), '100');
    });
    it('should work with any capitalization', () => {
      assert.equal(Units.convertUSD('1', 'DollaR', 'Cent'), '100');
    });
  });

  describe('convertEUR', () => {
    it('should convert Euro big unit to small unit', () => {
      assert.equal(Units.convertEUR('1', 'euro', 'cent'), '100');

    });
    it('should convert duff to bigger unit', function () {
      assert.equal(Units.convertEUR('1', 'cent', 'euro'), '0.01');
    });
    it('should fail on invalid input cent', () => {
      assert.throws(() => {
        Units.convertEUR('1', 'random', 'cent');
      }, /^Error: Unsupported input unit$/);
    });
    it('should fail on invalid output usd', () => {
      assert.throws(() => {
        Units.convertEUR('1', 'euro', 'random');
      }, /^Error: Unsupported input unit$/);
    });
    it('should fail on non-decimal input', function () {
      assert.throws(function () {
        Units.convertEUR('1,00', 'euro', 'random');
      }, /^Error: Unsupported value$/);

      assert.throws(function () {
        Units.convertEUR('test', 'euro', 'random');
      }, /^Error: Unsupported value$/);
    });
    it('should work with decimal first numbers', () => {
      assert.equal(Units.convertEUR('.1', 'euro', 'centavo'), '100');
    });
    it('should work with any capitalization', () => {
      assert.equal(Units.convertEUR('1', 'EurO', 'Cent'), '100');
    });
  });
});