document.addEventListener("DOMContentLoaded", function() {
    const cheryForm = document.getElementById("cheryForm");
    const paymentTypeInstallment = document.getElementById("paymentTypeInstallment");
    const bankField = document.getElementById("bankField");
    const salaryField = document.getElementById("salaryField");
    const bank = document.getElementById("bank");
    const salaryRadios = document.querySelectorAll('input[name="salary"]');
    const termsToggle = document.getElementById("termsToggle");
    const termsContentEnglish = document.getElementById("termsContentEnglish");
    const termsContentArabic = document.getElementById("termsContentArabic");

    paymentTypeInstallment.addEventListener("change", function() {
        if (paymentTypeInstallment.checked) {
            bankField.style.display = "block";
            salaryField.style.display = "block";
            bank.setAttribute("required", "required");
            salaryRadios.forEach(radio => {
                radio.setAttribute("required", "required");
            });
        } else {
            bankField.style.display = "none";
            salaryField.style.display = "none";
            bank.removeAttribute("required");
            salaryRadios.forEach(radio => {
                radio.removeAttribute("required");
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
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(responseText => {
            console.log(responseText);
            // Floodlight snippet (fires only on successful submission)
            var axel = Math.random() + "";
            var a = axel * 10000000000000;
            
          //  var iframe = document.createElement('iframe');
          //  iframe.src = 'https://14091212.fls.doubleclick.net/activityi;src=14091212;type=invmedia;cat=rm_fo0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=' + a + '?';
          //  iframe.width = '1';
          //  iframe.height = '1';
         //   iframe.frameBorder = '0';
         //   iframe.style.display = 'none';
         //   document.body.appendChild(iframe);
           
            // Create and append the script tag
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.text = `
                document.write('<img src="https://ad.doubleclick.net/ddm/activity/src=14091212;type=invmedia;cat=rm_sa0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=\${GDPR};gdpr_consent=\${GDPR_CONSENT_755};ord=' + ${a} + '?" width="1" height="1" alt=""/>');
            `;
            document.body.appendChild(script);

            // Create and append the noscript tag
            var noscript = document.createElement('noscript');
            noscript.innerHTML = '<img src="https://ad.doubleclick.net/ddm/activity/src=14091212;type=invmedia;cat=rm_sa0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1?" width="1" height="1" alt=""/>';
            document.body.appendChild(noscript);
           
            // Log DV360 tag firing
            console.log('DV360 tag has fired.');

            // Show thank you message and hide the form
            const thankYouMessage = document.getElementById("thankYouMessage");
            if (thankYouMessage) {
                thankYouMessage.style.display = "block";
            } else {
                console.error('Error: thankYouMessage element not found.');
            }
            
            cheryForm.style.display = "none";
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error conditions here
        });
    });
});
