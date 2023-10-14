const circle = document.createElement('div')
circle.style.transitionDuration = `0.85s`
console.log(circle.style.transitionDuration)

let troll = null
const ended = localStorage.getItem('ended')
let misses = 950

if (ended == 'true') {
	window.location.replace(window.location.href)
}

const modeEl = document.getElementById('mode')

modeEl.addEventListener('change', event => {
	const mode = event.target.value
  if (mode === 'easy') {
  	clearInterval(troll)
  	circle.style.transitionDuration = "1.5s"
  } else if (mode === 'normal') {
  	clearInterval(troll)
  	circle.style.transitionDuration = "1.15s"
  } else if (mode === 'medium') {
  	clearInterval(troll)
  	circle.style.transitionDuration = "0.85s"
  } else if (mode === 'hard') {
  	clearInterval(troll)
  	circle.style.transitionDuration = "0.65s"
  } else if (mode === 'extreme') {
  	clearInterval(troll)
  	circle.style.transitionDuration = "0.45s"
  } else if (mode === 'impossible') {
  	clearInterval(troll)
  	circle.style.transitionDuration = "0.25s"
  } else if (mode === 'fly') {
  	clearInterval(troll)
  	circle.style.transitionDuration = "0s"
  } else if (mode === 'troll') {
  	let t = 10
    troll = setInterval(function() {
    	circle.style.transitionDuration = `${t}s`
      t -= 0.05
      console.log(t)
      if (t <= 0) {
      	t = 10
      }
    }, 500)
  } else {
  	clearInterval(troll)
  	circle.style.transitionDuration = "1.15s"
  }
})

const addAlpha = (rgb, alpha) => {
  // Parse the RGB values
  const rgbIntArray = rgb.replace(/ /g, '').slice(4, -1).split(',').map(e => parseInt(e));

  // Return the new RGB color
  return `rgba(${rgbIntArray.join(', ')}, ${alpha})`;
}

const darkenColour = (rgb, factor) => {
  // Parse the RGB values
  const rgbIntArray = rgb.replace(/ /g, '').slice(4, -1).split(',').map(e => parseInt(e));

  // Calculate the new RGB values
  const newRgbIntArray = rgbIntArray.map(val => Math.round(val * (1 - factor)));

  // Return the new RGB color
  return `rgb(${newRgbIntArray.join(', ')})`;
}

const lightenColour = (rgb, factor) => {
  // Parse the RGB values
  const rgbIntArray = rgb.replace(/ /g, '').slice(4, -1).split(',').map(e => parseInt(e));

  // Calculate the lightness component
  const lightness = Math.max(...rgbIntArray) - Math.min(...rgbIntArray);

  // Calculate the new RGB values
  const newRgbIntArray = rgbIntArray.map(val => Math.round(val + (255 - val) * factor));

  // Return the new RGB color
  return `rgb(${newRgbIntArray.join(', ')})`;
}

const firstCircle = () => {
  circle.remove()
  circle.setAttribute('class', 'circle')
  document.body.appendChild(circle)

  circle.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
  circle.style.top = `${Math.floor(Math.random() * 90)}vh`
  circle.style.left = `${Math.floor(Math.random() * 90)}vw`
  circle.style.boxShadow = `0px 0px 75px 15px ${circle.style.backgroundColor}`
  circle.style.borderColor = addAlpha(lightenColour(circle.style.backgroundColor, 0.5), 0.25)
}

const newCircle = () => {
  circle.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
  circle.style.top = `${Math.floor(Math.random() * 90)}vh`
  circle.style.left = `${Math.floor(Math.random() * 90)}vw`
  circle.style.boxShadow = `0px 0px 75px 15px ${circle.style.backgroundColor}`
  circle.style.borderColor = addAlpha(lightenColour(circle.style.backgroundColor, 0.5), 0.25)
}

const clicked = () => {
	const c = document.getElementById('text')
  const m = document.getElementById('misses')
	const pts = document.getElementById('points')
  pts.textContent = Number(points.textContent) + 1
  newCircle()
  misses = 0
  m.textContent = misses
  c.textContent = 'Click the ball!'
}

const missed = () => {
	const c = document.getElementById('text')
  const m = document.getElementById('misses')
	newCircle()
  misses++
  m.textContent = misses
  if (misses >= 10 && misses < 20) {
  	c.textContent = 'Oh come on, click the ball already!'
  } else if (misses >= 20 && misses < 50) {
  	c.textContent = 'Gee, this is taking a while!'
  } else if (misses >= 50 && misses < 100) {
  	c.textContent = 'Hurry up.'
  } else if (misses >= 100 && misses < 200) {
  	c.textContent = '...'
  } else if (misses >= 200 && misses < 300) {
  	c.textContent = '300!? IN A ROW?!'
  } else if (misses >= 300 && misses < 400) {
  	c.textContent = 'You HAVE to be doing this on purpose.'
  } else if (misses >= 400 && misses < 500) {
  	c.textContent = 'OH MY GOD JUST HURRY UP I DONT HAVE ALL DAY'
  } else if (misses >= 500 && misses < 600) {
  	c.textContent = 'OH MY GOD IF YOU DONT CLICK IT I WILL RELOAD THE GAME SO CLICK THE BALL'
  } else if (misses >= 600 && misses < 700) {
  	c.textContent = 'CLICK THE GODDAMN BALL FOR REAL I AM ABOUT TO DO SOME MAGIC JAVASCRIPT STUFF AND RELOAD YOU INTO OBLIVION'
  } else if (misses >= 700 && misses < 800) {
  	c.textContent = 'Keep going!'
  } else if (misses >= 800 && misses < 900) {
  	c.textContent = 'You can do it!'
  } else if (misses >= 900 && misses < 950) {
  	c.textContent = 'Not even 100 away!'
  } else if (misses >= 950 && misses < 999) {
  	c.textContent = 'Nearly there!'
  } else if (misses === 999) {
  	c.textContent = 'You have made it all the way to 999 misses. A long mission finally over.'
  } else if (misses >= 1000) {
  	c.textContent = 'Goodbye. Forever.'
    localStorage.setItem('ended', true)
    setTimeout(window.location.replace(window.location.href), 3000)
  }
}

firstCircle()
circle.addEventListener('mouseenter', missed)
circle.addEventListener('click', clicked)
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});
