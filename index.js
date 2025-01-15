const plusButtons = document.getElementsByClassName("svg-plus-button")
const moreInfos = document.getElementsByClassName("paragraph-items")
console.log(plusButtons)

for (let i = 0; i < plusButtons.length; i++) {
    plusButtons[i].addEventListener('click', () => {
      // Toggle visibility of the corresponding paragraph item
      const moreInfo = moreInfos[i];
      if (moreInfo.style.display === 'none' || !moreInfo.style.display) {
        moreInfo.style.display = 'block';
      } else {
        moreInfo.style.display = 'none';
      }
    });
  }

  for (let i = 0; i < plusButtons.length; i++) {
    plusButtons[i].addEventListener('click', () => {
        //let buttons chnange when clicked alongside the information showing up
    })
}