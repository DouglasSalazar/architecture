var nodemailer = require('nodemailer');
const accountEmail = require('../../config/accountEmail');

class Email {

    constructor (to, subject, text){
        this.transporter = nodemailer.createTransport(accountEmail,);
        this.emailContent = {"from" : accountEmail.auth.user,
                             "to" : to,
                             "subject" : subject,
                             "text" : text
                            };
    }

    async sendEmail() {
        try {
            return await this.transporter.sendMail(this.emailContent, function(error) {
                    if (error) {
                        return {error : 'Failed to send email!'};
                    } else {
                        return {success : 'Email successfully sent!'}; 
                    }
                });  
        } catch (err) {
            console.log(err);
            return {error : 'Auth07: Failed to send email!'};
        }
    }


}

module.exports = Email;