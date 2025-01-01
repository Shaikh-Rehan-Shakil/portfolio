//selectors
const $toggleTheme = document.querySelector('#darkModeToggle')
const $sunIcon = document.querySelector('#sunIcon');
const $moonIcon = document.querySelector('#moonIcon');
const $userTheme = localStorage.getItem("theme");
const $systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
//handlers
const iconToggle = () => {
    $moonIcon.classList.toggle('hidden');
    $sunIcon.classList.toggle('hidden');
};
const themeCheck = () => {
    if ($userTheme === "dark" || (!$userTheme && $systemTheme)) {
        document.documentElement.classList.add("dark");
        $moonIcon.classList.add("hidden");
        $sunIcon.classList.remove("hidden");
    } else {
        $sunIcon.classList.add("hidden");
    }
};
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        console.log('removed darkk theme')
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
};
// on render
themeCheck();
// event  listener
$toggleTheme.addEventListener("click", themeSwitch);
