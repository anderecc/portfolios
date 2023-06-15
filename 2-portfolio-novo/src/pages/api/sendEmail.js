/* eslint-disable no-undef */
import nodemailer from 'nodemailer';

export default function sendEmail(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não suportado.' });
    }

    let transporter = nodemailer.createTransport({
        host: 'smtp.umbler.com',
        auth: {
            port: 587,
            user: process.env.NEXT_PUBLIC_USER_MAIL,
            pass: process.env.NEXT_PUBLIC_PASS_MAIL,
        },
    });

    transporter
        .sendMail({
            from: `"${req.body.name}" <${process.env.NEXT_PUBLIC_USER_MAIL}>`, // sender address
            to: process.env.NEXT_PUBLIC_USER_MAIL + ', andersondbl06@gmail.com', // list of receivers
            replyTo: req.body.email,
            subject: `Contato feito por '${req.body.name}' via Portfólio`, // Subject line
            text: req.body.text, // plain text body
            html: `<b>Nome de quem enviou: ${req.body.name}<br/> Email de quem enviou: ${req.body.email}</br><br/> Texto de quem enviou: ${req.body.text}`, // html body
        })
        .then((response) => {
            res.status(200).send(response.data);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
}
