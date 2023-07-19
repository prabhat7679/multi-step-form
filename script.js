
    const checkbox = document.getElementById('toggle');
    const Arcade = document.getElementById('Arcade');
    const Advanced = document.getElementById('Advanced');
    const Pro = document.getElementById('Pro');
    const errorMessage= document.getElementById('error-field')

    const container = document.querySelector(".container")
    
    const firstContainer = document.querySelector("#firstContainer");
    const secondContainer = document.querySelector("#secondContainer");
    const thirdContainer = document.querySelector("#thirdContainer");
    const forthContainer = document.querySelector("#forthContainer");
    const fifthContainer = document.querySelector("#fifthContainer");

    const fstBtnNext = document.getElementById("fstBtnNext");
    const secBtnNext = document.getElementById("secBtnNext");
    const thdBtnNext = document.getElementById("thdBtnNext");
    const forthBtnNext = document.getElementById("forthBtnNext");
    // const fifthBtnNext = document.getElementById("fifthBtnNext");

//first-btn-nxt

    container.addEventListener("click", function(event){

            console.log(event.target)
         if(event.target === fstBtnNext)
         {
            firstContainer.style.display="none";
            secondContainer.style.display="block";
            secondContainer.style.display="flex";

         }
         if(event.target === secBtnNext)
         {
            secondContainer.style.display="none";
            thirdContainer.style.display="block";
            thirdContainer.style.display="flex";

         }
         if(event.target === thdBtnNext)
         {
            thirdContainer.style.display="none";
            forthContainer.style.display="block";
            forthContainer.style.display="flex";

         }
         if(event.target === forthBtnNext)
         {
            forthContainer.style.display="none";
            fifthContainer.style.display="block";
            fifthContainer.style.display="flex";

         }
         if(event.target === fstBtnNext)
         {
            firstContainer.style.display="none";
            secondContainer.style.display="block";
            secondContainer.style.display="flex";

         }
    })

    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        Arcade.textContent = '$90/yr';
        Advanced.textContent = '$120/yr';
        Pro.textContent = '$150/yr';
        
        const paraArcade = document.createElement('p');
        paraArcade.innerHTML = '2 months free';
        Arcade.appendChild(paraArcade);
    
        const paraAdvanced = document.createElement('p');
        paraAdvanced.innerHTML = '2 months free';
        Advanced.appendChild(paraAdvanced);
    
        const paraPro = document.createElement('p');
        paraPro.innerHTML = '2 months free';
        Pro.appendChild(paraPro);

      } else {
        Arcade.textContent = '$9/mo';
        Advanced.textContent = '$12/mo';
        Pro.textContent = '$15/mo';
      }

    //   formValidate()
    });


    function formValidate()
    {
        const name=document.querySelector('#name').value;
        const email=document.querySelector('#email').value;
        const number = document.querySelector('#number').value;
    }
