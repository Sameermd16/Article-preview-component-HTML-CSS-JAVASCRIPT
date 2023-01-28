const arrow = document.querySelector(".arrow");
const social_media = document.querySelector(".socials_share")


arrow.addEventListener("click", () => {
    social_media.classList.toggle("active");
});
