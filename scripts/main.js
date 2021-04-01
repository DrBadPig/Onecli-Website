// JavaScript Document

//OPEN / CLOSE NAVIGATION
function OpenNavMenu() {
	ActivateNavMenu();
}
function ActivateNavMenu() {
	let nav_menu = document.getElementById("main-header-menu");
	let nav_svg = document.getElementById("main-menu-svg");
	let nav_svg_a = document.getElementById("main-menu-svg-active");
	
	nav_menu.classList.toggle("active-back");
	nav_svg.classList.toggle("hidden");
	nav_svg_a.classList.toggle("hidden");
}

// OPEN / CLOSE SOCAILS
function onClickSocials() {
	let socailsList = document.getElementById('socials-list').classList.toggle('hidden');
	let socailsH1 = document.getElementById('socials-h1').classList.toggle('hidden');
}

//OPEN / CLOSE USER SUBMENU
function onClickUserSubmenu() {
	let user_submenu = document.getElementById('user_submenu').classList.toggle('hidden');
}

// OPEN / CLOSE LANGUAGE CHOOSER MENU
function onClickLanguageChooserMenu() {
	let lang_chooser = document.getElementById('language-chooser-menu').classList.toggle('hidden');
}