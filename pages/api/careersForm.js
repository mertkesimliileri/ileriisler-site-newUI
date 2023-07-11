import {mailOptions, transporter} from "../../config/nodemailer";

const handler = async (req, res) => {
    if(req.method === "POST") {
        const data = req.body;

        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: "Careers Başvuru",
                text: data.fname + "-" + data.company,
                html: `
                    <ul>
                        <li>Başvurulan rol: ${data.appliedRole} </li>
                        <li>Ad Soyad: ${data.fname} </li>
                        <li>Eposta: ${data.email}</li>
                        <li>Telefon: ${data.phone}</li>
                        <li>Ünvan: ${data.title}</li>
                        <li>Şirket: ${data.company}</li>
                        <li>LinkedIn: ${data.linkedIn}</li>
                        <li>Portfolio: ${data.portfolio}</li>
                        <li>Şirket: ${data.company}</li>
                        <li>Mesaj: ${data.message}</li>
                        <li>Checkbox: ${data.confirm}</li>
                    </ul>
                `,
                attachments: [
                    {
                        filename: data.fname + "_CV",
                        path: data.cv,
                    }
                ]
            })
            return res.status(200).json({ success: true });
        } catch (error) {
            console.log(error);
        }
    }

   
}

export default handler;