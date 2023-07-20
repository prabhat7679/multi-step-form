
    const toggle = document.getElementById('toggle');
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

    const addon1Price = document.getElementById("addon1Price")
    const addon2Price = document.getElementById("addon2Price")
    const addon3Price = document.getElementById("addon3Price")

    const planFlag= false;

// console.log(addon1Price, addon2Price, addon3Price)

    container.addEventListener("click", function(event){
      // console.log(event.target.classList.contains('next-step'))
      // console.log(event.target.classList.contains('go-back'))
      // console.log(event.target.classList.contains("allPlans"))
      // console.log(event.target)
      console.log((event.target.classList.contains("checkbox")))
      if(event.target.classList.contains('next-step'))
      {
          allNextButtonFn(event)
          
      }else if(event.target.classList.contains('go-back'))
      {
          allBackButtonFn(event)   
      }else if(event.target.id === "toggle")
      {
         // console.log("asdhiak")
         toggleFunction()
      }else if(event.target.classList.contains("allPlans"))
      {
         allPlansFn(event.target)
      }else if(event.target.classList.contains("checkbox"))
      {
         checkBox(event.target)
         
      }
 

    })

   function allNextButtonFn(event){

      if(event.target === fstBtnNext)
         {
            // formValidate()
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
         else if(event.target === secBtnNext)
         {
            if (selectedPlans.length > 0) {
              secondContainer.style.display="none";
              thirdContainer.style.display="block";
              thirdContainer.style.display="flex";
              two.style.background = "none";
              two.style.color="white";
              three.style.background="rgb(213, 242, 252)";
              three.style.color="black";
            }

         }
         else if(event.target === thdBtnNext)
         {
            // console.log(selectedPlans)
         // {
            thirdContainer.style.display="none";
            forthContainer.style.display="block";
            forthContainer.style.display="flex";
            three.style.background = "none";
            three.style.color="white";
            four.style.background="rgb(213, 242, 252)";
            four.style.color="black";
         //   }

         let totalId = document.getElementById("totalId");
         let perYear= document.getElementById("perYear");
         let cost1=document.getElementById("cost1");

         cost1=cost1.innerText.split('');
         console.log(cost1)

         if(cost1.includes('y')){
         totalId.innerText = `+$${totalCost}/yr`;
         perYear.innerText =`Total(per year)`;
         console.log(totalCost);
         }else{
            totalId.innerText = `+$${totalCost}/mo`
         }
      
         

         }
         else if(event.target === forthBtnNext)
         {
           
            forthContainer.style.display="none";
            fifthContainer.style.display="block";
            fifthContainer.style.display="flex";

         }
    }

    function allBackButtonFn(event)
    {
      if(event.target === backSecBtn )
      {
         secondContainer.style.display="none";           
         firstContainer.style.display="block";
         firstContainer.style.display="flex";
         two.style.background = "none";
         two.style.color="white";
         one.style.background="rgb(213, 242, 252)";
         one.style.color="black";
         //  count=0;
         flag1=false;
         flag2=false;
         flag3=false;
      }

      else if(event.target === backthirdBtn )
      {
         secondContainer.style.display="block";           
         secondContainer.style.display="flex";
         thirdContainer.style.display="none";
         three.style.background = "none";
         three.style.color="white";
         two.style.background="rgb(213, 242, 252)";
         two.style.color="black";
      }
      
      else if(event.target === backforthBtn )
      {
         thirdContainer.style.display="block";
         thirdContainer.style.display="flex";
         forthContainer.style.display="none";
         four.style.background = "none";
         four.style.color="white";
         three.style.background="rgb(213, 242, 252)";
         three.style.color="black";

         let perYear= document.getElementById("perYear");
         let totalId = document.getElementById("totalId");

         perYear.innerText="";
         totalId.innerText="";
         
         
      }
    }




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
         // count++;
         flag1=true;
       }

       if(!email.includes("@gmail.com"))
       {
         document.querySelector("#error2").style.display = "block";
         return false;
       }else
      {
         document.querySelector("#error2").style.display = "none";
         // count++;
         flag2=true;
      }
       
      if(number.length !=10)
      {
         document.querySelector("#error3").style.display = "block";
         return false;
      }else
      {
         document.querySelector("#error3").style.display = "none";
         // count++;
         flag3=true;
         if(flag1== true && flag2== true && flag3== true)
         {
            return true;
         }
      }  
    }


   function toggleFunction() {
      if (toggle.checked) {
        Arcade.textContent = '$90/yr';
        Advanced.textContent = '$120/yr';
        Pro.textContent = '$150/yr';

        addon1Price.textContent = '+$10/yr';
        addon2Price.textContent = '+$20/yr'
        addon3Price.textContent = '+$20/yr'

        
        const paraArcade = document.createElement('p');
      //   paraArcade.innerHTML = '2 months free';
      //   Arcade.appendChild(paraArcade);
    
        const paraAdvanced = document.createElement('p');
      //   paraAdvanced.innerHTML = '2 months free';
      //   Advanced.appendChild(paraAdvanced);
    
        const paraPro = document.createElement('p');
        paraPro.innerHTML = '2 months free';
      //   Pro.appendChild(paraPro);

      } else {
        Arcade.textContent = '$9/mo';
        Advanced.textContent = '$12/mo';
        Pro.textContent = '$15/mo';

        addon1Price.textContent = '+$1/mo';
        addon2Price.textContent = '+$2/mo'
        addon3Price.textContent = '+$2/mo'

      }

    //   formValidate()
    };
    
      let flag1=false;
      let flag2=false;
      let flag3=false;
      let totalCost = 0;

    

    const plans = document.querySelectorAll('.allPlans');
   //  console.log(plans)
    let selectedPlans =[];
   //  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
   //  const forthContainerContent = document.getElementById('forthContainerContent');
   //  let totalCost = 0;

    function isPlanSelected(planId) {
      return selectedPlans.includes(planId);
    }
        
      function allPlansFn(plan) {
     
        const planId = plan.getAttribute('id');
       
        if (!isPlanSelected(planId)) {
          // Deselect all other plans
          plans.forEach(p=> {
            if (p.getAttribute('id') !== planId) {
              p.classList.remove('selected');
            }
          });
    
          // Select the clicked plan
          selectedPlans = [planId];

          

          const value1= Arcade.textContent;
         //  console.log(val1);

          let cost1=document.getElementById("cost1");
          let cost1Title=document.getElementById("cost1Title");
         //  console.log(plan.children[2].textContent,'hnhgnh');
          cost1.innerText= plan.children[2].textContent;

          if(plan.children[2].textContent.includes('mo')){
            cost1Title.textContent = `${plan.children[1].textContent}(per monthly)`
          }else{
            cost1Title.textContent = `${plan.children[1].textContent}(per yearly)`
          }
          plan.classList.add('selected');
         //  console.log(plan.children)

         const result = Number(cost1.innerText.replace(/\$|\/yr|\/mo|\+/g,''))
         totalCost+=result;
          
        }
      };
  
    function checkBox(event)
    {
      console.log(event)
      // console.log("bfeodweodweo")
      const checkbox1= document.getElementById("checkbox1")
      const checkbox2= document.getElementById("checkbox2")
      const checkbox3= document.getElementById("checkbox3")

      if(event === checkbox1)
      {
         const service1= document.getElementsByClassName("service1")

         // console.log(service1[0].children[0].textContent)
         const paraId1 = document.getElementById("paraId1");
         const spanId1 = document.getElementById("spanId1")
         // console.log(paraId1, spanId1)
         paraId1.innerText = service1[0].children[0].textContent;
         spanId1.innerText = addon1Price.textContent;
         
         const result = Number(spanId1.innerText.replace(/\$|\/yr|\/mo|\+/g,''))
         totalCost+=result;
         console.log(result)
      }

      if(event === checkbox2)
      {
         const service2= document.getElementsByClassName("service2")

         // console.log(service1[0].children[0].textContent)
         const paraId2 = document.getElementById("paraId2");
         const spanId2 = document.getElementById("spanId2")
         // console.log(paraId1, spanId1)
         paraId2.innerText = service2[0].children[0].textContent;
         spanId2.innerText = addon2Price.textContent;

         const result = Number(spanId2.innerText.replace(/\$|\/yr|\/mo|\+/g,''));
         totalCost+=result;
         console.log(result)
      }
      
      if(event === checkbox3)
      {
         const service3= document.getElementsByClassName("service3")

         // console.log(service1[0].children[0].textContent)
         const paraId3 = document.getElementById("paraId3");
         const spanId3 = document.getElementById("spanId3")
         // console.log(paraId1, spanId1)
         paraId3.innerText = service3[0].children[0].textContent;
         spanId3.innerText = addon3Price.textContent;
         
         const result = Number(spanId3.innerText.replace(/\$|\/yr|\/mo|\+/g,''))
         totalCost+=result;
         console.log(result)
      }
      
     
    }

    

           


    
    
 
 

    

