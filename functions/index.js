const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51DxJB6LV0gh1CEy5ea74obyVabotJAXuHKvwhGoqEkQtnj5GqyrU9gWpqJpsa1L8sLUMgKS0p2FbGzBqk0CyXrlY00rvnpfIfa");



//API


//API config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('payment request recieved boom!!', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of currency
        currency: "usd",
    });

    //ok - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})


//Listen commands
exports.api = functions.https.onRequest(app)


//example endpoint
//(http://localhost:5001/clone-a5a1c/us-central1/api)