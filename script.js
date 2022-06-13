const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})

const validator = () => {
  const email = document.getElementById("email");

    if (email.validity.typeMismatch) {
      email.setCustomValidity("Please input a valid e-mail address!");
      email.reportValidity();
    } else {
      email.setCustomValidity("");
    }
  
  
  
}
let matricNo = document.getElementById("matricNo");
  
  matricNo.addEventListener('keyup', function(event){
    let currentValue = event.target.value;
      if(isNaN(currentValue)) {
        event.target.value = currentValue.slice(0,-1)
          matricNo.setCustomValidity(
            "Only numbers are accepted in this field"
            );
          matricNo.reportValidity();
      }else{
          matricNo.setCustomValidity("");
      }
  })


let regSubmit = document.getElementById("registrationForm")
regSubmit.addEventListener("submit", function(event){
  validator();
})