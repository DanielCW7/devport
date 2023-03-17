const project_section_desktop = document.getElementById('project-list-desktop');
const options = document.querySelectorAll('.selection');
const bioImg = document.getElementById('bio-image')
const DL = document.getElementById('resume-bbl-inner')
let counter = 0
let image_counter = 0
let i = 0

const list = [

    {
        title: 'React Weather app',
        img: 'url(images/react_weather.png)',
        demoLink: 'https://danielcw7.github.io/weather-app-v1/',
        codeLink: 'https://github.com/DanielCW7/weather-app-v1',
        desc: 'This was my most recent developer portfolio webpage, which was built mainly using Reactjs. It also helped me land my first job in web development!',
        id:0
    },
    {
        title: 'React Portfolio',
        img: 'url(images/react_portfolio.png)',
        demoLink: 'https://danielcw7.github.io/devportfolio/',
        codeLink: 'https://github.com/DanielCW7/devportfolio',
        desc: 'This was my first project using Reactjs. I learned how to use the Reactjs library and it also helped me land my first job in web development!',
        id:1
    },
    {
        title: 'Github Finder',
        img: 'url(images/github_finder.png)',
        demoLink: 'https://danielcw7.github.io/github_finder/',
        codeLink: 'https://github.com/DanielCW7/github_finder.git',
        desc: 'This project was something I made alongside a Udemy instructor. Though I don\'t consider it a project that I made by myself, it does help having this as a Reactjs reference',
        id:2
    },
    {
        title: 'Tic Tac Toe!',
        img: 'url(images/tictactoe.png)',
        demoLink: 'https://danielcw7.github.io/tictactoe/',
        codeLink: 'https://github.com/DanielCW7/tictactoe.git',
        desc: 'This was an interesting one. I tried using vanilla Javascript to build this app, but it quickly became garbled and unreadable. So I opted to learn some JQuery to help simplify my code!',
        id:3
    },
    {
        title: 'Word Game',
        img: 'url(images/word_game.png)',
        demoLink: 'https://danielcw7.github.io/gameshow/',
        codeLink: 'https://github.com/DanielCW7/gameshow.git',
        desc: 'This game was a Treehouse Techdegree project that helped me learn a lot about Javascript and CSS animations.',
        id:4
    },
    {
        title: 'Concrete Calculator',
        img: 'url(images/concrete_calc.png)',
        demoLink: 'https://danielcw7.github.io/yield_calculator/',
        codeLink: 'https://github.com/DanielCW7/yield_calculator.git',
        desc: 'This one is fairly simple. It is a calculator designed to help you find out how much concrete you need for a construction project. Fun fact: My original focus was in concrete construction management.',
        id:5
    },
    {
        title: 'Google UI',
        img: 'url(images/google_ui.png)',
        demoLink: 'https://danielcw7.github.io/Google_home/',
        codeLink: 'https://github.com/DanielCW7/Google_home.git',
        desc: 'This project\'s purpose was to simply recreate the Google homepage with just HTML & CSS! It was a fun CSS challenge to undertake!',
        id:6
    },
    {
        title: 'React Todo List',
        img: 'url(images/todo_list.png)',
        demoLink: 'https://danielcw7.github.io/todo/',
        codeLink: 'https://github.com/DanielCW7/todo.git',
        desc: 'This todo list was built using Reactjs and it really helped me understand how to make changes to the DOM, which I did not have much experience with before.',
        id:7
    },
    {
        title: 'React Sorting Visualizer',
        img: 'url(images/visualizer.png)',
        demoLink: 'https://danielcw7.github.io/sorter/',
        codeLink: 'https://github.com/DanielCW7/sorter.git',
        desc: 'Easily the most entertaining of all my projects, the sorting visualizer! It was built with Reactjs and I spent quite a bit of time trying to figure out how to make this \"bubble sort\" algorithm work. As you can see, my hard work paid off!',
        id:8
}   
      
]

const images = [
    { img: 'images/lens.JPG' },
    { img: 'images/coral2.jpg' },
    { img: 'images/starbucks.JPG' },
    { img: 'images/leaf.JPG' }
]

