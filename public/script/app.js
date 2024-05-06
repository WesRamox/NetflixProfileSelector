let bodyBg = document.getElementById("main")

const backgrounds = [
    "./public/images/berlim.jpeg",
    "./public/images/wandinha.jpg"
]

let counter = 0

setInterval(
	()=> {
		counter++
		if (counter == backgrounds.length) {
			counter = 0
		}

		bodyBg.style.backgroundImage = `url('${backgrounds[counter]}')`;
	}, 10000
)


function newProfile() {
    const ulProfiles = document.getElementById("profile-list")
    const itemsLi = document.getElementsByClassName("boxUser")
    const inputName = document.getElementById("user-name")
    
    if(itemsLi.length < 4) {
        let newUser = document.createElement("div")
        newUser.className = "boxUser"
        
        newUser.innerHTML = `
        <li>
        <img src="./public/images/profileDefault.png" alt="Profile Image" id="profileImg">
        </li>
        <p id="profile-name">${inputName.value}</p>
        `
        
        ulProfiles.appendChild(newUser)  
        inputName.value = ""         
    }
    modalNewUser()
}

function modalNewUser() {
    const sectionModal = document.getElementById("createProfile")
    const container = document.querySelector(".container")
    
    if(container.classList.contains("hidden")) {
        container.classList.remove("hidden")
        sectionModal.classList.add("hidden")
    } else {
        sectionModal.classList.remove("hidden")
        container.classList.add("hidden")
    }
    
}

loadData()