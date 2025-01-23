import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
const ses = new SESClient({ region: "us-east-1" });

export const handler = async (event) => {
  const body = JSON.parse(event.body);
  console.log('Received data:', body);

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return {
      statusCode: 400, // Bad Request
      headers: {
        'Access-Control-Allow-Origin': '*', // CORS támogatás
      },
      body: JSON.stringify({ error: 'Missing required fields: name, email, or message' }),
    };
  }

  console.log(`Processing message from ${name} (${email}): ${message}`);

  // SES paraméterek
  const params = {
    Source: 'hello@marcell.solutions', // Az SES-ben verifikált email címed
    Destination: {
      ToAddresses: ['simabeats@gmail.com'], // Címzett email címe
    },
    Message: {
      Subject: { Data: `New Message from ${name}` },
      Body: {
        Text: { Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` },
      },
    },
  };

  // E-mail küldése
  const sendingResult = await ses.send(new SendEmailCommand(params));
  
  // Példa válasz
  return {
    statusCode: 200,
    body: 'Message has been sent successfully!',
  };
};