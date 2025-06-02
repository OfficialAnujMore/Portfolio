import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
  throw new Error('EmailJS environment variables are missing. Please check your .env file.');
}

export async function sendContactEmail(name: string, email: string, message: string) {
  return emailjs.send(
    SERVICE_ID as string,
    TEMPLATE_ID as string,
    {
      from_name: name,
      from_email: email,
      message: message,
    },
    PUBLIC_KEY as string
  );
} 