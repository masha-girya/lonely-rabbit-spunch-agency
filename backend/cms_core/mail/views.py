from rest_framework.decorators import api_view
from django.template.loader import get_template
from django.core.mail import EmailMultiAlternatives
from rest_framework.response import Response
from rest_framework import status


@api_view(['POST'])
def send_contact_us_email_post_method(request):
    email = request.data['email']
    full_name = request.data['full_name']
    plaintext = get_template('contact_us/index.txt')
    htmly = get_template('contact_us/index.html')
    d = {
        'full_name': full_name,
        'email': email
    }
    subject, from_email, to = 'Lonely Rabbit | Contact Us', 'no-reply@lonely-rabbit.com', 'support@lonely-rabbit.com'
    text_content = plaintext.render(d)
    html_content = htmly.render(d)
    msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
    msg.attach_alternative(html_content, "text/html")
    msg.send(fail_silently=False)
    return Response({"data": "ok"}, status.HTTP_200_OK)


@api_view(['POST'])
def send_form_post_method(request):
    email = request.data['email']
    full_name = request.data['full_name']
    cover_letter = request.data['cover_letter']
    vacancy_page = request.data['vacancy_page']
    plaintext = get_template('vacancy/index.txt')
    htmly = get_template('vacancy/index.html')
    d = {
        'full_name': full_name,
        'email': email,
        'cover_letter': cover_letter,
        'vacancy_page': vacancy_page
    }
    subject, from_email, to = 'Lonely Rabbit | Vacancy Feedback', 'no-reply@lonely-rabbit.com', 'support@lonely-rabbit.com'
    text_content = plaintext.render(d)
    html_content = htmly.render(d)
    msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
    msg.attach_alternative(html_content, "text/html")
    msg.send(fail_silently=False)
    return Response({"data": "ok"}, status.HTTP_200_OK)
