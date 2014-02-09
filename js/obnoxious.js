startTimer()

function startTimer(){
	var timeoutLength = 10000
	setTimeout(function(){showPrompt()}, timeoutLength)
}

function showPrompt(){
	var prompt = buildPrompt()
	var body = document.getElementById('content')
	var overlay = document.getElementById('overlay')
	overlay.style.display = 'block'
	body.appendChild(prompt)
}

function buildPrompt(){
	var prompt = document.createElement('div')
	prompt.id = 'container'
	prompt.className = 'prompt'

	var promptTxt = document.createElement('p')
	promptTxt.innerHTML = "Do you want to continue your session?"

	var leave = document.createElement('div')
	leave.className = 'leaveBtn btn'
	leave.innerHTML = 'Leave'
	leave.onclick = function(){handleResult(false)}

	var stay = document.createElement('div')
	stay.className = 'stayBtn btn'
	stay.innerHTML = 'Stay'
	stay.onclick = function(){handleResult(true)}

	prompt.appendChild(promptTxt)
	prompt.appendChild(leave)
	prompt.appendChild(stay)

	return prompt
}

function handleResult(stay){
	if(stay){
		prompt = document.getElementById('container')
		prompt.parentNode.removeChild(prompt)
		var overlay = document.getElementById('overlay')
		overlay.style.display = 'none'
		
		startTimer()
	}
	else{
		window.location='http://www.google.com'
	}
}