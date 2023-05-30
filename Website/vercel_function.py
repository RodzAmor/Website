# vercel_function.py

import os
from django.core.wsgi import get_wsgi_application
from django.http import HttpResponse

# Set up Django application
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Website.settings')
application = get_wsgi_application()

# Your Django view function to handle API requests
def api_handler(request):
    # Importing the API URL configuration here to ensure it's loaded properly
    from Website.urls import urlpatterns
    
    # Loop through the URL patterns to find the appropriate view for the API request
    for pattern in urlpatterns:
        if pattern.pattern.regex.match(request.path_info):
            # Call the view associated with the matching URL pattern
            response = pattern.callback(request)
            return response
    
    # Return a 404 error if no matching URL pattern is found
    return HttpResponse(status=404)

# The serverless function entry point
def main(request):
    # Route the request to the appropriate handler based on the URL path
    if request.path.startswith('/api/'):
        return api_handler(request)
    
    # Return a 404 error for any other paths
    return HttpResponse(status=404)
