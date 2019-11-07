(function($) {

    $('.first.circle').circleProgress({
      value: 0.16,  fill: {gradient: ['#00ff7f', '#000000']}
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(16 * progress) + '<i>%</i>');
    });

    $('.second.circle').circleProgress({
      value: 1,  fill: {gradient: ['#00ff7f', '#000000']}
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
    });

    $('.third.circle').circleProgress({
      value: 0.24,  fill: {gradient: ['#00ff7f', '#000000']}
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(24 * progress) + '<i>%</i>');
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
  