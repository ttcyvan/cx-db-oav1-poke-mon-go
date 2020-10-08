import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import chalk from 'chalk';
dotenv.config();

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () { console.log(chalk.green('Connect db success Local db')); });

