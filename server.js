const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const port = 3001;
const app = express();


massive('postgres://mohwntgdsttfaw:796ba6020719f57e3c368b4d3fea3f1e14874b0b21cbcd621c6b4068f8c546c0@ec2-54-225-70-53.compute-1.amazonaws.com:5432/dcunaakgued62v?ssl=true')
    .then(db => {
        app.set('db', db);
        // console.log('db', db)
    });

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
})

app.get('/api/user', (req, res) => {
    req.app.get('db').find_user().then(kang => {
    console.log('kang', kang);
        res.status(200).send(kang);
    })
    // const kang = [{ email: 'kangeb1992@gmail.com' }];
    // console.log('kang', kang);
    // res.status(200).send(kang);
})

app.listen(port, () => {
    console.log(`Listening on ${port}.`);
})