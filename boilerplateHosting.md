# Django React BoilerPlate
---
```javascript
npx create-react-app .
npm i axios
npm i js-cookie
npm i react-router-dom
npm start
npm run build
```

### Create src/env.js

```javascript
import Cookies from "js-cookie";

export const domain = "http://127.0.0.1:8000";
export const domain1=window.location.origin;

// export const domain = "";

/*
    window.localStorage.setItem('myCat', 'Tom');
    window.localStorage.removeItem('myCat');
    window.localStorage.clear();
    window.localStorage.getItem("token");
    */
const token = "";
const csrftoken = Cookies.get("csrftoken");
export const getheader = {
  Authorization: `token ${token}`,
};

export const postheader = {
  "X-CSRFToken": csrftoken,
};

export const posttokenheader = {
  Authorization: `token ${token}`,
  "X-CSRFToken": csrftoken,
};
```

# Django

---

---

```python
python -m venv venv
venv/Scripts/activate
python -m pip install --upgrade pip

pip install autopep8 django djangorestframework django-cors-headers Pillow

django-admin startproject main .
```

### Edit Django Setting.py file

```python
# Import
from pathlib import Path
import os

# INSTALLED_APPS
'rest_framework',
'rest_framework.authtoken',
'corsheaders',

# MIDDLEWARE
'corsheaders.middleware.CorsMiddleware',

 # TEMPLATES
'DIRS': [os.path.join(BASE_DIR, 'build')],

# Static files (CSS, JavaScript, Images)
STATIC_URL = '/static/'
MEDIA_URL = '/media/'
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'build/','static')]
STATIC_ROOT = os.path.join(BASE_DIR,'build/', 'staticroot/')
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')



CORS_ORIGIN_WHITELIST = (
    'http://localhost:3000',
)
CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',
]
CORS_URLS_REGEX = r'^/api.*'
```

### Edit Django urls.py file

```python
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from rest_framework.authtoken.views import obtain_auth_token
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += [
        re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
    ]

if not settings.DEBUG:
    urlpatterns += [
        re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
    ]
```

# Run Server

```
python manage.py runserver
http://127.0.0.1:8000/

```





# For Hosting on Heroku server
# First Create account on heroku then install heroku toolbelt by checking all the checkbox

$heroku --version
$pip install gunicorn django-heroku dj_database_url python-decouple
# Inside your project folder where manage.py located, open your git bash


# Create  Procfile and write
release: python manage.py migrate
web: gunicorn projectname.wsgi --log-file -
# Write these commnad 

$pip freeze > requirements.txt 




# In Settings.py starting

from pathlib import Path
import os,django_heroku,dj_database_url
from decouple import config

MIDDLEWARE = [
    'whitenoise.middleware.WhiteNoiseMiddleware',
]
STATICFILES_STORAGE='whitenoise.storage.CompressedManifestStaticFilesStorage'
# In Settings.py at last
django_heroku.settings(locals())

# To host DJango React Boilerplate
```
```

# Add to package.json
```

"engines": {
    "node":"14.13.0",
    "npm":"6.14.8"
  }
  
#to show this version 
$node -v
$npm -v

```

# Remove /build 
```

from .gitignore file remove "/build"
And add /host to .gitignore
```

# Delete yarn.lock 
```

$npm run build

```
# On git bash 
```


```

# open git bash on this folder and firstly init in on git

$git add .
$git commit -m ""
$git push -u origin master
$heroku login 
//then cntr+c 
$heroku keys:add 
//then cntl+c
$heroku create
$heroku rename newname

$heroku buildpacks:set heroku/python
$heroku buildpacks:add --index 1 heroku/nodejs
$git push heroku master
$heroku run python manage.py createsuperuser

# DOne Hosting

