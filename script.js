const buttons = document.querySelectorAll('.yesButton');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('Yes button clicked');
    });
});
