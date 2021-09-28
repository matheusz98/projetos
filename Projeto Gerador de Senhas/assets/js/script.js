const passwordEl = document.querySelector('#password');
const copyEl = document.querySelector('#copy');
const lengthEl = document.querySelector('#length');
const uppercaseEl = document.querySelector('#uppercase');
const lowercaseEl = document.querySelector('#lowercase');
const numberEl = document.querySelector('#number');
const specialEl = document.querySelector('#special');
const generateBtn = document.querySelector('#generate');

const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specials = '!@#$%¨&*()_+*¬¢£';

function generateUpperCase() {
    return upper[Math.floor(Math.random() * lower.length)];
}

function generateLowerCase() {
    return lower[Math.floor(Math.random() * lower.length)];
}

function generateNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function generateSpecials() {
    return specials[Math.floor(Math.random() * specials.length)];
}

function generatePassword() {
    const length = lengthEl.value;

    let password = '';

    if (uppercaseEl.checked) password += generateUpperCase();

    if (lowercaseEl.checked) password += generateLowerCase();

    if (numberEl.checked) password += generateNumbers();

    if (specialEl.checked) password += generateSpecials();

    for (let i = password.length; i < length; i++) {
        const digit = generateDigit();
        password += digit;
    }

    passwordEl.innerHTML = password;    
}

function generateDigit() {
    const digits = [];

    if (uppercaseEl.checked) digits.push(generateUpperCase());

    if (lowercaseEl.checked) digits.push(generateLowerCase());

    if (numberEl.checked) digits.push(generateNumbers());

    if (specialEl.checked) digits.push(generateSpecials());

    if (digits.length === 0) return '';

    return digits[Math.floor(Math.random() * digits.length)];
}

generateBtn.addEventListener('click', generatePassword);

copyEl.addEventListener('click', () => {
    const txtArea = document.createElement('textarea');
    const password = passwordEl.innerHTML;

    if (!password) return;

    txtArea.value = password;
    document.body.appendChild(txtArea);
    txtArea.select();
    document.execCommand('copy');
    txtArea.remove();
    alert('Senha copiada com sucesso!');
});