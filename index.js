const {MongoClient}=require('mongodb')
require('dotenv').config()

const client=new MongoClient(process.env.DATABASE)
console.log('Database connected');

module.exports={client}