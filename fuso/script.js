document.addEventListener("DOMContentLoaded", function() {
            const cheryForm = document.getElementById("cheryForm");

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
