document.addEventListener('DOMContentLoaded', function() {
    const paymentTypeRadios = document.querySelectorAll('input[name="paymentType"]');
    const bankField = document.getElementById('bankField');
    const salaryField = document.getElementById('salaryField');
    const form = document.getElementById('yourForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

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

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect form data
        const formData = new FormData(form);

        // Post form data to Google Apps Script Web App
        fetch(form.action, {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        })
        .then(() => {
            // Hide the form
            form.style.display = 'none';

            // Show the thank you message
            thankYouMessage.style.display = 'block';
        })
        .catch(error => console.error('Error:', error));
    });
});
