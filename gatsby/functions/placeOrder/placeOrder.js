const nodemailer = require('nodemailer');

// create a transport for nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.handler = async (event, context) => {
  // test send an email
  const info = await transporter.sendMail({
    from: 'slicks slices <slick@example.com>',
    to: 'orders@example.com',
    subject: 'new order',
    html: `<p>your new pizza order is here</>`,
  });

  console.log(info);
  return {
    statusCode: 200,
    body: JSON.stringify(info),
  };
};
