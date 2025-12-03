import nodemailer from "nodemailer";

export const sendEmail = async ({ to, template }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // বা অন্য SMTP
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"MiniTasin Studio" <${process.env.SMTP_USER}>`,
      to,
      subject: template.subject, // 🟢
      text: template.text,       // 🟢
      html: template.html,       // 🟢
    });

    console.log("Email sent to", to);
  } catch (err) {
    console.error("Email sending failed:", err);
  }
};

// import nodemailer from "nodemailer";

// export const sendEmail = async ({ to, subject, template }) => {
//   const testAccount = await nodemailer.createTestAccount();

//   const transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     auth: {
//       user: testAccount.user,
//       pass: testAccount.pass,
//     },
//   });

//   const info = await transporter.sendMail({
//     from: `"MiniTasin Studio" <${testAccount.user}>`,
//     to,
//     subject,
//     html: template,
//   });

//   console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
// };
