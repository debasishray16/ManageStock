import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {

    // Replace the uri string with your connection string.
    const uri = "mongodb+srv://mongodb:gsgrBo6pI3S8QFU1@clusterexpress.6qtmddz.mongodb.net/";

    const client = new MongoClient(uri);
    try {
        const database = client.db('stock');
        const inventory = database.collection('inventory');

        const query = { };
        const allProducts = await inventory.find(query).toArray();
        return NextResponse.json({ allProducts});
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }

}


export async function POST(request) {

    //This adds the data in MongoDB.
    let body= await request.json();

    // Replace the uri string with your connection string.
    const uri = "mongodb+srv://mongodb:gsgrBo6pI3S8QFU1@clusterexpress.6qtmddz.mongodb.net/";

    const client = new MongoClient(uri);

    try {
        const database = client.db('stock');
        const inventory = database.collection('inventory');
        const product = await inventory.insertOne(body)

        return NextResponse.json({ product , ok:true });  // this returns true in console when product is added successfully.
    } finally {
        await client.close();
    }
}