const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const linkDoVideo = video.src;
const modal = document.querySelector(".modal");

function alternarModal (){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    const video = document.getElementById("video");
    video.setAttribute("src", "");
     
});



