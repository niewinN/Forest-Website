const hamburger = document.querySelector(".hamburger")
const navMobile = document.querySelector(".nav-mobile")
const allNavItems = document.querySelectorAll(".nav__link")
const footerYear = document.querySelector(".footer__year")
const allSections = document.querySelectorAll(".section")
const hamburgerBars = document.querySelector(".hamburger-inner")

const showNav = () => {
	hamburger.classList.toggle("is-active")
	navMobile.classList.toggle("nav-mobile--active")

	allNavItems.forEach(item => {
		item.addEventListener("click", () => {
			navMobile.classList.remove("nav-mobile--active")
			hamburger.classList.remove("is-active")
		})
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerHTML = year
}

// const handleObserver = () => {
// 	let currentSection = ''

// 	allSections.forEach(section => {
// 		const sectionTop = section.offsetTop
// 		const sectionHeight = section.clientHeight
// 		// console.log(sectionTop);
// 		console.log(window.scrollY);
//         if(window.scrollY > (sectionTop)) {
//             currentSection = section.getAttribute('id')
//         }
// 	})

//     allNavItems.forEach(li => {
//         li.classList.remove('active');
//         if(li.classList.contains(currentSection)) {
//             li.classList.add('active')
//         }
//     })
// }

const handleObserver = () => {
	const sections = []

	allSections.forEach(section => {
		if(window.scrollY <= section.offsetTop + section.offsetHeight - 94) {
			sections.push(section)
			const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)
			allNavItems.forEach(item => {
				item.classList.remove('active')
				activeSection.classList.add('active')
			})	
		}
	})
}

hamburger.addEventListener("click", showNav)
handleCurrentYear()
window.addEventListener('scroll', handleObserver)
