const circle = document.createElement('div')

const firstCircle = () => {
	circle.remove()
	circle.setAttribute('class', 'circle')
	document.body.appendChild(circle)

	circle.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
  circle.style.top = `${Math.floor(Math.random() * 90)}vh`
  circle.style.left = `${Math.floor(Math.random() * 90)}vw`
}

const newCircle = () => {
	circle.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
  circle.style.top = `${Math.floor(Math.random() * 90)}vh`
  circle.style.left = `${Math.floor(Math.random() * 90)}vw`
}

firstCircle()
circle.addEventListener('mouseenter', newCircle)
circle.addEventListener('click', () => {
	const pts = document.getElementById('points')
	pts.textContent = Number(points.textContent) + 1
})
