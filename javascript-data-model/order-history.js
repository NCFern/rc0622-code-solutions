var orderHistory = [
  {
    orderNumber: '114-3941689-8772232',
    shipTo: 'JS Masher',
    orderPlaced: 'August 4, 2020',
    delivered: 'August 8, 2020',
    cost: 34.00,
    handedTo: null,
    item: [
      {
        type: 'book',
        title: 'JavaScript for Impatient Programmers',
        author: 'Dr. Axel Rauschmayer',
        price: 31.55,
        returnBy: 'September 7, 2020'
      }
    ]
  },

  {
    orderNumber: '113-9984268-1280257',
    shipTo: 'JS Masher',
    orderPlaced: 'July 19, 2020',
    delivered: 'July 20, 2020',
    cost: 44.53,
    handedTo: 'resident',
    item: [
      {
        type: 'book',
        title: 'The Timeless Way of Building',
        author: 'Christopher Alexander',
        price: 41.33,
        returnBy: 'August 19, 2020'
      }
    ]
  },

  {
    orderNumber: '114-2875557-9059409',
    shipTo: 'JS Masher',
    orderPlaced: 'July 4, 2020',
    delivered: 'July 7, 2020',
    cost: 17.22,
    handedTo: 'resident',
    item: [
      {
        type: 'electronic',
        title: 'GameCube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for Wii U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
        author: null,
        price: 15.98,
        returnBy: 'August 5, 2020'
      }
    ]
  },

  {
    orderNumber: '113-2883177-2648248',
    shipTo: 'JS Masher',
    orderPlaced: 'July 3, 2020',
    delivered: 'July 5, 2020',
    cost: 138.93,
    handedTo: null,
    item: [
      {
        type: 'electronic',
        title: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        author: null,
        price: 94.95,
        returnBy: 'August 4, 2020'
      },
      {
        type: 'book',
        title: 'The Art of Sql',
        author: 'Stephane Faroult',
        price: 33.99,
        returnBy: 'August 4, 2020'
      }
    ]
  }
];

console.log('orderHistory', orderHistory);
