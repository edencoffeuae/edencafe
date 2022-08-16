const nodemailer = require("nodemailer");

exports.order = (formMessage, items) => {
    return new Promise((resolve, reject) => {
        const arrayMessages = []
        function forLoop() {
            for (let item of items) {
                arrayMessages.push(`
                <em>name : </em><span>${item.name} </</span>
                <br />
                    <em>desc : </em><span>${item.desc} </</span>
                <br />
                    <em>price : </em><span>${item.price} </</span>
                <br />
                    <em>amount : </em><span>${item.amount} </</span>
                <br />
                <br />
                <br />
                <br /> `)
            }
        }
        forLoop()
        var messageHtml = `<div>
                <em>address : </em><span>${formMessage.address}</span>
            <br />
                <em>phone : </em><span>${formMessage.phone} </ </span>
            <br />
            <br />
            <br />
            <br />
            <br />
                <div class="order-checkout">
                    ${arrayMessages}
                </div>
            </div>
            `
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
            to: "edencoffeuae@gmail.com", // list of receivers
            subject: "Order", // Subject line
            text: `aa`,
            html: `${messageHtml}`, // html body
        })
    })
}