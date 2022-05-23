import smtplib
import ssl
import requests
from email.mime.text import MIMEText
from email.utils import formataddr
from email.mime.multipart import MIMEMultipart  # New line
from email.mime.base import MIMEBase  # New line
from email import encoders  # New line


class Mail_Sender:
    def __init__(self, sender_email, sender_name, password):
        self.sender_email = sender_email
        self.sender_name = sender_name
        self.password = password
        self.receiver_emails = []
        self.receiver_names = []

    def get_users_data(self):
        response = requests.get("https://alzhmentor.herokuapp.com/api/users")
        users_data = response.json()

        for user in users_data:
            self.receiver_emails.append(user['email'])
            self.receiver_names.append(user['name'])

    def read_email_body_content(self, html_path):
        email_html = open(html_path, "r")
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

    email_sender = Mail_Sender(
        "alzhmentor@gmail.com", "Alzhmentor", "alzhmentor2022")
    email_sender.get_users_data()
    email_sender.read_email_body_content("src/services/email.html")
    email_sender.send_email()
