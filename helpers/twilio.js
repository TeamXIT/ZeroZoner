// Your AccountSID and Auth Token from console.twilio.com
require("dotenv");

const accountSid=process.env.TWILIO_ACCOUNT_SID || 'AC7489c534f5a28acb4f17a77bebdaa6d3';
const authToken=process.env.TWILIO_AUTH_TOKEN || '09d0a65172a50ddf14dd5b540148f601';
const  from=process.env.TWILIO_PHONE_NUMBER || '+447893949998';

const client = require('twilio')(accountSid, authToken);

const sendMessage= async (message,to)=>{

    console.log(accountSid);
    console.log(authToken);
    console.log(from);

   await client.messages
    .create({
      body: message,
      to: to, // Text your number
      from: from, // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));

}

module.exports = sendMessage;
