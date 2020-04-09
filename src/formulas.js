
export default {
  formulas: [
    {
      type: 'tempature',
      units: [
        {
          id: 'celcius',
          name: 'Celcius',
          code: '°C',
          formulas: [{
            id: 'fahrenheit',
            formula: '(x * (9/5)) + 32',
          }, {
            id: 'kelvin',
            formula: 'x + 273.15',
          }],
        }, {
          id: 'fahrenheit',
          name: 'Fahrenheit',
          code: '°F',
          formulas: [{
            id: 'celcius',
            formula: '(x - 32) * (5/9)',
          }, {
            id: 'kelvin',
            formula: '(x + 459.67) * (5/9)',
          }],
        }, {
          id: 'kelvin',
          name: 'Kelvin',
          code: '°K',
          formulas: [{
            id: 'celcius',
            formula: 'x - 273.15',
          }, {
            id: 'fahrenheit',
            formula: '(x * 9/5) - 459.67',
          }],
        },
      ],
    }, {
      type: 'mass',
      units: [
        {
          id: 'tonne',
          name: 'Tonne',
          code: 'tonne',
          formulas: [{
            id: 'kilogram',
            formula: 'x * 1000',
          }, {
            id: 'gram',
            formula: 'x * 1e+6',
          }, {
            id: 'milligram',
            formula: 'x * 1e+9',
          }, {
            id: 'microgram',
            formula: 'x * 1e+12',
          }, {
            id: 'imperialton',
            formula: 'x / 1.016',
          }, {
            id: 'uston',
            formula: 'x / 1.102',
          }, {
            id: 'stone',
            formula: 'x * 157',
          }, {
            id: 'pund',
            formula: 'x * 2205',
          }, {
            id: 'ounce',
            formula: 'x * 35274',
          }],
        }, {
          id: 'kilogram',
          name: 'Kilogram',
          code: 'kg',
          formulas: [{
            id: 'tonne',
            formula: 'x / 1000',
          }, {
            id: 'gram',
            formula: 'x * 1000',
          }, {
            id: 'milligram',
            formula: 'x * 1e+6',
          }, {
            id: 'microgram',
            formula: 'x * 1e+9',
          }, {
            id: 'imperialton',
            formula: 'x / 1016',
          }, {
            id: 'uston',
            formula: 'x / 907',
          }, {
            id: 'stone',
            formula: 'x / 6.35',
          }, {
            id: 'pund',
            formula: 'x * 2.205',
          }, {
            id: 'ounce',
            formula: 'x * 35.274',
          }],
        }, {
          id: 'gram',
          name: 'gram',
          code: 'g',
          formulas: [{
            id: 'tonne',
            formula: 'x / 1e+6',
          }, {
            id: 'kilogram',
            formula: 'x / 1000',
          }, {
            id: 'milligram',
            formula: 'x * 1000',
          }, {
            id: 'microgram',
            formula: 'x * 1e+6',
          }, {
            id: 'imperialton',
            formula: 'x / 1.016e+6',
          }, {
            id: 'uston',
            formula: 'x / 907185',
          }, {
            id: 'stone',
            formula: 'x / 6350',
          }, {
            id: 'pund',
            formula: 'x / 454',
          }, {
            id: 'ounce',
            formula: 'x / 28.35',
          }],
        },
        , {
          id: 'milligram',
          name: 'Milligram',
          code: 'mg',
          formulas: [{
            id: 'tonne',
            formula: 'x / 1e+9',
          }, {
            id: 'kilogram',
            formula: 'x / 1e+6',
          }, {
            id: 'gram',
            formula: 'x / 1000',
          }, {
            id: 'microgram',
            formula: 'x * 1000',
          }, {
            id: 'imperialton',
            formula: 'x / 1.016e+9',
          }, {
            id: 'uston',
            formula: 'x / 9.072e+8',
          }, {
            id: 'stone',
            formula: 'x / 6.35e+6',
          }, {
            id: 'pund',
            formula: 'x / 453592',
          }, {
            id: 'ounce',
            formula: 'x / 28350',
          }],
        },
      ],
    },
  ],
};
