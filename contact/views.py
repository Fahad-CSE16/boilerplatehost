from rest_framework.views import APIView
from .serializers import ContactSerializer
from rest_framework.response import Response

class ContactView(APIView):
    def post(self,request,format=None):
        serializer=ContactSerializer(data=request.data)
        data={}
        if serializer.is_valid():
            serializer.save()
            data['response']="Successfully Sent"
        else:
            data=serializer.errors
        return Response(data)
