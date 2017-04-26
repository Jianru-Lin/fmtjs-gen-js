window.onload = init

function init() {
	var root = document.querySelector('#output')
	var program = new genjs.Program()
	program.attach(root)
}