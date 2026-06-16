const emailInput = document.getElementById('email');
const errorElement = document.getElementById('error');
const checkButton = document.getElementById('checkButton');

const emailRegex =
    /^[A-Za-z0-9!#$%&'*+\-/=?^_`{|}~]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+$/;

checkButton.addEventListener('click', () => {
    const email = emailInput.value.trim();

    if (emailRegex.test(email)) {
        errorElement.textContent = '';
        alert('Прекрасный email-адрес');
    } else {
        errorElement.textContent = 'Введен некорректный email';
    }
});