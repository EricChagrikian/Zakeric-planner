// création des let de base

let ticketArray = [];


const local = JSON.parse(localStorage.getItem("ticket"));

button.onclick = () =>  {
    const ticket = {
        numeroTicket: num.value,
        titre: titre.value,
        commentaire: comm.value,
        status: stat.value,
        durée: duration.value
    }
}


