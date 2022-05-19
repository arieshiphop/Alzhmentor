import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage


def send_email(temperature):
    port = 465
    password = "arieshh19692004"

    sender_email = "ikersanchez.contacto@gmail.com"
    receiver_email = "attesores@gmail.com"
    message = MIMEText(
        "Alzhmentor está en pleno auge y necesitamos tu apoyo. Registrate en https://alzhmentor.tk para recibir una oferta promocional" + "\n" + "")
    message['Subject'] = "Hola JORESSATE, somos de alzhmentor"
    message['From'] = sender_email
    message['To'] = receiver_email

    server = smtplib.SMTP_SSL("smtp.gmail.com", port)
    server.login(sender_email, password)
    server.sendmail(sender_email, [receiver_email], message.as_string())
    server.quit()


if __name__ == "__main__":
    send_email(7.7)
