document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            // รีเซ็ตการ์ดทั้งหมดให้เป็นขนาดปกติ
            cards.forEach(c => {
                c.style.transform = "scale(1)";
                c.style.transition = "transform 0.3s ease-in-out";
            });

            // ขยายการ์ดที่ถูกคลิก
            card.style.transform = "scale(1.2)";
        });
    });
});