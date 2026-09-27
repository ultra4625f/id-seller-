// Smooth scrolling for website links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Simple image click effect

const photos = document.querySelectorAll(".photo img");

photos.forEach(photo => {

    photo.addEventListener("click", function () {

        const imageWindow = window.open();

        imageWindow.document.write(`
            <html>
            <head>
                <title>Instagram Preview</title>
                <style>
                    body {
                        margin:0;
                        background:#000;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        min-height:100vh;
                    }

                    img {
                        max-width:95%;
                        max-height:95vh;
                        object-fit:contain;
                    }
                </style>
            </head>

            <body>
                <img src="${this.src}">
            </body>
            </html>
        `);

    });

});