/* eslint-disable no-undef */
// import nodemailer from 'nodemailer';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.NEXT_PUBLIC_KEY_GRID);

export default async function sendEmail(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não suportado.' });
    }

    try {
        await sendgrid.send({
            from: 'Anderson <anderson@anderecc.dev.br>',
            to: `andersondbl06@gmail.com`,
            cc: 'anderson@anderecc.dev.br',
            subject: `Contato feito por '${req.body.name}' via Portfólio`,
            replyTo: req.body.email,
            text: req.body.text,
            html: `<b>Nome de quem enviou: ${req.body.name}<br/> Email de quem enviou: ${req.body.email}</br><br/> Texto de quem enviou: ${req.body.text}`,
        });

        return res.status(202).send({ data: 'success' });
    } catch (error) {
        return res.status(400).send({
            error: 'Ocorreu algum erro ao tentar enviar sua mensagem.',
        });
    }
}
