import attach from './api/attach.js'
import detach from './api/detach.js'

function Program() {
	this.dom = document.createElement('div')
	this.dom.setAttribute('class', 'Program')
}

Program.prototype.attach = attach
Program.prototype.detach = detach

export default Program