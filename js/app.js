/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
//Grabs the UL for the navbar to create the list elements
const navList = document.querySelector("#navbar__list");
//Creates a section element to get the Section 4 built.
const newSection = document.createElement("section");
// Grabs the root of the content.
const main = document.querySelector("main");

const backToTopBtn = document.querySelector("#back__to__top");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// just creats the fourth element in section. Could be turned into a function to be modular and easier to maintain if needed.
newSection.id= `section4`;
newSection.setAttribute("data-nav", "Section 4");
newSection.innerHTML = `
      <div class="landing__container">
        <h2>Section 4</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
      </div>
`;



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
//creates a <li> list item for each section tage on the document.
main.appendChild(newSection);
const sections = document.querySelectorAll("section");
for(let i = 0; i < sections.length; i++){
    navList.innerHTML += `
        <li class="menu__link">
            <a href="#section${navList.children.length + 1}">${"Section " + (navList.children.length + 1)}
            </a>
        </li>`
}


// Add class 'active' to section when near top of viewport
// Set sections as active
function setActiveSection() {
    sections.forEach((section, index) => {
       // grabs all nav <li>
        const navItems = document.querySelectorAll(".menu__link");
        //gets the x/y sizing and details from the section loaded in foreach
        const rect = section.getBoundingClientRect();
        //sets navitem to the numerical equavilent to the section
        const navItem = navItems[index];
        if(rect.top >= 0 && rect.top <= window.innerHeight / 1.3) {
            //sets active class for section
            section.classList.add("your-active-class");
            //sets active class in nav list for section
            navItem.classList.add("active-nav-item");
        } else {
            //removes active class for section
            section.classList.remove("your-active-class");
            //removes active class in nav list for section
            navItem.classList.remove("active-nav-item");
        }
    });

}






window.addEventListener('scroll', setActiveSection);
//shows backbutton near bottom of page. 80 to add a bit of buffer if the user is not 100% at the bottom. Lines up with the black footer section
function showBackToTopButton(){
    if(window.scrollY >= document.documentElement.scrollHeight - window.innerHeight - 80) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}
//runs function on scroll to check if back to top button should display
window.onscroll = function() {
    showBackToTopButton();
}

//event listener for the button click to move to the top of the page. 
backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0
    });
});