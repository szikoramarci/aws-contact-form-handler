import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
const ses = new SESClient({ region: "us-east-1" });

export const handler = async (event) => {
  const body = JSON.parse(event.body);
  console.log('Received data:', body);

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return {
      statusCode: 400, // Bad Request
      body: JSON.stringify({ error: 'Missing required fields: name, email, or message' }),
    };
  }

  console.log(`Processing message from ${name} (${email}): ${message}`);

  // SES parameters
  const params = {
    Source: 'hello@marcell.solutions', // A SES verified email address
    Destination: {
      ToAddresses: ['simabeats@gmail.com'], // Recipient email address
    },
    Message: {
      Subject: { Data: `New Message from ${name}` },
      Body: {
        Text: { Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` },
      },
    },
  };

  // Sending email
  const sendingResult = await ses.send(new SendEmailCommand(params));
  
  // Success response
  return {
    statusCode: 200,
    body: 'Message has been sent successfully!',
  };
};