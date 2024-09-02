document.addEventListener("DOMContentLoaded", function() {
            const sanabelForm = document.getElementById("sanabelForm");

            sanabelForm.addEventListener("submit", function(e) {
                e.preventDefault();
                // Send the form data to the Google Apps Script web app
                const formData = new FormData(sanabelForm);
                fetch(sanabelForm.action, {
                    method: 'POST',
                    body: formData,
                })
                .then(response => response.text())
                .then(responseText => {
                    console.log(responseText);
                    sanabelForm.style.display = "none";
                    document.getElementById("thankYouMessage").style.display = "block";
                })
                .catch(error => console.error('Error:', error));
            });
        });
