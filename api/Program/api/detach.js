export default function detach() {
	if (this.dom.parentNode) {
		this.dom.parentNode.removeChild(this.dom)
	}
}