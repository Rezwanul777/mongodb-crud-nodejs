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
         name:'Shimu',
         city:'Bogura',
         age:38,
         profession:'Python developer'
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
      // create data
      const data=[
         {name:"Rezwanul Haque" , city:"Bogura" ,age:39,profession:"Front-End Developer"},
         // {name:"Raidah" , city:"Naogoan" ,age:17,profession:"Back-End Developer"},
         {name:"Shimu" , city:"Bogura" ,age:38,profession:"DevOps Engineer"},
      ]

      const result=await users.insertMany(data)
      console.log(`${result.insertedCount} datas were inserted`);

   } catch (error) {
       console.log(error);
   }finally{
      await client.close()
   }
}

        insertManyData()

// ------------ Find single data-------------

const findSingleData=async()=>{
   try {
      const database = client.db("Company");
      const users= database.collection("Developers")
      const query={name:"Ayaan"}

      const result=await users.findOne(query)
      console.log(result);

   } catch (error) {
      console.log(error);
   }finally{
      await client.close()
   }
}

//findSingleData()

//----- findMultiple Data---------

const findMultipleData=async()=>{
   try {
      const database = client.db("Company");
      const users= database.collection("Developers")
      const query={}
      const options = {
   
         sort: { profession:1 },
         projection: { name:1},
   
       };

       const cursor=users.find(query,options)
       if((await cursor.countDocuments===0)){
         console.log('No datas are found');
       }else{
         const datas=await cursor.toArray()
         datas.forEach((data)=>{
            console.log(data);
         })
       }
   } catch (error) {
      console.log(error);
   }finally{
      await client.close()
   }
}
     //findMultipleData()

     //----// Update Single Data---------

     const singleUpdateData=async()=>{
      try {
         const database = client.db("Company");
         const users= database.collection("Developers")
         // create a filter for a user to update

    const filter = { name: "Ayaan" };
    // this option instructs the method to create a document if no documents match the filter
    const options = { upsert: true };
    const updateDoc = {
      $set: {
       name: 'Ayaan Bin Rezwan',
       age:22
      },    
    };
    const result = await users.updateOne(filter, updateDoc, options);
    console.log(
      `${result.matchedCount} datas matched the filter, updated ${result.modifiedCount} datas`,
    );
      } catch (error) {
         console.log(error);
      }finally{
         await client.close()
      }
     }

    // singleUpdateData()

    //--- Multiple datas update----------------

    const multipleUpdateData=async()=>{
      try {
         const database = client.db("Company");
         const users= database.collection("Developers")
         const filter = { };
         // update doc
         const updateDoc = {
            $set: {
           country:"Bangladesh",
      }
   }
   const result = await users.updateMany(filter, updateDoc);
   console.log(`Updated ${result.modifiedCount} documents`);

      } catch (error) {
         console.log(error);
      }finally{
         await client.close()
      }
    }

    //multipleUpdateData()

    //---- Single Delete data------

    const singleDeleteData=async()=>{
      try {
         const database = client.db("Company");
         const users= database.collection("Developers")
         const query = { name: "Shimu" };
         const result = await users.deleteOne(query);
         if(result.deletedCount===1){
            console.log('Data delete succeefully');
         }else{
            console.log('Data delete failed');
         }
      } catch (error) {
         console.log(error);
      }finally{
         await client.close();  
      }
    }

    //singleDeleteData()

    //----- Delete Multiple Data----------

    const deleteMultipleData=async()=>{
      try {
         const database = client.db("Company");
         const users= database.collection("Developers")
         const query = {city:"Bogura" };
         const result = await users.deleteMany(query);
         console.log("Deleted " + result.deletedCount + " datas");
     
       } catch (error) {
         console.log(error);
      }
       finally {
        await client.close();
      }
  
     }
    // deleteMultipleData()




