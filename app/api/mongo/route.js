import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {


    // Replace the uri string with your connection string.
    const uri = "mongodb+srv://mongodb:gsgrBo6pI3S8QFU1@clusterexpress.6qtmddz.mongodb.net/";

    const client = new MongoClient(uri);


    try {
        const database = client.db('sample_mflix');
        const movies = database.collection('movies');

        // Query for a movie that has the title 'Back to the Future'
        const query = {};
        const movie = await movies.find(query).toArray();


        console.log(movie);
        return NextResponse.json({movie});
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }

}