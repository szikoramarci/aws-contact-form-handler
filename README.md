# AWS Contact Form Handler

This project is an AWS Lambda function designed to handle contact form submissions. It integrates with AWS Simple Email Service (SES) to forward submitted form data as an email to a specified recipient. The Lambda function is triggered via an API Gateway, making it a lightweight and efficient solution for serverless email forwarding.

The handler processes form data, validates it, and formats the email before sending it via SES. It’s designed to be easily customizable and scalable, making it a reliable choice for handling contact forms in web applications.

## Features

- **Serverless**: Deployed as an AWS Lambda function for minimal infrastructure management.
- **Email Forwarding**: Uses AWS SES to send emails based on the contact form submissions.
- **API Gateway Integration**: Accepts HTTP POST requests for seamless integration with web applications.

## Prerequisites

- AWS account with SES setup and a verified sender email address.
- API Gateway configured to trigger the Lambda function.
