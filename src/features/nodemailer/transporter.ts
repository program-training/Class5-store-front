import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "fastmail",
  auth: {
    user: "asafaiperets@fastmail.com",
    pass: "Aa123456789@",
  },
});
