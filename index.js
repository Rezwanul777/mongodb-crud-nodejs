const {MongoClient}=require('mongodb')
require('dotenv').config()

const client=new MongoClient(process.env.DATABASE)
console.log('Database connected');

module.exports={client}

// insert single data

 const insertSingleData = async()=>{
   try {
      const database = client.db("Company");
      const users= database.collection("Developers")
      const doc={
         name:'Rezwanul Haque',
         city:'Bogura',
         age:'39',
         profession:'Full Stack developer'
      }
      const result= await users.insertOne(doc)
      console.log(result);
   } catch (error) {
      console.log(error);
   } finally{
      await client.close()
   }
}

//insertSingleData()



