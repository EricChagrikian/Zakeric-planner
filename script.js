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


let naame = document.querySelector('.named')
let description = document.querySelector('.description')
let date = document.querySelector('.date')
let add = document.querySelector('.add')
let remaining = document.querySelector('.remaining')
let container = document.querySelector('.container')
let select = document.querySelector('#select')

let sortt = document.querySelector('.sort')




function addHtml(todo) {



    let sectionchild = document.createElement('section')
    sectionchild.classList.add('sectionchild')
    container.appendChild(sectionchild)
    sectionchild.id = todo.id


    let div = document.createElement('div')
    div.classList.add('div')
    sectionchild.appendChild(div)

    let all = document.createElement('div')
    all.classList.add('all')
    div.appendChild(all)




    let doingcb = document.createElement('input')
    doingcb.type = "checkbox"
    doingcb.setAttribute('title', 'doing')
    doingcb.checked = todo.doing
    doingcb.setAttribute("name", "doing")
    doingcb.classList.add('doing')
    all.appendChild(doingcb)



    let donecb = document.createElement('input')
    donecb.type = "checkbox"
    donecb.checked = todo.done
    donecb.setAttribute("name", "done")
    donecb.setAttribute('title', "done")
    donecb.classList.add('done')
    all.appendChild(donecb)

    let h2 = document.createElement('h2')
    h2.innerText = todo.name
    all.appendChild(h2)
    h2.className = "name"

    let h3 = document.createElement('h3')
    h3.innerText = todo.desc
    div.appendChild(h3)

    let h4 = document.createElement('h4');
    h4.innerText = todo.date
    div.appendChild(h4)

    let h5 = document.createElement('h5');
    h5.innerText = "in " + todo.remainingDate + " days";
    h5.classList.add('remainingdate')
    div.appendChild(h5)

    let deletetodo = document.createElement('button')
    deletetodo.classList.add('delete')
    deletetodo.innerText = "delete"
    sectionchild.appendChild(deletetodo)
    //click event
    doingcb.addEventListener('click', (e) => {


        if (doingcb.checked) {
            doingcb.classList.add('active')
            donecb.checked = false
            donecb.classList.remove('clicked')


        } else {
            doingcb.classList.remove('active')

        }
        let parent = e.target.parentElement;
        let name = parent.children[2].textContent
        console.log(name);
        let todos = JSON.parse(localStorage.getItem('todos'));
        todos.forEach(td => {
            if (td.name === name) td.doing = !td.doing
        });
        todos.forEach(td => {
            if (td.name === name&td.done===true) td.done =! td.done
        })

        localStorage.setItem('todos', JSON.stringify(todos))

    })

    donecb.addEventListener('click', (e) => {
        if (donecb.checked) {
            donecb.classList.add('clicked')
             doingcb.checked = false
            doingcb.classList.remove('active')

        }
         else {
            donecb.classList.remove('clicked')
        }
        let parent = e.target.parentElement;
        let name = parent.children[2].textContent
        console.log(name);
        let todos = JSON.parse(localStorage.getItem('todos'));
        todos.forEach(td => {
            if (td.name === name) td.done = !td.done
        });
        
        todos.forEach(td => {
            if (td.name === name&td.doing===true) td.doing =! td.doing
        })
       

        localStorage.setItem('todos', JSON.stringify(todos))
    })

    deletetodo.addEventListener('click', (e) => {
        let parent = e.target.parentElement
        let name = parent.firstChild.children[0].children[2].textContent
        console.log(name);
        parent.remove()
        let todos = JSON.parse(localStorage.getItem('todos'));
        todos = todos.filter(td => td.id != parent.id);
        localStorage.setItem('todos', JSON.stringify(todos))

    })

    //select event
    select.addEventListener('change', () => {
        if (select.value === "doing") {

            if (doingcb.classList.contains("active")) {

                sectionchild.style.display = "block"


            } else {
                sectionchild.style.display = "none"
            }
        }


        if (select.value === "all") {
            sectionchild.style.display = "block"
        }

        if (select.value === "done") {

            if (donecb.classList.contains("clicked")) {

                sectionchild.style.display = "block"

            } else {
                sectionchild.style.display = "none"
            }
        }





        if (select.value === "todo") {

            if (!donecb.classList.contains("clicked") & !doingcb.classList.contains('active')) {

                sectionchild.style.display = "block"

            } else {
                sectionchild.style.display = "none"
            }
        }




    })

}



const startConf= () => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (!todos) {
        localStorage.setItem('todos', JSON.stringify([]))
    } else {

        for (let elem in todos) {
            addHtml(todos[elem])

        }

    }

}
startConf();




let todo;

const createtodo = () => {
    let todoname = naame.value;
    let tododesc = description.value;
    let tododate = date.valueAsNumber;
    let now = Date.now();



    let total = tododate - now;
    let day = Math.ceil(total / 3600 / 24 / 1000)
    todo = {
        name: todoname,
        desc: tododesc,
        date: date.value,

        doing: false,
        done: false,

        remainingDate: day,
        id: Math.floor(Math.random() * 1000000) 
    }
    let todos = JSON.parse(localStorage.getItem('todos'));
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
    addHtml(todo)
naame.value="";
description.value="";
date.value=""
}

function sortedbydate() {
    
    
    let stocked = JSON.parse(localStorage.getItem('todos'));
    console.log(stocked);
    stocked.sort((a, b)=> {
        return a.remainingDate - b.remainingDate;
    });
    localStorage.setItem('todos', JSON.stringify(stocked))
    // addHtml(stocked)
    location.reload()
    
    
  
}

sortt.addEventListener('click',sortedbydate)





add.addEventListener('click', createtodo)

document.addEventListener('keyup',(e)=>{
    if(e.key==="Enter"){
        createtodo()
    }
})