function nextPhoto() {
    i += 1
    if(i > 3) {
        i = 0
        bioImg.style.backgroundImage = `url('${images[i].img}')` 
    }

    bioImg.style.backgroundImage = `url('${images[i].img}')` 
}

// default project list
function populate_desktop() {

        list.map(project => {
        let {img, title, demoLink, codeLink, desc, id} = project;

        let block = 
            `<li class="project-image" style="background-image:${img};" id="project${id}">
                <div class="project-btn-container">
                    <a title="Demo project" href="${demoLink}" target="_blank"><svg alt="demo" version="1.1" id="play" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 122.88" style="enable-background:new 0 0 122.88 122.88" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M61.44,0c33.93,0,61.44,27.51,61.44,61.44s-27.51,61.44-61.44,61.44S0,95.37,0,61.44S27.51,0,61.44,0L61.44,0z M84.91,65.52c3.41-2.2,3.41-4.66,0-6.61L49.63,38.63c-2.78-1.75-5.69-0.72-5.61,2.92l0.11,40.98c0.24,3.94,2.49,5.02,5.8,3.19 L84.91,65.52L84.91,65.52z"></path></g></svg></a>
                    <h2 class="project-title"> ${title} </h2>
                    <a title="Source code" href="${codeLink}" target="_blank"><svg alt="github" id="github" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="2 7 20 10"><path style="/* width: 20px; *//* height: 20px; */" d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path></svg></a>
                    </div>                
                <p class="project-description">${desc}</p>
            </li>`;

            project_section_desktop.innerHTML += block
        })

        list.map(item => {
            if(item.id === 0) {
                document.getElementById(`project${item.id}`).className = 'project-image active'
            } else if(item.id === 1) {
                document.getElementById(`project${item.id}`).className = 'project-image secondary-right'
            } else if(item.id === 2) {
                document.getElementById(`project${item.id}`).className = 'project-image tertiary-right'
            } else if(item.id === list.length - 1) {
                document.getElementById(`project${item.id}`).className = 'project-image secondary-left'
            } else if(item.id === list.length - 2) {
                document.getElementById(`project${item.id}`).className = 'project-image tertiary-left'
            } else if(item.id < list.length - 2) {
                document.getElementById(`project${item.id}`).className = 'project-image inactive-left'
            } else {
                document.getElementById(`project${item.id}`).className = 'project-image inactive-right'
            }
        })
        reveal()
    }

