from django.db import models

class Courses(models.Model):
    courseName = models.CharField(max_length=100)
    courseDesc= models.TextField()
    coursePrice = models.CharField(max_length=100)
    courseImage = models.ImageField(upload_to='pics') 
