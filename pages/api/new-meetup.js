import { MongoClient } from "mongodb";

// /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req);
    const data = req.body;
    const { title, image, address, description } = data;
    const client = await MongoClient.connect(
      "mongodb+srv://Mangu123:Mangu123@cluster0.68wz6.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetUpCollection = db.collection("meetups");
    const result = await meetUpCollection.insertOne(data);
    console.log(result);
    client.close();
    debugger;
    res.status(201).json({ message: "meetup insterted!" });
  }
}

export default handler;
