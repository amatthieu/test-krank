let getAll = function () {
  // Utilisation de web service ici, mock car indispo.
  // Le web service devrait être paginé, avec en paramètre le nombre d'éléments à passer
  return Promise.resolve(
    [
      {
        id: 1,
        date: '2018-06-11 17:00:00',
        location: 'Soccer Five',
        sport: 'Football',
        tags: [
          '5vs5',
          'Expert'
        ],
        creator: {
          id: 1,
          name: 'Benoit de Krank',
          profilePric: 'http://i.imgur.com/YdhUZdZ.png' // http://sguru.org/wp-content/uploads/2017/06/cool-anonymous-profile-pictures-1699946_orig.jpg
        },
        price: 8,
        duration: '1h30',
        isFull: false
      },
      {
        id: 2,
        date: '2018-06-11 17:00:00',
        location: 'Soccer Five',
        sport: 'Football',
        tags: [
          '5vs5',
          'Expert'
        ],
        creator: {
          id: 1,
          name: 'Benoit de Krank',
          profilePric: 'http://i.imgur.com/YdhUZdZ.png' // http://sguru.org/wp-content/uploads/2017/06/cool-anonymous-profile-pictures-1699946_orig.jpg
        },
        price: 8,
        duration: '1h30',
        isFull: false
      },
      {
        id: 3,
        date: '2018-06-12 18:00:00',
        location: 'Canal de l\'ourq',
        sport: 'Running',
        tags: [
          '5vs5',
          'Expert',
          'Skilled'
        ],
        creator: {
          id: 2,
          name: 'Tedd Niels',
          profilePric: 'http://sguru.org/wp-content/uploads/2017/06/cool-anonymous-profile-pictures-1699946_orig.jpg'
        },
        price: 0,
        duration: '1h00',
        isFull: true
      }
    ])
}

export default {
  getAll
}
