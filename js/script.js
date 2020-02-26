
//STOPING VIDEO IN LIGHTBOX WHEN CLOSED
let closeButton=document.getElementsByClassName('close-btn');
let nextButton=document.getElementsByClassName('next-prev');
console.log(nextButton);
console.log(closeButton);
for(let i=4;i<closeButton.length;i++){
	let div=closeButton[i].getAttribute("data-parent");
	let query="#"+div+" iframe";
	closeButton[i].addEventListener('click',function(){
		let video=document.querySelector(query);
		let url=video.getAttribute("src");
		console.log(url);
		console.log(video);
		video.setAttribute("src", "");
		video.setAttribute("src", url);
	});
}
for(let i=8;i<nextButton.length;i++){
	let div=nextButton[i].getAttribute("data-parent");
	let query="#"+div+" iframe";
	nextButton[i].addEventListener('click',function(){
		let video=document.querySelector(query);
		let url=video.getAttribute("src");
		console.log(url);
		console.log(video);
		video.setAttribute("src", "");
		video.setAttribute("src", url);
	});
}


// HAMBURGER NAVIGATION
const navSlide=()=>{
	const burger=document.querySelector(".burger");
	const nav=document.querySelector("nav");
	const navLinks=document.querySelectorAll('nav a');
	console.log(navLinks);
	//TOGGLE NAV
	burger.addEventListener('click',function(){
		nav.classList.toggle('nav-active');
	});
}
navSlide();