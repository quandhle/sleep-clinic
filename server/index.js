const express = require('express');
const cors = require('cors');
const app = express();
const fetch = require('node-fetch');
const path = require("path");

app.use(express.static(path.join(__dirname, "/build")));
app.use(cors());
app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.put('/get-geocode', cors(), async (req, res) => {
//     const { locationString, geocode } = req.body;
//     const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${locationString}&key=${geocode}`;

//     await fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             res.send({ data });
//         })
//         .catch(err => {
//             res.redirect('/error');
//         });
// })

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/build/index.html"));
});

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
