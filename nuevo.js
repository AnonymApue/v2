
function cargar() {
    const id = document.getElementById("id").value;
    const monto = document.getElementById("monto").value;
    const api = "https://mailkaze-proxy.herokuapp.com/https://miadmin.cc/latina-api/v1/accounts/" + id + "/refill";

    fetch(api, {
        "headers": {
            "accept": "*/*",
            "accept-language": "es-419,es;q=0.9",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site"
        },
        "referrer": "https://exchange-market.web.app/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "OPTIONS",
        "mode": "cors",
        "credentials": "omit"
    }).then(() => {
        fetch(api, {
            "headers": {
                "accept": "*/*",
                "accept-language": "es-419,es;q=0.9",
                "auth": "157051:MTI1MTI1MTI1:44784:api:1:bvVr1At/Ujjm6SpB6u5Xr4rkVzTa2KEjT9rFn0Vg1ik",
                "content-type": "application/json",
                "sec-ch-ua": "\"Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"115\", \"Chromium\";v=\"115\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site"
            },
            "referrer": "https://exchange-market.web.app/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"amount\": " + monto + "}",
            "method": "POST",
            "mode": "cors",
            "credentials": "omit"
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                if (response.success) {
                    alert("Préstamo realizado: Bs. " + monto + " a (" + id + ").");
                    console.log('Success:', response);
                }
            });
    })
        .catch(error => {
            console.error('Error:', error);
        });
}