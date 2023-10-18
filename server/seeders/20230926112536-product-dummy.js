'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const products = [
      {
        name: 'Sate',
        price: 18000,
        description: 'Makanan khas indonesia yang dipanggang beraroma khas',
        imageUrl: 'https://media.istockphoto.com/id/1166125076/id/foto/sate-ayam-dengan-saus-kacang.jpg?s=2048x2048&w=is&k=20&c=RYjAR35hnCsonvicFTGY6XwFPe7j4_HX4aKZBcr30vQ=',
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Soto',
        price: 15000,
        description: 'Makanan khas indonesia dengan kuah bersantan',
        imageUrl: 'https://media.istockphoto.com/id/849603518/id/foto/sup-ayam-indonesia-dengan-telur-rebus-tomat-tauge-lemon-cabai-rawit-dengan-latar-belakang-kayu.jpg?s=2048x2048&w=is&k=20&c=GOimIIu26nai1g5ALNey-VLimhrWMbOaZZa78Svkoso=',
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bubur Ayam',
        price: 17000,
        description: 'Makanan khas indonesia dengan suiran ayam dan ati ampela',
        imageUrl: 'https://media.istockphoto.com/id/1448629479/id/foto/bubur-ayam-atau-bubur-nasi-indonesia-disajikan-dengan-suwiran-ayam-youtiao-dan-daun-bawang.jpg?s=2048x2048&w=is&k=20&c=6MC-FcnahudVDKvyBtD0F_4kFQ-xBYf6iZ8-FBjoPXs=',
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nasi Goreng',
        price: 13000,
        description: 'Makanan khas indonesia yang katanya paling laku se-nusantara',
        imageUrl: 'https://media.istockphoto.com/id/945606006/id/foto/nasi-goreng-ayam.jpg?s=2048x2048&w=is&k=20&c=ZN3FyXm2wd9GUZWqTYRc3avSwK8COT-Ynkrku32UkM0=',
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ayam Goreng dan Nasi Liwet',
        price: 25000,
        description: 'Makanan khas indonesia dari dataran sunda yang sangat khas oleh sambelnya',
        imageUrl: 'https://media.istockphoto.com/id/1469972381/id/foto/nasi-tutug-oncom-traditional-sundanese-meal-rice.jpg?s=2048x2048&w=is&k=20&c=_XRyEfn6k57CLUjE-E8lRJm7ynLpApZJby4a0G-nlDI=',
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bubur Kacang Ijo',
        price: 10000,
        description: 'Cemilan khas indonesia dengan cita rasa manis dipadu dengan kuah santan',
        imageUrl: 'https://media.istockphoto.com/id/1456971294/id/foto/bubur-kacang-ijo-or-mungbean-porridge.jpg?s=2048x2048&w=is&k=20&c=xrW7gBUROHLwIHO2uMXE4lwGOIrDm0Sfslqp6JsVPS0=',
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cireng rujak',
        price: 10000,
        description: 'Cemilan khas indonesia dengan bahan dasar aci yang di goreng',
        imageUrl: 'https://media.istockphoto.com/id/1407337463/id/foto/cireng-bandung-makanan-asia-dengan-piring-putih-dan-latar-belakang-daun.jpg?s=2048x2048&w=is&k=20&c=ptkPM79kKsu9YZ3fHCmzjZXaoF5ID9Oy0tkbXwu7YU4=',
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dimsum',
        price: 15000,
        description: 'Makanan khas tiongkok yang sangat viral di Indonesia',
        imageUrl: 'https://media.istockphoto.com/id/626007330/id/foto/cina-dim-sum-dalam-kotak-kukus-bambu.jpg?s=2048x2048&w=is&k=20&c=rKEUcgVa2ndHXHam2U2r8V270FweOttmOUnFnHyb64w=',
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sushi',
        price: 45000,
        description: 'Makanan khas jepang dengan ikan salmon dibalut nasi',
        imageUrl: 'https://media.istockphoto.com/id/1388044592/id/foto/vegan-sushi-sashimi-dan-maki-rolls-dengan-makanan-laut-nabati.jpg?s=2048x2048&w=is&k=20&c=Tur_Se1oHOA4TKFOtTqBBUHBG4B7hJYeXQHijGbKduY=',
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kopi',
        price: 12000,
        description: 'Minuman elegan berwarna hitam yang paling ampuh untuk menahan kantuk',
        imageUrl: 'https://media.istockphoto.com/id/1177900338/id/foto/secangkir-espresso-dengan-biji-kopi.jpg?s=2048x2048&w=is&k=20&c=Q2ZKyovy9py0SsJ7HQ64Kc1unnEO2pxezJz2ryIZrJw=',
        CategoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Es Teh Lemon',
        price: 10000,
        description: 'Minuman segar paling ideal diminum setelah makan',
        imageUrl: 'https://media.istockphoto.com/id/1204404992/id/foto/teh-es-lemon.jpg?s=2048x2048&w=is&k=20&c=nJWUsPzP7GWWmhSXoVfCbmg0rVK6oFSl5aLcNtNeNyA=',
        CategoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jus Alpukat',
        price: 13000,
        description: 'Minuman dari buah alpukat yang mengandung banyak lemak baik',
        imageUrl: 'https://media.istockphoto.com/id/511024538/id/foto/smoothie-alpukat.jpg?s=2048x2048&w=is&k=20&c=wO9cVQ3qgENcepmsAbx0W4WZyVjSQHvdEl1CTHkDtYg=',
        CategoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jus Strawberry',
        price: 13000,
        description: 'Minuman dari buah strawberry dengan warna pinknya yang khas',
        imageUrl: 'https://media.istockphoto.com/id/941442818/id/foto/smoothie-stroberi-atau-milkshake-dalam-toples-mason-dihiasi-mint-di-atas-meja-merah-muda.jpg?s=2048x2048&w=is&k=20&c=_UX9f5MLSXL-UoMnYORYDTrONEupjAyK0F9fqJ-EbXk=',
        CategoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]
    await queryInterface.bulkInsert('Products', products)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products')
  }
};
