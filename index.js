const {MongoClient}=require('mongodb')
require('dotenv').config()

// database connected
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

//---------------------------------------------//
// insert Multiple data

const insertManyData=async()=>{
   try {
      const database = client.db("Company");
      const users= database.collection("Developers") 
      // create doc
      const data=[
         {name:"Ayaan" , city:"Dhaka" ,age:12,profession:"Front-End Developer"},
         {name:"Raidah" , city:"Naogoan" ,age:17,profession:"Back-End Developer"},
         {name:"Shimu" , city:"Rajshahi" ,age:38,profession:"DevOps Engineer"},
      ]

      const result=await users.insertMany(data)
      console.log(`${result.insertedCount} datas were inserted`);

   } catch (error) {
       console.log(error);
   }finally{
      await client.close()
   }
}

       //insertManyData()



