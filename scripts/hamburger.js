const logo = document.querySelector('.fa-twitter');
const navBar = document.querySelector('.sidebar');
const tweetBTN = document.querySelector('.sidebar-tweet');
const feed = document.querySelector('.feed');
const widgetsBar = document.querySelector('.widgets');
const searchBar = document.querySelector('.widgets-input');

logo.addEventListener('click', ()=>{
  navBar.classList.toggle('active');
  logo.classList.toggle('active');
  tweetBTN.classList.toggle('active');
  feed.classList.toggle('active');
  widgetsBar.classList.toggle('active');
  searchBar.classList.toggle('active');
});
