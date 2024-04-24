import { MongoClient } from "mongodb";

export async function connectDatabase() {
  // mongodb+srv://jrobles0717:<password>@cluster0.lmr5pws.mongodb.net/
  const client = await MongoClient.connect(
    "mongodb+srv://jrobles0717:un1rjyQkzUWs7nCc@cluster0.lmr5pws.mongodb.net/events?"
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort, filter = {}) {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();

  return documents;
}
