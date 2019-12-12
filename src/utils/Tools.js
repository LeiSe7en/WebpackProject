export default class Tools {
	static throttle (fun, delay) {
		let inThrottle
		return function () {
			if (!inThrottle) {
				fun.apply(this, arguments)
				console.log('Be involked')
				inThrottle = true
				setTimeout(() => {
					inThrottle = false
				}, delay)
			}
			
		}
	}
	static debounce (func,  delay) {
		let debounce = null
		return function () {
			if (debounce) {
				clearTimeout(debounce)
			}
			debounce = setTimeout(() => {
				func.apply(this, arguments)
			}, delay)
		}
	}
}
