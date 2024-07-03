document.addEventListener("DOMContentLoaded", function() {
            const fusoForm = document.getElementById("fusoForm");

            fusoForm.addEventListener("submit", function(e) {
                e.preventDefault();
                // Send the form data to the Google Apps Script web app
                const formData = new FormData(fusoForm);
                fetch(fusoForm.action, {
                    method: 'POST',
                    body: formData,
                })
                .then(response => response.text())
                .then(responseText => {
                    console.log(responseText);
                    fusoForm.style.display = "none";
                    document.getElementById("thankYouMessage").style.display = "block";
                })
                .catch(error => console.error('Error:', error));
            });
        });
