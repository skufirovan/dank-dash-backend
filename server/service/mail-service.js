const nodemailer = require('nodemailer');

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  async sendActivationMail(to, link) {
    try {
      await this.transporter.sendMail({
        from: `"Dank Dash" <${process.env.SMTP_USER}`,
        to,
        subject: 'Активация аккаунта',
        html: `
          <div>
              <h1>Для активации перейдите по ссылке</h1>
              <a href="${link}">${link}</a>
          </div>
        `,
      });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new MailService();
