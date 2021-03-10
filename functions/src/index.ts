import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as cors from "cors";

// eslint-disable-next-line max-len
const serviceAccount = require("/Users/gomez/Downloads/name-of-json-file-on-your-hard-drive");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://angular-blog-14cef.firebaseio.com"});

const app = express();
app.use(cors());

// get value corresponding to key supplied
app.get("/database_ref", (request, response) => {
  const db = admin.database();
  const ref = db.ref("database_ref");
  ref.once("value").then((value) => {
    response.send(value);
  })
      .catch((err) => console.error(err));
});

export const api = functions.https.onRequest(app);
