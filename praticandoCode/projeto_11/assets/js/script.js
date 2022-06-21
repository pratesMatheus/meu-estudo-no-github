function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses(){
    myBtn.classList.toggle('darkModeClass');
    myh1.classList.toggle('darkModeClass');
    body.classList.toggle('darkModeClass');
    footer.classList.toggle('darkModeClass');
}

function changeText(){
    const myLightMode = 'Light Mode';
    const myDarkMode = 'Dark Mode';

    if(body.classList.contains('darkModeClass')){
        myBtn.innerHTML = myLightMode;
        myh1.innerHTML = myDarkMode + ' ON';
        return;
    }

    myBtn.innerHTML = myDarkMode;
    myh1.innerHTML = myLightMode + ' ON';
}

const darkModeClass = 'darkMode';
const myBtn = document.getElementById('mode-selector');
const myh1 = document.getElementById('myPageTitle');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
//console.log(myBtn)
myBtn.addEventListener('click', changeMode);
