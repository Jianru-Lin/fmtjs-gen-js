export default function(selector, ctx) {
	ctx = ctx || document
	return ctx.querySelector(selector)
}