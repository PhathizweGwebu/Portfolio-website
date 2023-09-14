




let tablinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabname) {
    for (tablink of tablinks){
        tablink.classList.remove("active-link");
    };
    for (tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    };

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
};

let sidemenu = document.getElementById('sidemenu');

function openMenu(){
    sidemenu.style.right = "0";
};

function closeMenu(){
    sidemenu.style.right = "-200px";
};

const scriptURL = 'https://script.google.com/macros/s/AKfycbyFxHUFYws84FKPYACeBZSqLuWGumq9rFrca2wHUUo8uqBrbBxfvomCTtA8nggia_I0zA/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', e =>{
    e.preventDefault();
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(()=>{window.location.reload()});
    
});