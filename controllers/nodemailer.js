const nodemailer = require("nodemailer");


exports.verify = (email,id) => {
    return new Promise((resolve,reject)=>{
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'edencoffeuae@gmail.com',
            pass: 'wntsgyyuizopidod'
        },
    });
    // send mail with defined transport object
        let info = transporter.sendMail({
            from: `edencoffeuae@gmail.com`, // sender address
            to: `${email}`, // list of receivers
            subject: "Verify Account", // Subject line
            text: ``,
            html: `<form action="https://edencafe1.com/confirm/${email}/${id}" method="post"> <input type="submit" value="Click Here To Verify Your Account"> <input type="hidden" value=${email} /><input type="hidden" value=${id} /></form>`, // html body
        })
})}