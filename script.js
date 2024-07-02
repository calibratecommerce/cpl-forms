document.addEventListener("DOMContentLoaded", function() {
            const cheryForm = document.getElementById("cheryForm");
            const paymentTypeInstallment = document.getElementById("paymentTypeInstallment");
            const bankField = document.getElementById("bankField");
            const salaryField = document.getElementById("salaryField");
            const bank = document.getElementById("bank");
            const salaryRadios = document.querySelectorAll('input[name="salary"]');

            paymentTypeInstallment.addEventListener("change", function() {
                if (paymentTypeInstallment.checked) {
                    bankField.style.display = "block";
                    salaryField.style.display = "block";
                    bank.setAttribute("required", "required");
                    salaryRadios.forEach(radio => {
                        radio.setAttribute("required", "required");
                    });
                }
            });

            const paymentTypeCash = document.getElementById("paymentTypeCash");
            paymentTypeCash.addEventListener("change", function() {
                if (paymentTypeCash.checked) {
                    bankField.style.display = "none";
                    salaryField.style.display = "none";
                    bank.removeAttribute("required");
                    salaryRadios.forEach(radio => {
                        radio.removeAttribute("required");
                    });
                }
            });

            const termsToggle = document.getElementById("termsToggle");
            const termsContentEnglish = document.getElementById("termsContentEnglish");
            const termsContentArabic = document.getElementById("termsContentArabic");

            termsToggle.addEventListener("click", function(e) {
                e.preventDefault();
                if (termsContentEnglish.style.display === "none") {
                    termsContentEnglish.style.display = "block";
                    termsContentArabic.style.display = "block";
                } else {
                    termsContentEnglish.style.display = "none";
                    termsContentArabic.style.display = "none";
                }
            });

            cheryForm.addEventListener("submit", function(e) {
                e.preventDefault();
                // Send the form data to the Google Apps Script web app
                const formData = new FormData(cheryForm);
                fetch(cheryForm.action, {
                    method: 'POST',
                    body: formData,
                })
                .then(response => response.text())
                .then(responseText => {
                    console.log(responseText);
                    cheryForm.style.display = "none";
                    document.getElementById("thankYouMessage").style.display = "block";
                })
                .catch(error => console.error('Error:', error));
            });
        });
