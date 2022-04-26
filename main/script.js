

const nav = document.querySelector(".navigation");
const navText = document.querySelectorAll("#navText")

console.log(nav.className)
let observer = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].isIntersecting === false)
		console.log(nav.className)
		nav.classList.toggle("navigationBlanc");
}, { threshold: [0] });

observer.observe(document.querySelector("#main-container"));

