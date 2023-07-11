import {mailOptions, transporter} from "../../config/nodemailer";

const handler = async (req, res) => {
    if(req.method === "POST") {
        const data = req.body;

        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: "Proje Talebi",
                text: data.fname + "-" + data.company,
                html: `
                    <ul>
                        <li>Ad: ${data.fname} </li>
                        <li>Soyad: ${data.lname}</li>
                        <li>Eposta: ${data.email}</li>
                        <li>Telefon: ${data.phone}</li>
                        <li>Ünvan: ${data.title}</li>
                        <li>Şirket: ${data.company}</li>
                        <li>Proje Tercihi: ${data.firstSelection}</li>
                        <li>Proje Durumu: ${data.secondSelection}</li>
                    </ul>
                `
            })
            return res.status(200).json({ success: true });
        } catch (error) {
            console.log(error);
        }
    }

   
}

export default handler;