const plusButtons = document.getElementsByClassName("svg-plus-button")
const minusButtons = document.getElementsByClassName("svg-minus-button")
const moreInfos = document.getElementsByClassName("paragraph-items")
const faqcontainer = document.getElementById("faq")
console.log(plusButtons)

for (let i = 0; i < plusButtons.length; i++) {
    plusButtons[i].addEventListener('click', () => {
      // Toggle visibility of the corresponding paragraph item
      const moreInfo = moreInfos[i];
      const isHidden = window.getComputedStyle(moreInfo).display === "none";

      // Toggle display of the paragraph
      moreInfo.style.display = isHidden ? "block" : "none";
  
      // Adjust padding for the FAQ container
      faqcontainer.style.paddingBottom = isHidden ? "20px" : "0";

      // Toggle plus and minus button visibility
      plusButtons[i].style.display = isHidden ? "none" : "block";
      minusButtons[i].style.display = isHidden ? "block" : "none";
    });

    minusButtons[i].addEventListener("click", () => {
      const moreInfo = moreInfos[i];
  
      // Hide the paragraph item
      moreInfo.style.display = "none";
  
      // Reset FAQ padding
      faqcontainer.style.paddingBottom = "0";
  
      // Toggle visibility of plus and minus buttons
      plusButtons[i].style.display = "block";
      minusButtons[i].style.display = "none";
    });
  }

//   for (let i = 0; i < plusButtons.length; i++) {
//     plusButtons[i].addEventListener('click', () => {
//         //let buttons chnange when clicked alongside the information showing up
//     })
// }