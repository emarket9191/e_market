/* eslint-disable quotes */
const mongoose= require('mongoose')

const url = "mongodb+srv://e_market:Aa123456!@cluster0.hg5tp.mongodb.net/e_market?retryWrites=true&w=majority";
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true)
mongoose
.connect(url,{useNewUrlParser: true})
.catch(e=>{console.error('connection error',e.message)});

const db =mongoose.connection;

module.exports = db