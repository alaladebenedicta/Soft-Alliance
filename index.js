(function($) {

    $('.first.circle').circleProgress({
      value: 0.16,  fill: {gradient: ['#00ff7f', '#000000']}
    }).on('circle-animation-progress', function() {
      $(this).find('strong').html(Math.round(16) + '<i>%</i>');
    });

    $('.second.circle').circleProgress({
      value: 1,  fill: {gradient: ['#00ff7f', '#000000']}
    }).on('circle-animation-progress', function() {
      $(this).find('strong').html(Math.round(100) + '<i>%</i>');
    });

    $('.third.circle').circleProgress({
      value: 0.24,  fill: {gradient: ['#00ff7f', '#000000']}
    }).on('circle-animation-progress', function() {
      $(this).find('strong').html(Math.round(24) + '<i>%</i>');
    }); 
})(jQuery);

const scrollToTopButton = document.getElementById('js-top');
const scrollFunc = () => {
  let y = window.scrollY;
  if (y > 0) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};
window.addEventListener("scroll", scrollFunc);


const hamBurger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav ul");

hamBurger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});


function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();



