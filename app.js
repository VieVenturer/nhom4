window.addEventListener("load", function () {
  const toggle = document.querySelector(".toggle");
  const menu = document.querySelector(".menu");
  toggle && toggle.addEventListener("click", handleToggleMenu);
  function handleToggleMenu(e) {
    menu && menu.classList.add("is-show");
  }
  document.addEventListener("click", handleClickOutside);
  function handleClickOutside(e) {
    if (e.target.matches(".toggle") || e.target.matches(".menu, .menu *"))
      return;
    menu && menu.classList.remove("is-show");
  }
});
function mauvhu(obj) {
  $('.section_danhmuc_khoahoc ul li').removeClass('mauvhu');
  $(obj).addClass('mauvhu');
  var id = $(obj).attr('data-viets');
  $('.viets-content').removeClass('mauvhu');
  $(id).addClass('mauvhu');
}

$(document).ready(function () {
  $('.section_danhmuc_khoahoc ul li').click(function () {
    mauvhu(this);
    return true;
  });
});

var hasAnimated = false;

function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
  const startTime = performance.now()
  function updateNumber(currentTime) {
    const elapsedTime = currentTime - startTime
    if (elapsedTime > duration) {
      callback(finalNumber)
    } else {
      const rate = elapsedTime / duration
      const currentNumber = Math.round(rate * finalNumber)
      callback(currentNumber)
      requestAnimationFrame(updateNumber)
    }
  }
  requestAnimationFrame(updateNumber)
}

function handleScroll() {
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  var scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

  if (scrollPosition > (0.85 * windowHeight) && !hasAnimated) {
    hasAnimated = true;

    animateNumber(18027, 3000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('transaction-count').innerText = formattedNumber
    })

    animateNumber(46, 3000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('city-count').innerText = formattedNumber
    })

    animateNumber(300, 3000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('customer-count').innerText = formattedNumber
    })

    window.removeEventListener('scroll', handleScroll);
  }
}
window.addEventListener('scroll', handleScroll);
