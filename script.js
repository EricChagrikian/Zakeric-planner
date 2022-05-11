// création des let de base

// let ticketArray = [];


// const local = JSON.parse(localStorage.getItem("ticket"));

// button.onclick = () =>  {
//     const ticket = {
//         numeroTicket: num.value,
//         titre: titre.value,
//         commentaire: comm.value,
//         status: stat.value,
//         durée: duration.value
//     }
// }


// generer les numéro de ticket 

function generateTicketNumber(){
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    let nums = "0123456789";
    let string_length = 3;
    let number_length = 2;
    let randomstring = '';
    let randomnumber = '';
    for (let i=0; i<string_length; i++) {
        let rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);

    }
    for (let i=0; i<number_length; i++) {
        let r = Math.floor(Math.random() * nums.length);
        randomnumber += nums.substring(r,r+1);

    }
        return  (randomstring + randomnumber);

}

console.log(generateTicketNumber())

function ticketSummary(ticketNumber,ticketTitle,ticketDepartment,ticketPriority,ticketDate){

    let table = document.getElementById("ticketTableBody");
    let row = table.insertRow();
    row.className = randomTableColor();
    let ticketNumberCell = row.insertCell(0);
    let ticketTitleCell = row.insertCell(1);
    let ticketDepartmentCell = row.insertCell(2);
    let ticketDateCell = row.insertCell(3);
    let ticketPriorityCell = row.insertCell(4);
    let ticketAction = row.insertCell(5);

    ticketNumberCell.innerHTML = ticketNumber;
    ticketTitleCell.innerHTML = ticketTitle;
    ticketDepartmentCell.innerHTML = ticketDepartment;
    ticketPriorityCell.innerHTML = ticketPriority;
    ticketDateCell.innerHTML = ticketDate;
    ticketAction.innerHTML= '<button class="btn-info" onClick="createDiv()">View Details</button>';
}





