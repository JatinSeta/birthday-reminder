
let dataUser = []
let getData = JSON.parse(localStorage.getItem("data"))
let cardDiv = document.getElementById("Card")
document.getElementById("Sumbite").addEventListener("click", function () {
    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            alert("Permission granted");
            location.reload();
        } else if (permission === "denied") {
            alert("Permission denied");
        } else {
            alert("Permission dismissed or closed");
        }
    }).catch((error) => {
        console.error("Notification permission error:", error);
    });
});

function Submit() {

let nameFiled = document.getElementById("name").value
let nickNameFiled = document.getElementById("nickName").value
let dateFiled = document.getElementById("date").value
let optionFiled = document.getElementById("option").value
let Erro = document.getElementById("Erro")
let checkbox = document.getElementById("checkbox")
    // Validation
    if (nameFiled === "") {
        Erro.textContent = "Please Fill Name"

    } else if (dateFiled === "") {
        Erro.textContent = "Please Fill Date"

    } else if (optionFiled === "") {
        Erro.textContent = "Please Seleacte Options"
    } else {
        Erro.textContent = ""
    }


    //Chackbox
    let chacked = ""
    if (checkbox.checked) {
        chacked = "Chacked"

    } else {
        chacked = ""
    }

    //Push in localStorage


    let obj = {
        name: nameFiled,
        nickName: nickNameFiled,
        data: dateFiled,
        option: optionFiled,
        chackbox: chacked
    }
    if (getData === null) {
        dataUser.push(obj)
    } else {
        dataUser = getData
        
        dataUser.push(obj)
    }
 localStorage.setItem("data", JSON.stringify(dataUser))
  
 
  
}


