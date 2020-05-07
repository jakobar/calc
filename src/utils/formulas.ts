
export default {
  formulas: [
    {
      type: 'tempature',
      units: [
        {
          id: 'celcius',
          name: 'Celcius',
          code: '°C',
          system: ['metric', 'uk'],
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
          system: ['us'],
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
          system: ['science'],
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
          system: ['metric'],
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
          system: ['metric'],
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
          system: ['metric'],
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
        }, {
          id: 'milligram',
          name: 'Milligram',
          code: 'mg',
          system: ['metric'],
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
        }, {
          id: 'microgram',
          name: 'Microgram',
          code: 'µg',
          system: ['metric'],
          formulas: [{
            id: 'tonne',
            formula: 'x / 1e+12',
          }, {
            id: 'kilogram',
            formula: 'x / 1e+9',
          }, {
            id: 'gram',
            formula: 'x / 1e+6',
          }, {
            id: 'milligram',
            formula: 'x / 1000',
          }, {
            id: 'imperialton',
            formula: 'x / 1.016e+12',
          }, {
            id: 'uston',
            formula: 'x / 9.072e+11',
          }, {
            id: 'stone',
            formula: 'x / 6.35e+9',
          }, {
            id: 'pund',
            formula: 'x / 4.536e+8',
          }, {
            id: 'ounce',
            formula: 'x / 2.835e+7',
          }],
        }, {
          id: 'imperialton',
          name: 'Imperialton',
          code: 'ipt',
          system: ['uk'],
          formulas: [{
            id: 'tonne',
            formula: 'x * 1.016',
          }, {
            id: 'kilogram',
            formula: 'x * 1016',
          }, {
            id: 'gram',
            formula: 'x * 1.016e+6',
          }, {
            id: 'milligram',
            formula: 'x * 1.016e+9',
          }, {
            id: 'microgram',
            formula: 'x * 1.016e+12',
          }, {
            id: 'uston',
            formula: 'x * 1.12',
          }, {
            id: 'stone',
            formula: 'x * 160',
          }, {
            id: 'pund',
            formula: 'x * 2240',
          }, {
            id: 'ounce',
            formula: 'x * 35840',
          }],
        }, {
          id: 'uston',
          name: 'US ton',
          code: 'ust',
          system: ['us'],
          formulas: [{
            id: 'tonne',
            formula: 'x / 1.102',
          }, {
            id: 'kilogram',
            formula: 'x * 907',
          }, {
            id: 'gram',
            formula: 'x * 907185',
          }, {
            id: 'milligram',
            formula: 'x * 9.072e+8',
          }, {
            id: 'microgram',
            formula: 'x * 9.072e+11',
          }, {
            id: 'imperialton',
            formula: 'x / 1.12',
          }, {
            id: 'stone',
            formula: 'x * 143',
          }, {
            id: 'pund',
            formula: 'x * 2000',
          }, {
            id: 'ounce',
            formula: 'x * 32000',
          }],
        }, {
          id: 'stone',
          name: 'Stone',
          code: 'st',
          system: ['uk'],
          formulas: [{
            id: 'tonne',
            formula: 'x / 157',
          }, {
            id: 'kilogram',
            formula: 'x * 6.35',
          }, {
            id: 'gram',
            formula: 'x * 6350',
          }, {
            id: 'milligram',
            formula: 'x * 6.35e+6',
          }, {
            id: 'microgram',
            formula: 'x * 6.35e+9',
          }, {
            id: 'imperialton',
            formula: 'x / 160',
          }, {
            id: 'uston',
            formula: 'x / 143',
          }, {
            id: 'pund',
            formula: 'x * 14',
          }, {
            id: 'ounce',
            formula: 'x * 224',
          }],
        }, {
          id: 'pound',
          name: 'Pound',
          code: 'p',
          system: ['us', 'uk'],
          formulas: [{
            id: 'tonne',
            formula: 'x / 2205',
          }, {
            id: 'kilogram',
            formula: 'x / 2.205',
          }, {
            id: 'gram',
            formula: 'x * 454',
          }, {
            id: 'milligram',
            formula: 'x * 453592',
          }, {
            id: 'microgram',
            formula: 'x * 4.536e+8',
          }, {
            id: 'imperialton',
            formula: 'x / 2240',
          }, {
            id: 'uston',
            formula: 'x / 2000',
          }, {
            id: 'stone',
            formula: 'x / 14',
          }, {
            id: 'ounce',
            formula: 'x * 16',
          }],
        }, {
          id: 'ounce',
          name: 'Ounce',
          code: 'Oz',
          system: ['us', 'uk'],
          formulas: [{
            id: 'tonne',
            formula: 'x / 35274',
          }, {
            id: 'kilogram',
            formula: 'x / 35.274',
          }, {
            id: 'gram',
            formula: 'x * 28.35',
          }, {
            id: 'milligram',
            formula: 'x * 28350',
          }, {
            id: 'microgram',
            formula: 'x * 2.835e+7',
          }, {
            id: 'imperialton',
            formula: 'x / 35840',
          }, {
            id: 'uston',
            formula: 'x / 32000',
          }, {
            id: 'stone',
            formula: 'x / 224',
          }, {
            id: 'pound',
            formula: 'x / 16',
          }],
        },
      ],
    }, {
      type: 'speed',
      units: [
        {
          id: 'milesPerHour',
          name: 'Miles per hour',
          code: 'm/h',
          system: ['us', 'uk'],
          formulas: [{
            id: 'footPerSecond',
            formula: 'x * 1.467',
          }, {
            id: 'metersPerSecond',
            formula: 'x / 2.237',
          }, {
            id: 'kilometersPerHour',
            formula: 'x * 1.609',
          }, {
            id: 'knot',
            formula: 'x / 1.151',
          }],
        }, {
          id: 'footPerSecond',
          name: 'Foot per second',
          code: 'f/s',
          system: ['us', 'uk'],
          formulas: [{
            id: 'milesPerHour',
            formula: 'x / 1.467',
          }, {
            id: 'metersPerSecond',
            formula: 'x / 3.281',
          }, {
            id: 'kilometersPerHour',
            formula: 'x * 1.097',
          }, {
            id: 'knot',
            formula: 'x / 1.688',
          }],
        }, {
          id: 'metersPerSecond',
          name: 'Meters per second',
          code: 'm/s',
          system: ['metric'],
          formulas: [{
            id: 'milesPerHour',
            formula: 'x * 2.237',
          }, {
            id: 'footPerSecond',
            formula: 'x * 3.281',
          }, {
            id: 'kilometersPerHour',
            formula: 'x * 3.6',
          }, {
            id: 'knot',
            formula: 'x * 1.944',
          }],
        }, {
          id: 'kilometersPerHour',
          name: 'Kilometres per hour',
          code: 'km/h',
          system: ['metric'],
          formulas: [{
            id: 'milesPerHour',
            formula: 'x / 1.609',
          }, {
            id: 'footPerSecond',
            formula: 'x / 1.097',
          }, {
            id: 'metersPerSecond',
            formula: 'x / 3.6',
          }, {
            id: 'knot',
            formula: 'x / 1.852',
          }],
        }, {
          id: 'knot',
          name: 'Knot',
          code: 'knot',
          system: ['uk'],
          formulas: [{
            id: 'milesPerHour',
            formula: 'x * 1.151',
          }, {
            id: 'footPerSecond',
            formula: 'x * 1.688',
          }, {
            id: 'metersPerSecond',
            formula: 'x / 1.944',
          }, {
            id: 'kilometersPerHour',
            formula: 'x * 1.852',
          }],
        },
      ],
    }, {
      type: 'length',
      units: [
        {
          id: 'kilometre',
          name: 'Kilometre',
          code: 'km',
          system: ['metric'],
          formulas: [{
            id: 'meters',
          formula: 'x * 1000',
          }, {
            id: 'centimetres',
          formula: 'x * 1000000',
          }, {
            id: 'millimetre',
          formula: 'x * 1e+6',
          }, {
            id: 'micrometre',
          formula: 'x * 1e+9',
          }, {
            id: 'nanometre',
          formula: 'x * 1e+12',
          }, {
            id: 'mile',
          formula: 'x / 1.609',
          }, {
            id: 'yard',
          formula: 'x * 1094',
          }, {
            id: 'foot',
          formula: 'x * 3281',
          }, {
            id: 'inch',
          formula: 'x * 39370',
          }, {
            id: 'nautical mile',
          formula: 'x / 1.852',
          }],
        }, {
          id: 'meters',
          name: 'Meters',
          code: 'm',
          system: ['metric'],
          formulas: [{
            id: 'kilometers',
          formula: 'x / 1000',
          }, {
            id: 'centimetres',
          formula: 'x * 100',
          }, {
            id: 'millimetre',
          formula: 'x * 1000',
          }, {
            id: 'micrometre',
          formula: 'x * 1e+6',
          }, {
            id: 'nanometre',
          formula: 'x * 1e+9',
          }, {
            id: 'mile',
          formula: 'x / 1609',
          }, {
            id: 'yard',
          formula: 'x * 1.094',
          }, {
            id: 'foot',
          formula: 'x * 3.281',
          }, {
            id: 'inch',
          formula: 'x * 39.37',
          }, {
            id: 'nautical mile',
          formula: 'x / 1852',
          }],
        }, {
          id: 'centimetres',
          name: 'Centimetres',
          code: 'cm',
          system: ['metric'],
          formulas: [{
            id: 'kilometers',
          formula: 'x / 100000',
          }, {
            id: 'metres',
          formula: 'x / 100',
          }, {
            id: 'millimetre',
          formula: 'x * 10',
          }, {
            id: 'micrometre',
          formula: 'x * 10000',
          }, {
            id: 'nanometre',
          formula: 'x * 1e+7',
          }, {
            id: 'mile',
          formula: 'x / 160934',
          }, {
            id: 'yard',
          formula: 'x / 91.44',
          }, {
            id: 'foot',
          formula: 'x / 30.48',
          }, {
            id: 'inch',
          formula: 'x / 2.54',
          }, {
            id: 'nautical mile',
          formula: 'x / 185200',
          }],
        }, {
          id: 'millimetre',
          name: 'Millimetre',
          code: 'mm',
          system: ['metric'],
          formulas: [{
            id: 'kilometers',
          formula: 'x / 1e+6',
          }, {
            id: 'metres',
          formula: 'x / 1000',
          }, {
            id: 'centimetres',
          formula: 'x / 10',
          }, {
            id: 'micrometre',
          formula: 'x * 1000',
          }, {
            id: 'nanometre',
          formula: 'x * 1e+6',
          }, {
            id: 'mile',
          formula: 'x / 1.609e+6',
          }, {
            id: 'yard',
          formula: 'x / 914',
          }, {
            id: 'foot',
          formula: 'x / 305',
          }, {
            id: 'inch',
          formula: 'x / 25.4',
          }, {
            id: 'nautical mile',
          formula: 'x / 1.852e+6',
          }],
        }, {
          id: 'micrometre',
          name: 'Micrometre',
          code: 'µm',
          system: ['metric'],
          formulas: [{
            id: 'kilometers',
          formula: 'x / 1e+9',
          }, {
            id: 'metres',
          formula: 'x / 1e+6',
          }, {
            id: 'centimetres',
          formula: 'x / 10000',
          }, {
            id: 'millimetre',
          formula: 'x / 1000',
          }, {
            id: 'nanometre',
          formula: 'x * 1000',
          }, {
            id: 'mile',
          formula: 'x / 1.609e+9',
          }, {
            id: 'yard',
          formula: 'x / 914400',
          }, {
            id: 'foot',
          formula: 'x / 304800',
          }, {
            id: 'inch',
          formula: 'x / 25400',
          }, {
            id: 'nautical mile',
          formula: 'x / 1.852e+9',
          }],
        }, {
          id: 'nanometre',
          name: 'Nanometre',
          code: 'nm',
          system: ['metric'],
          formulas: [{
            id: 'kilometers',
          formula: 'x / 1e+12',
          }, {
            id: 'metres',
          formula: 'x / 1e+9',
          }, {
            id: 'centimetres',
          formula: 'x / 1e+7',
          }, {
            id: 'millimetre',
          formula: 'x / 1e+6',
          }, {
            id: 'micrometre',
          formula: 'x / 1000',
          }, {
            id: 'mile',
          formula: 'x / 1.609e+12',
          }, {
            id: 'yard',
          formula: 'x / 9.144e+8',
          }, {
            id: 'foot',
          formula: 'x / 3.048e+8',
          }, {
            id: 'inch',
          formula: 'x / 2.54e+7',
          }, {
            id: 'nautical mile',
          formula: 'x / 1.852e+12',
          }],
        }, {
          id: 'mile',
          name: 'Mile',
          code: 'mile',
          system: ['us', 'uk'],
          formulas: [{
            id: 'kilometers',
          formula: 'x * 1.609',
          }, {
            id: 'metres',
          formula: 'x * 1609',
          }, {
            id: 'centimetres',
          formula: 'x * 160934',
          }, {
            id: 'millimetre',
          formula: 'x * 1.609e+6',
          }, {
            id: 'micrometre',
          formula: 'x * 1.609e+9',
          }, {
            id: 'nanometre',
          formula: 'x * 1.609e+12',
          }, {
            id: 'yard',
          formula: 'x * 1760',
          }, {
            id: 'foot',
          formula: 'x * 5280',
          }, {
            id: 'inch',
          formula: 'x * 63360',
          }, {
            id: 'nautical mile',
          formula: 'x / 1.151',
          }],
        }, {
          id: 'yard',
          name: 'Yard',
          code: 'yard',
          system: ['us', 'uk'],
          formulas: [{
            id: 'kilometers',
          formula: 'x / 1094',
          }, {
            id: 'metres',
          formula: 'x / 1.094',
          }, {
            id: 'centimetres',
          formula: 'x * 91.44',
          }, {
            id: 'millimetre',
          formula: 'x * 914',
          }, {
            id: 'micrometre',
          formula: 'x * 914400',
          }, {
            id: 'nanometre',
          formula: 'x * 9.144e+8',
          }, {
            id: 'mile',
          formula: 'x / 1760',
          }, {
            id: 'foot',
          formula: 'x * 3',
          }, {
            id: 'inch',
          formula: 'x * 36',
          }, {
            id: 'nautical mile',
          formula: 'x / 2025',
          }],
        }, {
          id: 'foot',
          name: 'Foot',
          code: 'foot',
          system: ['us', 'uk'],
          formulas: [{
            id: 'kilometers',
          formula: 'x / 3281',
          }, {
            id: 'metres',
          formula: 'x / 3.281',
          }, {
            id: 'centimetres',
          formula: 'x * 30.48',
          }, {
            id: 'millimetre',
          formula: 'x * 305',
          }, {
            id: 'micrometre',
          formula: 'x * 304800',
          }, {
            id: 'nanometre',
          formula: 'x * 3.048e+8',
          }, {
            id: 'mile',
          formula: 'x / 5280',
          }, {
            id: 'yard',
          formula: 'x / 3',
          }, {
            id: 'inch',
          formula: 'x * 12',
          }, {
            id: 'nautical mile',
          formula: 'x / 6076',
          }],
        }, {
          id: 'inch',
          name: 'Inch',
          code: 'in',
          system: ['us', 'uk'],
          formulas: [{
            id: 'kilometers',
          formula: 'x / 39370',
          }, {
            id: 'metres',
          formula: 'x / 39.37',
          }, {
            id: 'centimetres',
          formula: 'x * 2.54',
          }, {
            id: 'millimetre',
          formula: 'x * 25.4',
          }, {
            id: 'micrometre',
          formula: 'x * 25400',
          }, {
            id: 'nanometre',
          formula: 'x * 2.54e+7',
          }, {
            id: 'mile',
          formula: 'x / 63360',
          }, {
            id: 'yard',
          formula: 'x / 36',
          }, {
            id: 'foot',
          formula: 'x / 12',
          }, {
            id: 'nautical mile',
          formula: 'x / 72913',
          }],
        }, {
          id: 'nautical mile',
          name: 'Nautical mile',
          code: 'nautical mile',
          system: ['uk'],
          formulas: [{
            id: 'kilometers',
          formula: 'x * 1.852',
          }, {
            id: 'metres',
          formula: 'x * 1852',
          }, {
            id: 'centimetres',
          formula: 'x * 185200',
          }, {
            id: 'millimetre',
          formula: 'x * 1.852e+6',
          }, {
            id: 'micrometre',
          formula: 'x * 1.852e+9',
          }, {
            id: 'nanometre',
          formula: 'x * 1.852e+12',
          }, {
            id: 'mile',
          formula: 'x * 1.151',
          }, {
            id: 'yard',
          formula: 'x * 2025',
          }, {
            id: 'foot',
          formula: 'x * 6076',
          }, {
            id: 'inch',
          formula: 'x * 72913',
          }],
        },
      ],
    },
  ],
};
