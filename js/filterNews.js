// ฟังก์ชันค้นหาข่าวสาร
function filterNews() {
    let input = document.getElementById("search").value.toLowerCase();
    let rows = document.querySelectorAll("#newsTable tr");

    rows.forEach((row, index) => {
        if (index === 0) return; // ข้ามหัวตาราง
        let text = row.innerText.toLowerCase();
        row.style.display = text.includes(input) ? "" : "none";
    });
}