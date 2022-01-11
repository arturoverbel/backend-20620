const mongoose = require('mongoose');
const URL_CONNECT = process.env.DB_CONNECT;
mongoose.connect(URL_CONNECT);

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));