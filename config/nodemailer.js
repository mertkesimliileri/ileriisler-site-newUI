import nodemailer from "nodemailer";

const email = "ileri.emailer@gmail.com";
const pass = "dufgqluuefufbetp";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: "iletisim@ileriisler.com",
};