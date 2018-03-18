let getAll = function () {
  // Utilisation de web service ici, mock car indispo.
  // Le web service devrait être paginé, avec en paramètre le nombre d'éléments à passer
  return Promise.resolve(
    [
      {
        id: 1,
        date: '2018-06-11 17:30:00',
        location: 'Soccer Five',
        sport: 'Football',
        tags: [
          '5vs5',
          'Expert'
        ],
        creator: {
          id: 1,
          name: 'Benoit de Krank',
          profilePic: 'http://i.imgur.com/YdhUZdZ.png' // http://sguru.org/wp-content/uploads/2017/06/cool-anonymous-profile-pictures-1699946_orig.jpg
        },
        price: 8,
        duration: 1.5,
        isFull: false,
        isFavorite: true
      },
      {
        id: 2,
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
          profilePic: 'http://sguru.org/wp-content/uploads/2017/06/cool-anonymous-profile-pictures-1699946_orig.jpg'
        },
        price: 0,
        duration: 1.5,
        isFull: true,
        isFavorite: false
      },
      {
        id: 3,
        date: '2018-06-12 17:00:00',
        location: 'Hoops Factory',
        sport: 'Basket',
        tags: [
          '3vs3',
          'Expert',
          'Bon esprit'
        ],
        creator: {
          id: 1,
          name: 'Benoit de Krank',
          profilePic: 'http://i.imgur.com/YdhUZdZ.png' // http://sguru.org/wp-content/uploads/2017/06/cool-anonymous-profile-pictures-1699946_orig.jpg
        },
        price: 8,
        duration: 1.5,
        isFull: false,
        isFavorite: false
      },
      {
        id: 4,
        date: '2018-06-12 18:00:00',
        location: 'Court Niox',
        sport: 'Tennis',
        tags: [
          '1vs1',
          'Expert'
        ],
        creator: {
          id: 2,
          name: 'Tedd Niels',
          profilePic: 'http://sguru.org/wp-content/uploads/2017/06/cool-anonymous-profile-pictures-1699946_orig.jpg'
        },
        price: 0,
        duration: 1,
        isFull: false,
        isFavorite: false
      }
    ])
}

export default {
  getAll
}
