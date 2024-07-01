// script.js
document.addEventListener('DOMContentLoaded', function() {
    const paymentTypeRadios = document.querySelectorAll('input[name="paymentType"]');
    const bankField = document.getElementById('bankField');
    const salaryField = document.getElementById('salaryField');

    paymentTypeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'Installment') {
                bankField.style.display = 'block';
                salaryField.style.display = 'block';
                document.getElementById('bank').setAttribute('required', 'required');
                document.querySelectorAll('input[name="salary"]').forEach(input => input.setAttribute('required', 'required'));
            } else {
                bankField.style.display = 'none';
                salaryField.style.display = 'none';
                document.getElementById('bank').removeAttribute('required');
                document.querySelectorAll('input[name="salary"]').forEach(input => input.removeAttribute('required'));
            }
        });
    });
});
