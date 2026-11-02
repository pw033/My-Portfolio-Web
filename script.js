
var tablinks= document.getElementsByClassName("tab-links");
var tabcontents= document.getElementsByClassName("tab-contents");
function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
         for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
         }
         event.currentTarget.classList.add("active-link");
         document.getElementById(tabname).classList.add("active-tab")
      }

//  ---------------------script for small screen------------------
var sidemeu = document.getElementById("sidemenu");

function openmenu(){
   sidemeu.style.right="0";
}

function closemenu(){
   sidemeu.style.right="-200px";
}
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwsXbAEhnXkJXVmXGVpCxJVMm8WvelZZxaX0qeqCtTmZSW6U_3lHl_B-zTxX4hCDsiBxg/exec'
        const form = document.forms['YOUR_FORM_NAME']
        const msg = document.getElementById('msg')
form.addEventListener('submit', e => {
		e.preventDefault()
		fetch(scriptURL, { method: 'POST', body: new FormData(form) })
			.then(response => response.json())
			.then(response => {
                msg.innerHTML = "Message sent successfully"
                setTimeout(function(){
                  msg.innerHTML = "" 
                },5000)
                form.reset()
            })
			.catch(error => console.error('Error!', error.message))
	    })

// ....................Script for service modal learn more................

    // WEB DESIGN POPUP
function openWebModal() {
    document.getElementById("webModal").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeWebModal() {
    document.getElementById("webModal").style.display = "none";
    document.body.style.overflow = "auto";
}

// UI/UX DESIGN POPUP
function openUiuxModal() {
    document.getElementById("uiuxModal").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeUiuxModal() {
    document.getElementById("uiuxModal").style.display = "none";
    document.body.style.overflow = "auto";
}


// APP DESIGN POPUP
function openAppModal() {
    document.getElementById("appModal").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeAppModal() {
    document.getElementById("appModal").style.display = "none";
    document.body.style.overflow = "auto";
}


// CLICK OUTSIDE TO CLOSE
document.querySelectorAll(".service-modal").forEach(function(modal) {

    modal.addEventListener("click", function(event) {

        if (event.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }

    });

});


// ESCAPE KEY TO CLOSE
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        document.querySelectorAll(".service-modal").forEach(function(modal) {
            modal.style.display = "none";
        });

        document.body.style.overflow = "auto";
    }

});

//.......................Script for see more button................

function toggleProjects() {

    const projects = document.querySelectorAll(".extra-work");
    const button = document.getElementById("seeMoreBtn");

    projects.forEach(project => {
        project.classList.toggle("show-project");
    });

    if (button.innerText === "See More") {
        button.innerText = "See Less";
    } else {
        button.innerText = "See More";
    }
}
