document.getElementById("open").addEventListener("click", function() {
    document.getElementById("sidebar").classList.add("active");
});

document.getElementById("close").addEventListener("click", function() {
    document.getElementById("sidebar").classList.remove("active");
});


const navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            navbarLinks.forEach(link => {
                link.classList.remove('active');
            });

            this.classList.add('active');

            const href = this.getAttribute('href');

            window.location.href = href;
        });
    });





    document.addEventListener("DOMContentLoaded", function () {
        const seeAllButton = document.getElementById("seeAllButton");
        const backButton = document.getElementById("backButton");
        const profiles = document.querySelectorAll(".peoples-profile");
        const hiddenProfiles = Array.from(profiles).slice(3);

        seeAllButton.addEventListener("click", function () {
            hiddenProfiles.forEach(profile => {
                profile.style.display = "flex";
            });
            seeAllButton.style.display = "none";
            backButton.style.display = "flex";
        });

        backButton.addEventListener("click", function () {
            hiddenProfiles.forEach(profile => {
                profile.style.display = "none";
            });
            seeAllButton.style.display = "flex";
            backButton.style.display = "none";
        });
    });
    






    const imageLinks = document.querySelectorAll('.image-link');

    imageLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const imageSrc = this.getAttribute('href');

            const overlay = document.createElement('div');
            overlay.className = 'full-screen-overlay';
            
            const image = document.createElement('img');
            image.className = 'full-screen-image';
            image.src = imageSrc;

            overlay.appendChild(image);
            document.body.appendChild(overlay);

            overlay.addEventListener('click', function () {
                document.body.removeChild(overlay);
            });
        });
    });
