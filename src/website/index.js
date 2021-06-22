const input = document.getElementById("inputbox");
const items = document.getElementById("items");
const minus = document.getElementById("minus");
const x = document.getElementById("x");

const fs = require("fs")

if (!fs.existsSync("db.json")) fs.writeFileSync("db.json", "[]")
JSON.parse(fs.readFileSync("db.json")).forEach(itema => {
	const item = document.createElement('li');
	item.appendChild(document.createTextNode(itema));
	items.appendChild(item);
	item.addEventListener("click", () => {
	  items.removeChild(item)
	})
})
input.addEventListener("keyup", ({key}) => {
  if (key === "Enter") {
	  if(input.value) {
		const item = document.createElement('li');
		item.appendChild(document.createTextNode(input.value));
		items.appendChild(item);
		item.addEventListener("click", () => {
		  items.removeChild(item)
		})
	  } else {
		alert("your input is empty!")
	  }
  }
})

x.addEventListener("click", () => {
	fs.writeFileSync("db.json", JSON.stringify([...items.children].map(e=>e.innerHTML)));
	window.close()
})
