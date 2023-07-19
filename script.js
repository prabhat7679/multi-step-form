
    const checkbox = document.getElementById('toggle');
    const Arcade = document.getElementById('Arcade');
    const Advanced = document.getElementById('Advanced');
    const Pro = document.getElementById('Pro');
    const errorMessage= document.getElementsByClassName('error-field')

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

    const backSecBtn = document.getElementById("backSecBtn");
    const backthirdBtn = document.getElementById("backthirdBtn");
    const backforthBtn = document.getElementById("backforthBtn");


    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    const four = document.getElementById("four");

    container.addEventListener("click", function(event){

         if(event.target === fstBtnNext)
         {
           
            if(formValidate())
            {
                
               firstContainer.style.display="none";
               secondContainer.style.display="block";
               secondContainer.style.display="flex";
               one.style.background = "none";
               one.style.color="white";
               two.style.background="rgb(213, 242, 252)";
               two.style.color="black";
            }

         }
         if(event.target === secBtnNext)
         {
            secondContainer.style.display="none";
            thirdContainer.style.display="block";
            thirdContainer.style.display="flex";
            two.style.background = "none";
            two.style.color="white";
            three.style.background="rgb(213, 242, 252)";
            three.style.color="black";

         }
         if(event.target === thdBtnNext)
         {
            thirdContainer.style.display="none";
            forthContainer.style.display="block";
            forthContainer.style.display="flex";
            three.style.background = "none";
            three.style.color="white";
            four.style.background="rgb(213, 242, 252)";
            four.style.color="black";

         }
         if(event.target === forthBtnNext)
         {
            forthContainer.style.display="none";
            fifthContainer.style.display="block";
            fifthContainer.style.display="flex";

         }
         if(event.target === backSecBtn )
         {
            secondContainer.style.display="none";           
            firstContainer.style.display="block";
            firstContainer.style.display="flex";
            two.style.background = "none";
            two.style.color="white";
            one.style.background="rgb(213, 242, 252)";
            one.style.color="black";
             count=0;
         }

         if(event.target === backthirdBtn )
         {
            secondContainer.style.display="block";           
            secondContainer.style.display="flex";
            thirdContainer.style.display="none";
            three.style.background = "none";
            three.style.color="white";
            two.style.background="rgb(213, 242, 252)";
            two.style.color="black";
         }
         
         if(event.target === backforthBtn )
         {
            thirdContainer.style.display="block";
            thirdContainer.style.display="flex";
            forthContainer.style.display="none";
            four.style.background = "none";
            four.style.color="white";
            three.style.background="rgb(213, 242, 252)";
            three.style.color="black";
            
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

       let count=0;
    function formValidate()
    { 
      const name=document.querySelector('#name').value;
      const email=document.querySelector('#email').value;
      const number = document.querySelector('#number').value;

        if (name.length < 3 || (!/^[a-zA-Z]+$/.test(name)))
         {
          document.querySelector("#error1").style.display = "block";
        
         return false;
       }
       else{
         document.querySelector("#error1").style.display = "none";
         count++;
       }

       if(!email.includes("@gmail.com"))
       {
         document.querySelector("#error2").style.display = "block";
         return false;
       }else
      {
         document.querySelector("#error2").style.display = "none";
         count++;
      }
       
      if(number.length !=10)
      {
         document.querySelector("#error3").style.display = "block";
         return false;
      }else
      {
         document.querySelector("#error3").style.display = "none";
         count++;
          if(count=== 3)
            {
              return true;
            }
      }    
    }

    

