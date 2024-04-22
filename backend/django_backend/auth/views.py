from django.shortcuts import render, redirect

# Create your views here.
from django.contrib.auth import authenticate, login, logout

def my_view(request):
	if request.method == 'POST':
		username = request.POST['username']
		password = request.POST['password']
		user = authenticate(request, username=username, password=password)
		if user is not None:
			login(request, user)
			# Redirect to a success page.
			return redirect('success_page')
		else:
			# Return an 'invalid login' error message.
			return render(request, 'login.html', {'error': 'Invalid login credentials'})
	else:
		return render(request, 'login.html')

def logout_view(request):
	logout(request)
	# Redirect to a success page.
	return redirect('success_page')
