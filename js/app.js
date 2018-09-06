
// Activate scrollspy
$('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });
  
  // Slow Scroll for Navigation
  let anchorLinks = document.querySelectorAll('a[href^="#"]')
   
  for (let item of anchorLinks) { 
      item.addEventListener('click', (e)=> {
          let hashValue = item.getAttribute('href')
          let target = document.querySelector(hashValue)
          target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          })
          history.pushState(null, null, hashValue)
          e.preventDefault()
      })
  }