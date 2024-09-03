const basic= document.getElementById("basic");
const standrad= document.getElementById("standrad");
const premium= document.getElementById("premium");


const basic_box= document.getElementById("package-box1");
const standrad_box= document.getElementById("package-box2");
const premium_box= document.getElementById("package-box3");

basic.addEventListener('click', function(){
  standrad.classList.remove("active-buttons");
  premium.classList.remove("active-buttons");
  basic.classList.add("active-buttons");


  standrad_box.classList.remove("active-box");
  premium_box.classList.remove("active-box");
  basic_box.classList.add("active-box");


})


standrad.addEventListener('click', function(){
  basic.classList.remove("active-buttons");
  premium.classList.remove("active-buttons");
  standrad.classList.add("active-buttons");


  basic_box.classList.remove("active-box");
  premium_box.classList.remove("active-box");
  standrad_box.classList.add("active-box");
})

premium.addEventListener('click', function(){
  basic.classList.remove("active-buttons");
  standrad.classList.remove("active-buttons");
  premium.classList.add("active-buttons");

  standrad_box.classList.remove("active-box");
  basic_box.classList.remove("active-box");
  premium_box.classList.add("active-box");
});


const shareBtn = document.getElementById('share-btn');

shareBtn.addEventListener('click', () => {
  navigator.share({
    title: document.title,
    url: window.location.href
  })
  .then(() => console.log('Shared successfully'))
  .catch(error => console.log('Error sharing:', error));
});
