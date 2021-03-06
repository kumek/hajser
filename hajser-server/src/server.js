import express from 'express';
import bodyParser from 'body-parser';

import colors from 'colors';
import ApiRouter from 'hajser-host';

var app = express();
var port = process.env.PORT || 4200;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/app', express.static('../hajser-client/dist'));
app.use('/api', ApiRouter);
app.use('/', (req, res) => {
    res.send('Use /api URL');
});

app.listen(port);
console.log('Server has started on port ' + port);