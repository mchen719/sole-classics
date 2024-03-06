require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Home', sortOrder: 10},
    {name: 'Jordans', sortOrder: 20},
    {name: 'Yeezys', sortOrder: 30},
    {name: 'Nike', sortOrder: 40},
    {name: 'New Balance', sortOrder: 50},
    {name: 'Adidas', sortOrder: 60},
    {name: 'Grails', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Nike Yeezy Red October', emoji: '/images/grails/redoctober.jpg', category: categories[0], price: 14950},
    {name: 'Jordan 3 Musilin', emoji: '/images/jordans/musilin.jpg', category: categories[0], price: 209},
    {name: 'Nike Dunk Low Panda', emoji: '/images/nike/panda.jpg', category: categories[0], price: 110},
    {name: 'Jordan 1 Chicago', emoji: '/images/jordans/chicago.jpg', category: categories[1], price: 495},
    {name: 'Jordan 3 Musilin', emoji: '/images/jordans/musilin.jpg', category: categories[1], price: 209},
    {name: 'Jordan 4 Black Cement', emoji: '/images/jordans/cement.jpg', category: categories[1], price: 495},
    {name: 'Yeezy 350 V2 Carbon', emoji: '/images/yeezys/carbon.jpg', category: categories[2], price: 345},
    {name: 'Yeezy 350 V2 Friday', emoji: '/images/yeezys/blackfriday.jpg', category: categories[2], price: 580},
    {name: 'Yeezy 350 V2 Cream', emoji: '/images/yeezys/cream.jpg', category: categories[2], price: 395},
    {name: 'Nike Dunk Low Coconut Milk', emoji: '/images/nike/coconut.jpg', category: categories[3], price: 116},
    {name: 'Nike Dunk Low Panda', emoji: '/images/nike/panda.jpg', category: categories[3], price: 110},
    {name: 'Nike Kobe 6 Concord', emoji: '/images/nike/concord.jpg', category: categories[3], price: 1333},
    {name: 'Nike Kobe 6 Grinch', emoji: '/images/nike/grinch.jpg', category: categories[3], price: 875},
    {name: 'New Balance 550 White/Grey', emoji: '/images/newbalance/whitegrey.jpg', category: categories[4], price: 110},
    {name: 'New Balance 550 Nightwatch', emoji: '/images/newbalance/nightwatch.jpg', category: categories[4], price: 120},
    {name: 'New Balance 550 Timberwolf', emoji: '/images/newbalance/timberwolf.jpg', category: categories[4], price: 105},
    {name: 'Adidas Samba Almost Blue', emoji: '/images/adidas/almostblue.jpg', category: categories[5], price: 186},
    {name: 'Adidas Samba Bliss Orange', emoji: '/images/adidas/blissorange.jpg', category: categories[5], price: 169},
    {name: 'Jordan 1 Fragment High', emoji: '/images/grails/fragment.jpg', category: categories[6], price: 1370},
    {name: 'Off-White Chicago 1', emoji: '/images/grails/offwhite.jpg', category: categories[6], price: 4959},
    {name: 'Nike Yeezy Red October', emoji: '/images/grails/redoctober.jpg', category: categories[6], price: 14950},
  ]);

  console.log(items)

  process.exit();

})();