// left arrow
function left() {
    counter -= 1
    if(counter < 0) {
        counter = list.length - 1
        document.getElementById(`project${2}`).className = 'project-image inactive-right'        
        document.getElementById(`project${1}`).className = 'project-image tertiary-right'                
        document.getElementById(`project${0}`).className = 'project-image secondary-right'
        document.getElementById(`project${counter}`).className = 'project-image active'
        document.getElementById(`project${counter - 1}`).className = 'project-image secondary-left'
        document.getElementById(`project${counter - 2}`).className = 'project-image tertiary-left'
        document.getElementById(`project${counter - 3}`).className = 'project-image inactive-left'        
    } else if (counter === 0) {
        document.getElementById(`project${counter + 3}`).className = 'project-image inactive-right'        
        document.getElementById(`project${counter + 2}`).className = 'project-image tertiary-right'                
        document.getElementById(`project${counter + 1}`).className = 'project-image secondary-right'
        document.getElementById(`project${counter}`).className = 'project-image active'
        document.getElementById(`project${list.length - 1}`).className = 'project-image secondary-left'
        document.getElementById(`project${list.length - 2}`).className = 'project-image tertiary-left'
        document.getElementById(`project${list.length - 3}`).className = 'project-image inactive-left'
    } else if (counter === list.length - 2) {
        document.getElementById(`project${1}`).className = 'project-image inactive-right'        
        document.getElementById(`project${0}`).className = 'project-image tertiary-right'                
        document.getElementById(`project${counter + 1}`).className = 'project-image secondary-right'
        document.getElementById(`project${counter}`).className = 'project-image active'
        document.getElementById(`project${counter - 1}`).className = 'project-image secondary-left'
        document.getElementById(`project${counter - 2}`).className = 'project-image tertiary-left'
        document.getElementById(`project${counter - 3}`).className = 'project-image inactive-left'
    } else if (counter === list.length - 3) {
        document.getElementById(`project${0}`).className = 'project-image inactive-right'        
        document.getElementById(`project${counter + 2}`).className = 'project-image tertiary-right'                
        document.getElementById(`project${counter + 1}`).className = 'project-image secondary-right'
        document.getElementById(`project${counter}`).className = 'project-image active'
        document.getElementById(`project${counter - 1}`).className = 'project-image secondary-left'
        document.getElementById(`project${counter - 2}`).className = 'project-image tertiary-left'
        document.getElementById(`project${counter - 3}`).className = 'project-image inactive-left'
    } else if (counter === 1) {
        document.getElementById(`project${counter + 3}`).className = 'project-image inactive-right'        
        document.getElementById(`project${counter + 2}`).className = 'project-image tertiary-right'                
        document.getElementById(`project${counter + 1}`).className = 'project-image secondary-right'
        document.getElementById(`project${counter}`).className = 'project-image active'
        document.getElementById(`project${counter - 1}`).className = 'project-image secondary-left'
        document.getElementById(`project${list.length - 1}`).className = 'project-image tertiary-left'
        document.getElementById(`project${list.length - 2}`).className = 'project-image inactive-left'
    } else if (counter === 2) {
        document.getElementById(`project${counter + 3}`).className = 'project-image inactive-right'        
        document.getElementById(`project${counter + 2}`).className = 'project-image tertiary-right'                
        document.getElementById(`project${counter + 1}`).className = 'project-image secondary-right'
        document.getElementById(`project${counter}`).className = 'project-image active'
        document.getElementById(`project${counter - 1}`).className = 'project-image secondary-left'
        document.getElementById(`project${counter - 2}`).className = 'project-image tertiary-left'
        document.getElementById(`project${list.length - 1}`).className = 'project-image inactive-left'
    } else {
        document.getElementById(`project${counter + 3}`).className = 'project-image inactive-right'        
        document.getElementById(`project${counter + 2}`).className = 'project-image tertiary-right'                
        document.getElementById(`project${counter + 1}`).className = 'project-image secondary-right'
        document.getElementById(`project${counter}`).className = 'project-image active'
        document.getElementById(`project${counter - 1}`).className = 'project-image secondary-left'
        document.getElementById(`project${counter - 2}`).className = 'project-image tertiary-left'
        document.getElementById(`project${counter - 3}`).className = 'project-image inactive-left'
    } 
    reveal() 

}

