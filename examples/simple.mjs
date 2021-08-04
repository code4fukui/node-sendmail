import { initSendmail } from "../sendmail.mjs";

const sendmail = initSendmail({ silent: true });

try {
  const res = await sendmail({
    from: 'test@yourdomain.com',
    to: 'info@yourdomain.com',
    replyTo: 'jason@yourdomain.com',
    subject: 'MailComposer sendmail',
    html: 'Mail of test sendmail '
  });
  console.log(res);
} catch (e) {
  console.log(e);
}
