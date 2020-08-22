export default (showFade) => {
  if (showFade) {
    window.addEventListener('scroll', function () {
      let mythbox = document.getElementsByClassName('myth-box_data')
      let overviewBox = document.getElementsByClassName('overview-conatiner-cards')
      let learnBox = document.getElementsByClassName('learn-box')
      const fade = (elements) => {
        if (elements) {
          for (let element of elements) {
            let position = element.getBoundingClientRect()
            if (position.top >= 0 && position.bottom <= window.innerHeight) {
              element.setAttribute('id', 'move-in-bottom')
            }
            if (position.top < window.innerHeight && position.bottom >= 0) {
            }
          }
        }
      }
      fade(mythbox)
      fade(overviewBox)
      fade(learnBox)
    })
  }
}
