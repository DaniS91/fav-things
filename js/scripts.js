window.addEventListener("load", function() {
  
  function listArray(e) {
    e.preventDefault();
    const input1 = document.querySelector("input#input1").value;
    const input2 = document.querySelector("input#input2").value;
    const input3 = document.querySelector("input#input3").value;
    let favoriteArray = [input1, input2, input3];
    let pElement = document.createElement("p");
    pElement = favoriteArray.join(", ");
    let body = document.querySelector("body");
    body.append(pElement);
  }
    
  const form = document.querySelector("form");
  form.addEventListener("submit", listArray); 
});