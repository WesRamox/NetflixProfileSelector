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

    if(itemsLi.length < 4) {
        let newUser = document.createElement("div")
        newUser.className = "boxUser"

        newUser.innerHTML = `
        <li>
            <img src="./public/images/profileDefault.png" alt="Profile Image" id="profileImg">
        </li>
        <p id="profile-name">Wesley</p>
        `

        ulProfiles.appendChild(newUser)           
    }
}

