document.addEventListener('scroll', function () {
  var scrollTop = document.body.scrollTop;
  if (scrollTop > 200) {
    document.getElementById('header').classList.add('active')
  } else {
    document.getElementById('header').classList.remove('active')
  }
});

document.getElementById('hamburger').addEventListener('click', function () {
  if (document.getElementById('header').classList.contains('open')) {
    document.getElementById('header').classList.remove('open');
    return;
  }
  document.getElementById('header').classList.add('open');
});