const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
console.log(dbUsername , dbPassword);
const url = "mongodb+srv://" + dbUsername + ":" + dbPassword + "@cluster0.1mojv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; 

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
    let cigare = ['ronhil','malboro','drina']
    console.log(cigare[2])

    for(let i=0; i < cigare.length; i++){
        console.log(cigare[i]);
    }
}
run().catch(console.dir);
