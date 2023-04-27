let pos = 0
const pacArray = [
  ['PacMan1.png', 'PacMan2.png'],
  ['PacMan3.png', 'PacMan4.png']
]
let pageWidth = window.innerWidth
let direction = 0
let focus = 0

function Run() {
  let img = document.getElementById('PacMan')
  let imgWidth = img.width
  focus = (focus + 1) % 2
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth)
  img.src = pacArray[direction][focus]
  if (direction) {
    pos -= 20
    img.style.left = pos + 'px'
  } else {
    pos += 20
    img.style.left = pos + 'px'
  }
  // Use setTimeout to call Run every 300 millesecs
}

// setInterval(Run, 300)

function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  //
  // Complete this to reverse direction on hitting page bounds
  //
  if (pos + imgWidth > pageWidth) {
    direction = 1
  } else if (pos < 0) {
    direction = 0
  }

  return direction
}

checkPageBounds()
