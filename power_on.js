require('dotenv').config()
const ewelink = require('ewelink-api');

(async () => {

const connection = new ewelink({
    email: process.env.E_WE_LINK_EMAIL,
    password: process.env.E_WE_LINK_PASSWORD,
    region: process.env.E_WE_LINK_REGION,
    });
    

  /* get specific devide info */
  const status = await connection.setDevicePowerState(process.env.E_WE_LINK_PRINTER_DEVICE_ID, 'on');
  process.exitCode = status.state == 'on' ? 0 : 1 



})();