let title = document.getElementById("title");

let ismingiz = prompt("ismingizdi kiritiing");
let vazn = prompt("vazningizdi kiriting");
let boy = prompt(`bo'yingizdi kiritiing`);

let res = vazn / boy ** 2;

if (res < 18.5) {
    title.textContent = "siz ozg'insiz"
} else if (res>=18.5 && res <=24.9) {
    title.textContent = "siz normal holatdasiz"
} else if (res>=25 && res <=29.9) {
    title.textContent = "sizda ortiqcha vazin bor"
} else if (res>=30) {
    title.textContent = "siz semisiz"
}

