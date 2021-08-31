import express from 'express';
import { Telematic } from './models';
import bodyParser from 'body-parser';

export const app = express();

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.post('/telemetry', (req, res) => {
  const telematicInstance = new Telematic(req.body);

  telematicInstance
    .save()
    .then(() => {
      res.json({
        status: '',
        data: {},
      });
    })
    .catch((ex) => {
      res.json({});
    })
    .finally(() => {
      res.end();
    });
});