// right arrow
function right() {
    counter += 1
    if(counter > list.length - 1) {
        counter = 0
        document.getElementById(`project${counter + 3}`).className = 'project-image inactive-right'        
        document.getElementById(`project${counter + 2}`).className = 'project-image tertiary-right'                
        document.getElementById(`project${counter + 1}`).className = 'project-image secondary-right'
        document.getElementById(`project${counter}`).className = 'project-image active'
        document.getElementById(`project${list.length - 1}`).className = 'project-image secondary-left'
        document.getElementById(`project${list.length - 2}`).className = 'project-image tertiary-left'
        document.getElementById(`project${list.length - 3}`).className = 'project-image inactive-left'        
    } else if (counter === list.length - 1) {
        document.getElementById(`project${2}`).className = 'project-image inactive-right'        
        document.getElementById(`project${1}`).className = 'project-image tertiary-right'                
        document.getElementById(`project${0}`).className = 'project-image secondary-right'
        document.getElementById(`project${counter}`).className = 'project-image active'
        document.getElementById(`project${counter - 1}`).className = 'project-image secondary-left'
        document.getElementById(`project${counter - 2}`).className = 'project-image tertiary-left'
        document.getElementById(`project${counter - 3}`).className = 'project-image inactive-left'
    } else if (counter === list.length - 2) {
        document.getElementById(`project${1}`).className = 'project-image inactive-right'        
        document.getElementById(`project${0}`).className = 'project-image tertiary-right'                
        document.getElementById(`project${counter + 1}`).className = 'project-image secondary-right'
        document.getElementById(`project${counter}`).className = 'project-image active'
        document.getElementById(`project${counter - 1}`).className = 'project-image secondary-left'
        document.getElementById(`project${counter - 2}`).className = 'project-image tertiary-left'
        document.getElementById(`project${counter - 3}`).className = 'project-image inactive-left'
    } else if (counter === list.length - 3) {
        document.getElementById(`project${0}`).className = 'project-image inactive-right'        
        document.getElementById(`project${counter + 2}`).className = 'project-image tertiary-right'                
        document.getElementById(`project${counter + 1}`).className = 'project-image secondary-right'
        document.getElementById(`project${counter}`).className = 'project-image active'
        document.getElementById(`project${counter - 1}`).className = 'project-image secondary-left'
        document.getElementById(`project${counter - 2}`).className = 'project-image tertiary-left'
        document.getElementById(`project${counter - 3}`).className = 'project-image inactive-left'
    } else if (counter === 1) {
        document.getElementById(`project${counter + 3}`).className = 'project-image inactive-right'        
        document.getElementById(`project${counter + 2}`).className = 'project-image tertiary-right'                
        document.getElementById(`project${counter + 1}`).className = 'project-image secondary-right'
        document.getElementById(`project${counter}`).className = 'project-image active'
        document.getElementById(`project${counter - 1}`).className = 'project-image secondary-left'
        document.getElementById(`project${list.length - 1}`).className = 'project-image tertiary-left'
        document.getElementById(`project${list.length - 2}`).className = 'project-image inactive-left'
    } else if (counter === 2) {
        document.getElementById(`project${counter + 3}`).className = 'project-image inactive-right'        
        document.getElementById(`project${counter + 2}`).className = 'project-image tertiary-right'                
        document.getElementById(`project${counter + 1}`).className = 'project-image secondary-right'
        document.getElementById(`project${counter}`).className = 'project-image active'
        document.getElementById(`project${counter - 1}`).className = 'project-image secondary-left'
        document.getElementById(`project${counter - 2}`).className = 'project-image tertiary-left'
        document.getElementById(`project${list.length - 1}`).className = 'project-image inactive-left'
    } else {
        document.getElementById(`project${counter + 3}`).className = 'project-image inactive-right'        
        document.getElementById(`project${counter + 2}`).className = 'project-image tertiary-right'                
        document.getElementById(`project${counter + 1}`).className = 'project-image secondary-right'
        document.getElementById(`project${counter}`).className = 'project-image active'
        document.getElementById(`project${counter - 1}`).className = 'project-image secondary-left'
        document.getElementById(`project${counter - 2}`).className = 'project-image tertiary-left'
        document.getElementById(`project${counter - 3}`).className = 'project-image inactive-left'
    }
    reveal()  
}

// reveals the project contents when active
function reveal() {
    // for every instance of 'active' = true... add this class, else remove this class

    let li = document.querySelectorAll('li')
    let projects = Array.from(li)

    projects.map(item => {
        if(item.classList.contains('active')) {
            item.children[0].className = 'project-btn-container title-revealed'
            item.children[1].className = 'project-description title-revealed'
        } else {
            item.children[0].className = 'project-btn-container title-hidden'
            item.children[1].className = 'project-description title-hidden'
        }
    })
}

// function downloaded() {
//     let resume = document.getElementById('resume-bbl-inner')
//     let text = document.getElementById('resume-bbl-inner').children[7]

//     let entire = document.querySelector('.resume-bbl')
//     let dots = document.querySelectorAll('.res-bbl-1, .res-bbl-2, .res-bbl-3, .res-bbl-4, .res-bbl-5')
//     let collection = Array.from(dots)
    
//     entire.style.pointerEvents = 'none'
    
//     if(window.innerWidth <= 900) {
//         text.innerText = 'Downloaded!'
//         entire.style.background = 'var(--red-color)'
//         collection.forEach(item => {
//             item.style.background = 'var(--red-color)'
//         })
//     } else {
//         resume.children[0].style.animation = 'disappear .3s forwards'
//         resume.children[1].style.animation = 'disappear .3s forwards'
        
//         text.innerText = 'Downloaded!'
//         entire.style.background = 'var(--red-color)'
//         collection.forEach(item => {
//             item.style.background = 'var(--red-color)'
//         })        
//     }
// }

populate_desktop()
setInterval(nextPhoto, 6000)
