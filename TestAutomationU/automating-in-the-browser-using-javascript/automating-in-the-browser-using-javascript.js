https://testautomationu.applitools.com/automating-in-the-browser-using-javascript/
http://todomvc.com/
http://todomvc.com/examples/vanillajs/

ul = unordered list
li = list item
> immediately below

document.querySelector("body > section > section > ul > li:nth-child(2)")
JSSelector + CSS Selector - executes JS code in console
querySelector = runs CSS Selector

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors

- id '#'
- class '.'
- tag 'li'
- path '>' immediate child
- path ' ' somewhere below
- ':nth-child(1)'

toggle all todos
document.querySelector("#toggle-all").click()

toggle todo
document.querySelector("ul.todo-list > li:nth-child(2) input.toggle").click()

delete todo
document.querySelector("ul.todo-list > li:nth-child(2) button.destroy").click()

document.querySelector("button.clear-completed").click()

document.querySelector("ul.filters > li:nth-child(1) > a").click()
location.hash = "/"
document.querySelector("ul.filters > li:nth-child(2) > a").click()
location.hash = "/active"
document.querySelector("ul.filters > li:nth-child(3) > a").click()
location.hash = "/completed"


document.querySelector("input.new-todo").value="hello";
document.querySelector("input.new-todo").dispatchEvent(new Event('change',{'bubbles':true}));

document.querySelector("ul.todo-list > li:nth-child(3) > div > label").dispatchEvent(new Event('dblclick', {'bubbles':true}))
document.querySelector("ul.todo-list > li:nth-child(3) .edit").value="amended"
document.querySelector("ul.todo-list > li:nth-child(3) .edit").dispatchEvent(new Event('blur'))

for loop
for(var counter=1; counter<20; counter++){
console.log("Hello " + counter);
}

to loop through all and click
var toggles = document.querySelectorAll(".toggle");
for(var togglepos=0; togglepos<toggles.length; togglepos++){
	toggles[togglepos].click()
}


var toggles = document.querySelectorAll(".toggle");
for(var togglepos=0; togglepos<toggles.length; togglepos++){
	if(togglepos%2===1){
		toggles[togglepos].click()
	}
}

or

var toggles = document.querySelectorAll(".toggle");
for(var togglepos=1; togglepos<toggles.length; togglepos+=2){
		toggles[togglepos].click()
}

or

var toggles = document.querySelectorAll(".toggle");
for(var togglepos=1; togglepos<toggles.length; togglepos=togglepos+2){
		toggles[togglepos].click()
	
}
	


var toggles = document.querySelectorAll(".toggle");
var toggleit = false;
for(var togglepos=0; togglepos<toggles.length; togglepos++){
	if(toggleit){
		toggles[togglepos].click();
	}
	toggleit=!toggleit;
}