if(getData === null){
    let title = document.createElement('h1')
    let textnote = document.createTextNode("No Data Added")
    title.appendChild(textnote)
    cardDiv.appendChild(title)
    
}else {
for (i = 0; i <= getData.length - 1; i++) {
    let Today = new Date()
    let allData = getData[i]
    let userDate = getData[i].data
    let sevenDay = new Date(userDate)
    let ThreeDay = new Date(userDate)
    let oneDay = new Date(userDate)
    let ToDay = new Date(userDate)
    let chackboxchacked = getData[i].chackbox
    let name = getData[i].name
    let nickName = getData[i].nickName
    let option = getData[i].option

    sevenDay.setDate(sevenDay.getDate() - 7)
    ThreeDay.setDate(ThreeDay.getDate() - 3)
    oneDay.setDate(oneDay.getDate() - 1)
    
    if (sevenDay.getDate() == Today.getDate()) {
        if (nickName !== "") {
            if (chackboxchacked === "Chacked") {
                let ParentDiv = document.createElement('div')
            
                let Name = document.createElement('h5')
                let textNode = document.createTextNode(`Coming Soon ${name} Birth-Day!`)
                let detailes = document.createElement('p')
                let text  = document.createTextNode(`In 7 days, after this date ${ToDay.getDate()}-${ToDay.getMonth()}-${ToDay.getFullYear()}  it's ${name} (${nickName})'s ${option} birthday. You need to buy a gift.`)
                let dateElement = document.createElement('p')
                let dateDetailes = document.createTextNode(`${ToDay.getDate()}-${ToDay.getMonth()}-${ToDay.getFullYear()}`)
                // let button = document.createElement('button')
                // let buttontext = document.createTextNode('Click to More Reminder')
                // button.appendChild(buttontext)
                
                dateElement.appendChild(dateDetailes)
                detailes.appendChild(text)
                Name.appendChild(textNode)
                ParentDiv.appendChild(Name)
                ParentDiv.appendChild(dateElement)
                ParentDiv.appendChild(detailes)
                cardDiv.appendChild(ParentDiv)
                ParentDiv.setAttribute("class","card-div")
            
            } else {
                let ParentDiv = document.createElement('div')
                let Name = document.createElement('h5')
                let textNode = document.createTextNode(`Coming Soon ${name} Birth-Day!`)
                let detailes = document.createElement('p')
                let text  = document.createTextNode(`${name} (${nickName})'s ${option} birthday is in 7 days.`)
                 let dateElement = document.createElement('p')
                let dateDetailes = document.createTextNode(`${ToDay.getDate()}-${ToDay.getMonth()}-${ToDay.getFullYear()}`)
                dateElement.appendChild(dateDetailes)
                detailes.appendChild(text)
                Name.appendChild(textNode)
                ParentDiv.appendChild(Name)
                ParentDiv.appendChild(dateElement)
                ParentDiv.appendChild(detailes)
                let button = document.createElement('button')
                let buttontext = document.createTextNode("Click to Gift Reminder")
                button.setAttribute("onclick",`Reminder(${i})`)
                button.appendChild(buttontext)
                ParentDiv.appendChild(button)
                ParentDiv.setAttribute("class","card-div")
                cardDiv.appendChild(ParentDiv)
            
                
            }
        } else {
            if (chackboxchacked === "Chacked") {
                let ParentDiv = document.createElement('div')
                let Name = document.createElement('h5')
                let textNode = document.createTextNode(`Coming Soon ${name} Birth-Day!`)
                let detailes = document.createElement('p')
                let text  = document.createTextNode(`In 7 days, it's ${name}'s ${option} birthday. You need to buy a gift.`)
                let dateElement = document.createElement('p')
                let dateDetailes = document.createTextNode(`${ToDay.getDate()}-${ToDay.getMonth()}-${ToDay.getFullYear()}`)
                dateElement.appendChild(dateDetailes)
                detailes.appendChild(text)
                Name.appendChild(textNode)
                ParentDiv.appendChild(Name)
                ParentDiv.appendChild(dateElement)
                ParentDiv.appendChild(detailes)
                cardDiv.appendChild(ParentDiv)
                ParentDiv.setAttribute("class","card-div")

            } else {
                
                let ParentDiv = document.createElement('div')
                let Name = document.createElement('h5')
                let textNode = document.createTextNode(`Coming Soon ${name} Birth-Day!`)
                let detailes = document.createElement('p')
                let text  = document.createTextNode(`${name}'s ${option} birthday is in 7 days.`)
                let dateElement = document.createElement('p')
                let dateDetailes = document.createTextNode(`${ToDay.getDate()}-${ToDay.getMonth()}-${ToDay.getFullYear()}`)
                dateElement.appendChild(dateDetailes)
                detailes.appendChild(text)
                Name.appendChild(textNode)
                ParentDiv.appendChild(Name)
                ParentDiv.appendChild(dateElement)
                ParentDiv.appendChild(detailes)
                cardDiv.appendChild(ParentDiv)
                ParentDiv.setAttribute("class","card-div")
                    let button = document.createElement('button')
                let buttontext = document.createTextNode("Click to Gift Reminder")
                   button.setAttribute("onclick",`Reminder(${i})`)
                button.appendChild(buttontext)
                ParentDiv.appendChild(button)
         
                
            }
        }
    } else if (ThreeDay.getDate() == Today.getDate()) {
        if (nickName !== "") {
            if (chackboxchacked === "Chacked") {
                let ParentDiv = document.createElement('div')
                let Name = document.createElement('h5')
                let textNode = document.createTextNode(`Coming Soon ${name} Birth-Day!`)
                let detailes = document.createElement('p')
                let text  = document.createTextNode(`${name} (${nickName})'s ${option} birthday is in 3 days. Are you ready with the gift?`)
                let dateElement = document.createElement('p')
                let dateDetailes = document.createTextNode(`${ToDay.getDate()}-${ToDay.getMonth()}-${ToDay.getFullYear()}`)
                dateElement.appendChild(dateDetailes)
                detailes.appendChild(text)
                Name.appendChild(textNode)
                ParentDiv.appendChild(Name)
                ParentDiv.appendChild(dateElement)
                ParentDiv.appendChild(detailes)
                cardDiv.appendChild(ParentDiv)
                ParentDiv.setAttribute("class","card-div")
            } else {
                let ParentDiv = document.createElement('div')
                let Name = document.createElement('h5')
                let textNode = document.createTextNode(`Coming Soon ${name} Birth-Day!`)
                let detailes = document.createElement('p')
                let text  = document.createTextNode(`Only 3 days left for ${name} (${nickName})'s ${option} birthday. Have you planned anything?`)
                let dateElement = document.createElement('p')
                let dateDetailes = document.createTextNode(`${ToDay.getDate()}-${ToDay.getMonth()}-${ToDay.getFullYear()}`)
                dateElement.appendChild(dateDetailes)
                detailes.appendChild(text)
                Name.appendChild(textNode)
                ParentDiv.appendChild(Name)
                ParentDiv.appendChild(dateElement)
                ParentDiv.appendChild(detailes)
                cardDiv.appendChild(ParentDiv)
                ParentDiv.setAttribute("class","card-div")
                    let button = document.createElement('button')
                let buttontext = document.createTextNode("Click to Gift Reminder")
                 button.setAttribute("onclick",`Reminder(${i})`)
                button.appendChild(buttontext)
                ParentDiv.appendChild(button)
        
                
            }
        } else {
            if (chackboxchacked === "Chacked") {
                  let ParentDiv = document.createElement('div')
                let Name = document.createElement('h5')
                let textNode = document.createTextNode(`Coming Soon ${name} Birth-Day!`)
                let detailes = document.createElement('p')
                let text  = document.createTextNode(`Only 3 days left for ${name} (${nickName})'s ${option} birthday. Have you planned anything?`)
                let dateElement = document.createElement('p')
                let dateDetailes = document.createTextNode(`${ToDay.getDate()}-${ToDay.getMonth()}-${ToDay.getFullYear()}`)
                dateElement.appendChild(dateDetailes)
                detailes.appendChild(text)
                Name.appendChild(textNode)
                ParentDiv.appendChild(Name)
                ParentDiv.appendChild(dateElement)
                ParentDiv.appendChild(detailes)
                cardDiv.appendChild(ParentDiv)
                ParentDiv.setAttribute("class","card-div")

            } else {
                let ParentDiv = document.createElement('div')
                let Name = document.createElement('h5')
                let textNode = document.createTextNode(`Coming Soon ${name} Birth-Day!`)
                let detailes = document.createElement('p')
                let text  = document.createTextNode(`${name}'s ${option} birthday is just 3 days away. What's the plan?`)
                let dateElement = document.createElement('p')
                let dateDetailes = document.createTextNode(`${ToDay.getDate()}-${ToDay.getMonth()}-${ToDay.getFullYear()}`)
                dateElement.appendChild(dateDetailes)
                detailes.appendChild(text)
                Name.appendChild(textNode)
                ParentDiv.appendChild(Name)
                ParentDiv.appendChild(dateElement)
                ParentDiv.appendChild(detailes)
                cardDiv.appendChild(ParentDiv)
                ParentDiv.setAttribute("class","card-div")
                    let button = document.createElement('button')
                let buttontext = document.createTextNode("Click to Gift Reminder")
                   button.setAttribute("onclick",`Reminder(${i})`)
                button.appendChild(buttontext)
                ParentDiv.appendChild(button)
             
            }
        }
    } else if (oneDay.getDate() == Today.getDate()) {
        if (nickName !== "") {
            if (chackboxchacked === "Chacked") {
                let ParentDiv = document.createElement('div')
                let Name = document.createElement('h5')
                let textNode = document.createTextNode(`Coming Soon ${name} Birth-Day!`)
                let detailes = document.createElement('p')
                let text  = document.createTextNode(`${name} (${nickName})'s ${option} birthday is tonight. You've planned a gift.`)
                let dateElement = document.createElement('p')
                let dateDetailes = document.createTextNode(`${ToDay.getDate()}-${ToDay.getMonth()}-${ToDay.getFullYear()}`)
                dateElement.appendChild(dateDetailes)
                detailes.appendChild(text)
                Name.appendChild(textNode)
                ParentDiv.appendChild(Name)
                ParentDiv.appendChild(dateElement)
                ParentDiv.appendChild(detailes)
                cardDiv.appendChild(ParentDiv)
                ParentDiv.setAttribute("class","card-div")
            } else {
                let ParentDiv = document.createElement('div')
                let Name = document.createElement('h5')
                let textNode = document.createTextNode(`Coming Soon ${name} Birth-Day!`)
                let detailes = document.createElement('p')
                let text  = document.createTextNode(`${name} (${nickName})'s ${option} birthday is tonight. You haven't planned a gift yet.`)
                let dateElement = document.createElement('p')
                let dateDetailes = document.createTextNode(`${ToDay.getDate()}-${ToDay.getMonth()}-${ToDay.getFullYear()}`)
                dateElement.appendChild(dateDetailes)
                detailes.appendChild(text)
                Name.appendChild(textNode)
                ParentDiv.appendChild(Name)
                ParentDiv.appendChild(dateElement)
                ParentDiv.appendChild(detailes)
                cardDiv.appendChild(ParentDiv)
                ParentDiv.setAttribute("class","card-div")
                    let button = document.createElement('button')
                let buttontext = document.createTextNode("Click to Gift Reminder")
                   button.setAttribute("onclick",`Reminder(${i})`)
                button.appendChild(buttontext)
                ParentDiv.appendChild(button)
           
            }
        } else {
            if (chackboxchacked === "Chacked") {
                let ParentDiv = document.createElement('div')
                let Name = document.createElement('h5')
                let textNode = document.createTextNode(`Coming Soon ${name} Birth-Day!`)
                let detailes = document.createElement('p')
                let text  = document.createTextNode(`${name}'s ${option} birthday is tonight. You've already planned a gift.`)
                let dateElement = document.createElement('p')
                let dateDetailes = document.createTextNode(`${ToDay.getDate()}-${ToDay.getMonth()}-${ToDay.getFullYear()}`)
                dateElement.appendChild(dateDetailes)
                detailes.appendChild(text)
                Name.appendChild(textNode)
                ParentDiv.appendChild(Name)
                ParentDiv.appendChild(dateElement)
                ParentDiv.appendChild(detailes)
                cardDiv.appendChild(ParentDiv)
                ParentDiv.setAttribute("class","card-div")

            } else {
                let ParentDiv = document.createElement('div')
                let Name = document.createElement('h5')
                let textNode = document.createTextNode(`Coming Soon ${name} Birth-Day!`)
                let detailes = document.createElement('p')
                let text  = document.createTextNode(`${name}'s ${option} birthday is tonight. No gift is planned yet`)
                let dateElement = document.createElement('p')
                let dateDetailes = document.createTextNode(`${ToDay.getDate()}-${ToDay.getMonth()}-${ToDay.getFullYear()}`)
                dateElement.appendChild(dateDetailes)
                detailes.appendChild(text)
                Name.appendChild(textNode)
                ParentDiv.appendChild(Name)
                ParentDiv.appendChild(dateElement)
                ParentDiv.appendChild(detailes)
                cardDiv.appendChild(ParentDiv)
                ParentDiv.setAttribute("class","card-div")
                    let button = document.createElement('button')
                let buttontext = document.createTextNode("Click to Gift Reminder")
                   button.setAttribute("onclick",`Reminder(${i})`)
                button.appendChild(buttontext)
                ParentDiv.appendChild(button)
            
            }
        }
    } else if (ToDay.getDate() == Today.getDate()) {
        if (nickName !== "") {
            if (chackboxchacked === "Chacked") {
                let ParentDiv = document.createElement('div')
                let Name = document.createElement('h5')
                let textNode = document.createTextNode(`Coming Soon ${name} Birth-Day!`)
                let detailes = document.createElement('p')
                let text  = document.createTextNode(`Today is ${name} (${nickName})'s ${option} birthday. Don't forget the gift! `)
                let dateElement = document.createElement('p')
                let dateDetailes = document.createTextNode(`${ToDay.getDate()}-${ToDay.getMonth()}-${ToDay.getFullYear()}`)
                dateElement.appendChild(dateDetailes)
                detailes.appendChild(text)
                Name.appendChild(textNode)
                ParentDiv.appendChild(Name)
                ParentDiv.appendChild(dateElement)
                ParentDiv.appendChild(detailes)
                cardDiv.appendChild(ParentDiv)
                ParentDiv.setAttribute("class","card-div")
            } else {
                let ParentDiv = document.createElement('div')
                let Name = document.createElement('h5')
                let textNode = document.createTextNode(`Coming Soon ${name} Birth-Day!`)
                let detailes = document.createElement('p')
                let text  = document.createTextNode(`It's ${name} (${nickName})'s ${option} birthday today. You haven't prepared a gift yet. `)
                let dateElement = document.createElement('p')
                let dateDetailes = document.createTextNode(`${ToDay.getDate()}-${ToDay.getMonth()}-${ToDay.getFullYear()}`)
                dateElement.appendChild(dateDetailes)
                detailes.appendChild(text)
                Name.appendChild(textNode)
                ParentDiv.appendChild(Name)
                ParentDiv.appendChild(dateElement)
                ParentDiv.appendChild(detailes)
                cardDiv.appendChild(ParentDiv)
                ParentDiv.setAttribute("class","card-div")
                    let button = document.createElement('button')
                let buttontext = document.createTextNode("Click to Gift Reminder")
                  button.setAttribute("onclick",`Reminder(${i})`)
                button.appendChild(buttontext)
                ParentDiv.appendChild(button)
           
            }
        } else {
            if (chackboxchacked === "Chacked") {
                let ParentDiv = document.createElement('div')
                let Name = document.createElement('h5')
                let textNode = document.createTextNode(`Coming Soon ${name} Birth-Day!`)
                let detailes = document.createElement('p')
                let text  = document.createTextNode(`Today is ${name}'s ${option} birthday. Make sure to give the gift. `)
                let dateElement = document.createElement('p')
                let dateDetailes = document.createTextNode(`${ToDay.getDate()}-${ToDay.getMonth()}-${ToDay.getFullYear()}`)
                dateElement.appendChild(dateDetailes)
                detailes.appendChild(text)
                Name.appendChild(textNode)
                ParentDiv.appendChild(Name)
                ParentDiv.appendChild(dateElement)
                ParentDiv.appendChild(detailes)
                cardDiv.appendChild(ParentDiv)
                ParentDiv.setAttribute("class","card-div")
            } else {
                let ParentDiv = document.createElement('div')
                let Name = document.createElement('h5')
                let textNode = document.createTextNode(`Coming Soon ${name} Birth-Day!`)
                let detailes = document.createElement('p')
                let text  = document.createTextNode(`It's ${name}'s ${option} birthday today. No gift has been arranged yet.`)
                let dateElement = document.createElement('p')
                let dateDetailes = document.createTextNode(`${ToDay.getDate()}-${ToDay.getMonth()}-${ToDay.getFullYear()}`)
                dateElement.appendChild(dateDetailes)
                detailes.appendChild(text)
                Name.appendChild(textNode)
                ParentDiv.appendChild(Name)
                ParentDiv.appendChild(dateElement)
                ParentDiv.appendChild(detailes)
                cardDiv.appendChild(ParentDiv)
                ParentDiv.setAttribute("class","card-div")
                let button = document.createElement('button')
                let buttontext = document.createTextNode("Click to Gift Reminder")
                  button.setAttribute("onclick",`Reminder(${i})`)
                button.appendChild(buttontext)
                ParentDiv.appendChild(button)
             
            }
        }
    }



    
    
}

}


     function Reminder(index){
                   let data = JSON.parse(localStorage.getItem("data"))
                for(i=0;i<=data.length-1;i++){
                    data[index].chackbox = "Chacked"
                }
                localStorage.setItem("data",JSON.stringify(data))
                location.reload()

            } 