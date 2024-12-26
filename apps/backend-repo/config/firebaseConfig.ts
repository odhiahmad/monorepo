import * as admin from 'firebase-admin';

const serviceAccount = require('./serviceAccount.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://backend-repo-f4fe1.firebaseio.com'
});

export default admin;