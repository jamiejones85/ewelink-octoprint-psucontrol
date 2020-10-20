require('dotenv').config()
const ewelink = require('ewelink-api');

(async () => {

  const connection = new ewelink({
    email: process.env.E_WE_LINK_EMAIL,
    password: process.env.E_WE_LINK_PASSWORD,
    region: process.env.E_WE_LINK_REGION,
  });

  /* get all devices */
  const devices = await connection.getDevices();
  console.log(devices);

})();