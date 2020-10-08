const mongoose = require('mongoose');
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true,});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log('Connect db success Local db');});