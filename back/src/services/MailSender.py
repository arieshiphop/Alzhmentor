import smtplib
import ssl
import requests
from email.mime.text import MIMEText
from email.utils import formataddr
from email.mime.multipart import MIMEMultipart  # New line
from src.config import config
import string
import random


class Mail_Sender:
    def __init__(self):
        self.sender_email = config['services']['mail']['MAIL_SENDER_EMAIL']
        self.sender_name = config['services']['mail']['MAIL_SENDER_NAME']
        self.password = config['services']['mail']['MAIL_SENDER_PASSWORD']
        self.receiver_emails = []
        self.receiver_names = []
        self.verify_code = ""

    def generate_verify_code(self):
        letters = string.digits
        self.verify_code = ''.join(random.choice(letters) for i in range(4))

    def get_users_data(self):
        response = requests.get(config['api']['API_PATH'] + '/users')
        users_data = response.json()
        for user in users_data:
            self.receiver_emails.append(user['email'])
            self.receiver_names.append(user['name'])

    def read_email_body_content(self, verify_path):
        email_html = open(verify_path, "r")
        self.email_body = email_html.read()

    def send_email(self):
        for receiver_email, receiver_name in zip(self.receiver_emails, self.receiver_names):
            print("Sending the email...")
            self.msg = MIMEMultipart()
            self.msg['To'] = formataddr((receiver_name, receiver_email))
            self.msg['From'] = formataddr(
                (self.sender_name, self.sender_email))
            self.msg['Subject'] = 'Hello, my friend ' + receiver_name
            self.msg.attach(MIMEText(self.email_body, 'html'))
            self.start_server(receiver_email)

    def start_server(self, receiver_email):
        try:
            server = smtplib.SMTP('smtp.gmail.com', 587)
            context = ssl.create_default_context()
            server.starttls(context=context)
            server.login(self.sender_email, self.password)
            server.sendmail(self.sender_email, receiver_email,
                            self.msg.as_string())
            print('Email sent!')
        except Exception as e:
            print(f'Oh no! Something bad happened!\n{e}')
        finally:
            print('Closing the server...')
            server.quit()


if __name__ == "__main__":

    email_sender = Mail_Sender()
    email_sender.email_body = "Tu código de verificación es" + email_sender.verify_code
    email_sender.generate_verify_code()
