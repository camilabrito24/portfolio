const btnDarkMode =  document.querySelector("#btn-DarkMode");
const lightTheme = document.getElementById('light-theme');
const darkTheme = document.getElementById('dark-theme');

btnDarkMode.addEventListener('click', ()=>{

    lightTheme.disabled = !lightTheme.disabled;
    darkTheme.disabled = !darkTheme.disabled;

    if (darkTheme.disabled) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        lightTheme.disabled = true;
        darkTheme.disabled = false;
    }else{
        lightTheme.disabled = false;
        darkTheme.disabled = true;
    }
});
