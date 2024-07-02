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
        .then(response => {
            if (response.ok) {
                // Hide the form
                form.style.display = 'none';

                // Show the thank you message
                thankYouMessage.style.display = 'block';

                // Fire the DV360 floodlight tag
                var axel = Math.random() + "";
                var a = axel * 10000000000000;
                var iframe = document.createElement('iframe');
                iframe.src = `https://14091212.fls.doubleclick.net/activityi;src=14091212;type=invmedia;cat=rm_fo0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=${a}?`;
                iframe.width = "1";
                iframe.height = "1";
                iframe.frameborder = "0";
                iframe.style.display = "none";
                document.body.appendChild(iframe);
            } else {
                console.error('Error: Form submission failed');
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
