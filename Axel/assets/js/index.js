/*Navbar reactive*/
const navToggle=document.querySelector(".nav-toggle")
const navMenu=document.querySelector(".nav-menu")

navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("nav-menu_visible")
})

/*Enviar mensaje whats*/

function sendWhatsAppMessage() {
    var message = "¡Hola! Estoy interesado en agendar una cita.";
    var phoneNumber = "9988900013"; // número de teléfono del destinatario (sin el signo +)
    var whatsappLink = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(whatsappLink, '_blank');
}
