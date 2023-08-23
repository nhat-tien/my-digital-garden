let $toggleButton = document.querySelector("#toggle-theme-button");


function toggleTheme() {
    let $html = document.querySelector("html");

    if($html.classList.contains("dark-theme")) {
        $html.classList.remove("dark-theme");
        sessionStorage.removeItem("dark_theme");
        changeIconTheme("day",$toggleButton);
    } else {
        $html.classList.add("dark-theme");
        sessionStorage.setItem("dark_theme", "true");
        changeIconTheme("night",$toggleButton);    
    }
}

/**
 * 
 * @param {string} theme 
 * @param {HTMLDivElement} element 
 */
function changeIconTheme(theme, element) {
    if(theme == 'day') {
        element.innerHTML = `
        <svg fill="var(--icon_floatmenu_color)" width="20px" height="20px" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"/>
        </svg>
        `;
    } else if(theme == "night") {
        element.innerHTML = `
        <svg  width="20px" height="20px" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="var(--icon_floatmenu_color)" viewBox="0 0 18 20">
            <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"/>
        </svg>
        `
    }
}

$toggleButton.addEventListener("click", toggleTheme);