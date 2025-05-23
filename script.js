document.addEventListener("DOMContentLoaded", () => {
    let e = document.getElementById("themeToggle");
    e && e.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme"), e.textContent = document.body.classList.contains("dark-theme") ? "☀️" : "\uD83C\uDF19"
    });
    let t = document.getElementById("contactForm"),
        l = document.getElementById("formStatus");
    t && l && t.addEventListener("submit", function(e) {
        e.preventDefault();
        let n = document.getElementById("name").value.trim(),
            r = document.getElementById("email").value.trim(),
            a = document.getElementById("message").value.trim();
        if (n.length < 2) {
            l.textContent = "Слишком короткое имя.", l.style.color = "red";
            return
        }
        if (!r.includes("@") || r.length < 5) {
            l.textContent = "Ваш Email некорректный.", l.style.color = "red";
            return
        }
        if (a.length < 10) {
            l.textContent = "Сообщение слишком короткое.", l.style.color = "red";
            return
        }
        l.textContent = "Сообщение успешно доставлено.", l.style.color = "green", t.reset()
    });
    let n = document.querySelectorAll(".gallery .card");
    n.forEach((e, t) => {
        e.style.opacity = "0", e.style.transform = "translateY(20px)", setTimeout(() => {
            e.style.transition = "all 0.5s ease", e.style.opacity = "1", e.style.transform = "translateY(0)"
        }, 150 * t)
    }), document.addEventListener("mouseover", e => {
        let t = e.target.closest(".card");
        t && (t.style.boxShadow = "0 0 15px rgba(0,0,0,0.3)")
    }), document.addEventListener("mouseout", e => {
        let t = e.target.closest(".card");
        t && (t.style.boxShadow = "none")
    })
});

function escapeHTML(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
}
