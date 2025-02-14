let currentPage = 0;
const pages = document.querySelectorAll('.page');
const cover = document.querySelector('.cover');
const pagesContainer = document.querySelector('.pages');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const closeBtn = document.getElementById('close');

function startPages() {
    cover.style.display = "none";
    pagesContainer.style.display = "block";
    showPage(0);
}

function showPage(index) {
    pages.forEach((page, i) => {
        page.style.display = (i === index) ? "flex" : "none";
        page.style.opacity = (i === index) ? "1" : "0";
    });

    prevBtn.style.display = (index === 0) ? "none" : "block";

    if (index === pages.length - 1) {
        nextBtn.style.display = "none";
        closeBtn.style.display = "block";
    } else {
        nextBtn.style.display = "block";
        closeBtn.style.display = "none";
    }
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

function closePages() {
    pagesContainer.style.display = "none";
    cover.style.display = "block";
    currentPage = 0;
}
