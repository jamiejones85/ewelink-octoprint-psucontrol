require('dotenv').config()
const ewelink = require('ewelink-api');

(async () => {

const connection = new ewelink({
    email: process.env.E_WE_LINK_EMAIL,
    password: process.env.E_WE_LINK_PASSWORD,
    region: process.env.E_WE_LINK_REGION,
    });
    

  /* get specific devide info */
  const device = await connection.getDevice(process.env.E_WE_LINK_PRINTER_DEVICE_ID);

  process.exitCode = device.params.switch == 'on' ? 0 : 1 



})();