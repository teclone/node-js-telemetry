import mongoose from 'mongoose';

import { app } from './app';
import { FALLBACK_DB_CONNECTION_URI, FALLBACK_PORT } from './constants';

/**
 * this method connects to mongodb database
 * @returns
 */
export const connect = function () {
  return new Promise((resolve) => {
    // @ts-ignore
    mongoose.connect(
      process.env.DB_CONNECTION_URI || FALLBACK_DB_CONNECTION_URI,
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        autoIndex: false,
        useUnifiedTopology: true,
      }
    );
    mongoose.connection.once('open', function () {
      resolve(true);
    });
  });
};

/**
 * this method disconnects from mongodb
 * @returns
 */
export const disconnect = function () {
  return new Promise((resolve) => {
    mongoose.connection.close(function () {
      resolve(true);
    });
  });
};

/**
 * this method starts the application
 * @returns
 */
export const start = function (callback: () => void) {
  return app.listen(parseInt(process.env.PORT || FALLBACK_PORT), () => {
    console.log('started application');
  });
};
