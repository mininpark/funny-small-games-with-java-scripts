var btn = document.querySelector("button");
//if you find the query "button", then addEventListner to the button by clicking the button to call function which is handleClick

function handleClick() {
  alert("I got click");
}

btn.addEventListener("click", handleClick);
