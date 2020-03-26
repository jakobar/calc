
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
          }],
        },
      ],
    },
  ],
};
