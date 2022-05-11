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

// function generateTicketNumber(){
//     let chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
//     let nums = "0123456789";
//     let string_length = 3;
//     let number_length = 2;
//     let randomstring = '';
//     let randomnumber = '';
//     for (let i=0; i<string_length; i++) {
//         let rnum = Math.floor(Math.random() * chars.length);
//         randomstring += chars.substring(rnum,rnum+1);

//     }
//     for (let i=0; i<number_length; i++) {
//         let r = Math.floor(Math.random() * nums.length);
//         randomnumber += nums.substring(r,r+1);

//     }
//         return  (randomstring + randomnumber);

// }


let collection = JSON.parse(window.localStorage.getItem('collection'))

function updateTask(inputArray, init=0) {
  if(!init) document.getElementById("tasklist").innerHTML = ""
  for (let index = 0; index < inputArray.length; index++) {
    const element = inputArray[index];
        let div = document.createElement("div")
        div.className = "";
        let task = document.createElement("P")
        let taskname = document.createTextNode(element.Task)
        task.appendChild(taskname)
        div.appendChild(task)

        let description = document.createElement("P")
        let desc = document.createTextNode(element.Description)
        description.appendChild(desc)
        div.appendChild(description)
        
        let status = document.createElement("P")
        let stat = document.createTextNode(element.Status)
        status.appendChild(stat)
        div.appendChild(status)

        let duedate = document.createElement("P")
        let date = document.createTextNode(element.DueDate)
        duedate.appendChild(date)
        div.appendChild(duedate)
        
        document.getElementById("tasklist").appendChild(div)
  }
}

function getInputValue(event){
    // Selecting the input element and get its value 
    event.preventDefault();
    let NameValue = document.getElementById("NameOfTask").value;
    let DescValue = document.getElementById("DescOfTask").value;
    let StatusValue = document.getElementById("StatusOfTask").value;
    let DateValue = document.getElementById("DateOfTask").value;
    let endDate = new Date;

    // Calcul des jours restants

    let diffInMs = new Date(DateValue) - new Date(endDate)
    let diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    diffInDays = diffInDays | 0
    diffInDays += " days"


    let input = {
      Task: NameValue,
      Description: DescValue,
      Status: StatusValue,
      DueDate: diffInDays,
    }
    collection.push(input)
    window.localStorage.setItem('collection', JSON.stringify(collection))
    window.location.reload();
};

function resetTasks() {
  window.localStorage.removeItem('collection')
  window.location.reload();
}

function sortName(arr) {
  let sorted = arr.sort(function (a, b) {
    return a.Task.localeCompare(b.Task);
  });
  if (document.querySelector(".selected")) {
    document.querySelector(".selected").classList.remove("selected")
  }
  nameBtn = document.querySelectorAll(".btn")[0];
  nameBtn.classList.add("selected")
  updateTask(sorted)
  };


function sortDate(arr) {
  let sorted = arr.sort(function (a, b) {
    return a.DueDate.localeCompare(b.DueDate);
  });
  if (document.querySelector(".selected")) {
    document.querySelector(".selected").classList.remove("selected")
  }
  dateBtn = document.querySelectorAll(".btn")[3];
  dateBtn.classList.add("selected")
  updateTask(sorted)
  };

function sortStatus(arr) {
  let sorted = arr.sort(function (a, b) {
    return a.Status.localeCompare(b.Status);
  });
  if (document.querySelector(".selected")) {
    document.querySelector(".selected").classList.remove("selected")
  }
  
  statusBtn = document.querySelectorAll(".btn")[2];
  statusBtn.classList.add("selected")
  updateTask(sorted)
  updateTask(sorted)
  };

  function filterSelection(e) {
    let filt = collection.filter(element => element.Status === e);
    console.log(filt);
    updateTask(filt);
  }
  

if(collection) {
  updateTask(collection)
} else {
  // initial values
  collection = [
     /*{
      Task: "Laundry",
      Task: "Laundry",
      Description: "Clean, Iron & Fold",
      Description: "Clean, Iron & Fold",
      Status: "To-Do",
      Status: "To-Do",
@@ -101,7 +101,9 @@ if(collection) {
      Description: "Clean the whole house",
      Description: "Clean the whole house",
      Status: "To-Do",
      Status: "To-Do",
      DueDate: "4 days",
      DueDate: "4 days",
    },
    },*/
  ];
  updateTask(collection, 1)
};

// function darkmode() {
//   let element = document.body;
//   element.classList.add("dark-mode");
// } 