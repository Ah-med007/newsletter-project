
document.getElementById("email").addEventListener("input", (event) =>{
    const emailPattern = /^(\w{1,30})[@](\w{1,20})[.](\w{1,20})$/g;
    const input = document.getElementById("email");
    const format = document.querySelector(".emailFormat");
    const email = input.value;
    const correctEmail = emailPattern.test(email);
   
    if(!correctEmail && email.length){
        input.classList.add("invalid");
        format.classList.add("block");
    }  else{
        input.classList.remove("invalid");
        format.classList.remove("block"); 
    }
});

document.addEventListener("submit", (event) =>{
    event.preventDefault();
       
        const emailPattern = /^(\w{1,30})[@](\w{1,20})[.](\w{1,20})$/g;
        const input = document.getElementById("email");
        const format = document.querySelector(".emailFormat");
        const email = input.value;
        const correctEmail = emailPattern.test(email);
        const view1 = document.querySelector(".mobile");
        const view2 = document.querySelector(".success");
        
         if(correctEmail && email.length){
         view1.style.display = "none";
         view2.style.display = "flex";

         var userInput = document.getElementById("email").value;
         document.getElementById("userEmailInput").innerHTML = userInput;
        }

        function dismiss(){
           
           view2.style.display = "none"
           view1.style.display = "flex"
           location.reload();
        }
    
    let dismissButton = document.querySelector(".myButt");
    dismissButton.addEventListener("click", dismiss);
  
} );
 
    
