const tombolRegister = document.querySelector('.register-button');

tombolRegister.addEventListener('click', function() {
    tombolRegister.innerText = "Terdaftar!";
    tombolRegister.style.backgroundColor = "#263238";
    
    alert("Pendaftaran Berhasil");
});

// ----------------------

// hamburger button
const tombolHamburger = document.querySelector('.hamburger-btn');
const menuNav = document.querySelector('.nav');

tombolHamburger.addEventListener('click',function (){
    menuNav.classList.toggle('active');
});