document.addEventListener("DOMContentLoaded", () => {

    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            themeToggle.textContent = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
        });
    }


    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");

    if (form && status) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name.length < 2) {
                status.textContent = "Слишком короткое имя.";
                status.style.color = "red";
                return;
            }

            if (!email.includes("@") || email.length < 5) {
                status.textContent = "Ваш Email некорректный.";
                status.style.color = "red";
                return;
            }

            if (message.length < 10) {
                status.textContent = "Сообщение слишком короткое.";
                status.style.color = "red";
                return;
            }

            status.textContent = "Сообщение успешно доставлено.";
            status.style.color = "green";
            form.reset();
        });
    }


    const cards = document.querySelectorAll(".gallery .card");
    cards.forEach((card, i) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
            card.style.transition = "all 0.5s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, i * 150);
    });

    document.addEventListener("mouseover", (e) => {
        const card = e.target.closest(".card");
        if (card) {
            card.style.boxShadow = "0 0 15px rgba(0,0,0,0.3)";
        }
    });

    document.addEventListener("mouseout", (e) => {
        const card = e.target.closest(".card");
        if (card) {
            card.style.boxShadow = "none";
        }
    });
 });
