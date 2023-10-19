from django.urls import path
from .views import send_contact_us_email_post_method, send_form_post_method

urlpatterns = [
    path('contact-us/', send_contact_us_email_post_method, name='send_contact_us_email_post_method'),
    path('vacancy/', send_form_post_method, name='send_form_post_method'),
]
