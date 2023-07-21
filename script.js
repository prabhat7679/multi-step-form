
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

    const arcadeClass= document.getElementsByClassName('arcadeClass')
    const advancedClass = document.getElementsByClassName('advancedClass')
    const proClass = document.getElementsByClassName('proClass');
    const plan1 = document.getElementById('plan1');
    const plan2 = document.getElementById('plan2');
    const plan3 = document.getElementById('plan3');

    const checkbox1= document.getElementById("checkbox1")
    const checkbox2= document.getElementById("checkbox2")
    const checkbox3= document.getElementById("checkbox3")

    const service1= document.getElementsByClassName("service1")
    const service2= document.getElementsByClassName("service2")
    const service3= document.getElementsByClassName("service3")

    const paraId1 = document.getElementById("paraId1")
    const spanId1 = document.getElementById("spanId1")
    const paraId2 = document.getElementById("paraId2")
    const spanId2 = document.getElementById("spanId2")
    const paraId3 = document.getElementById("paraId3")
         const spanId3 = document.getElementById("spanId3")

    let cost1=document.getElementById("cost1");
    let cost1Title=document.getElementById("cost1Title");
    let selectPlan = false;

   let flag1=false;
   let flag2=false;
   let flag3=false;
   let totalCost=0;


    container.addEventListener("click", function(event){
      
      if(event.target.classList.contains('arcadeClass')){

        if( Arcade.innerText.includes('mo'))
        {
         cost1Title.innerText= `Arcade(per monthly)`;
        }else{
         cost1Title.innerText= `Arcade(per yearly)`;
        }

        cost1.innerText = Arcade.innerText;
         console.log(cost1,cost1Title)
         selectPlan=true;
         
         plan1.style.border="2px solid darkblue";
         plan2.style.border="1px solid blue";
         plan3.style.border="1px solid blue";

      }else if(event.target.classList.contains('advancedClass')){
         if( Advanced.innerText.includes('mo'))
         {
          cost1Title.innerText= `Advanced(per monthly)`; 
         }else
         {
            cost1Title.innerText= `Advanced(per yearly)`;
         }

         cost1.innerText = Advanced.innerText;
         console.log(cost1,cost1Title)
         selectPlan=true;
        
         plan2.style.border="2px solid darkblue";
         plan1.style.border="1px solid blue";
         plan3.style.border="1px solid blue";

      }else if(event.target.classList.contains('proClass')){
         // console.log("pro")
         if( Pro.innerText.includes('mo'))
         {
          cost1Title.innerText= `Pro(per monthly)`;  
         }else{
            cost1Title.innerText= `Pro(per yearly)`;
         }

         cost1.innerText = Pro.innerText;
         console.log(cost1,cost1Title)
         selectPlan=true;
         
         plan3.style.border="2px solid darkblue";
         plan2.style.border="1px solid blue";
         plan1.style.border="1px solid blue";
      }

      // console.log((event.target.classList.contains("checkbox")))
      else if(event.target.classList.contains('next-step'))
      {
          allNextButtonFn(event)
          
      }else if(event.target.classList.contains('go-back'))
      {
          allBackButtonFn(event)   
      }else if(event.target.id === "toggle")
      {
         // console.log("asdhiak")
         toggleFunction()
      }
      else if(event.target.classList.contains("checkbox"))
      {
         checkBox(event.target)
         
      }
 

    })

   function allNextButtonFn(event){

      if(event.target === fstBtnNext)
         {
            // formValidate()
            if(true)
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
            if (selectPlan) {
              secondContainer.style.display="none";
              thirdContainer.style.display="block";
              thirdContainer.style.display="flex";
              two.style.background = "none";
              two.style.color="white";
              three.style.background="rgb(213, 242, 252)";
              three.style.color="black";

              const result0= Number(cost1.innerText.replace(/\$|\/yr|\/mo|\+/g,''))
            //   console.log(result0)
              totalCost+=result0;

            }

         }
         else if(event.target === thdBtnNext)
         {
            thirdContainer.style.display="none";
            forthContainer.style.display="block";
            forthContainer.style.display="flex";
            three.style.background = "none";
            three.style.color="white";
            four.style.background="rgb(213, 242, 252)";
            four.style.color="black";

         if(checkbox1.checked){
            // console.log("check1")

            paraId1.innerText = service1[0].children[0].textContent;
            spanId1.innerText = addon1Price.textContent;

            const result1 = Number(spanId1.innerText.replace(/\$|\/yr|\/mo|\+/g,''))
            totalCost+=result1;
         }
         if(checkbox2.checked){
            // console.log("check2")

            paraId2.innerText = service2[0].children[0].textContent;
            spanId2.innerText = addon2Price.textContent;

            const result2 = Number(spanId2.innerText.replace(/\$|\/yr|\/mo|\+/g,''))
            totalCost+=result2;
         }
         if(checkbox3.checked)
         {
            // console.log("checkd3")

            paraId3.innerText = service3[0].children[0].textContent;
            spanId3.innerText = addon3Price.textContent;

            const result3 = Number(spanId3.innerText.replace(/\$|\/yr|\/mo|\+/g,''))
            totalCost+=result3;
         }
        
         let totalId = document.getElementById("totalId");
         let perYear= document.getElementById("perYear");
         // let cost1=document.getElementById("cost1");

         if(cost1 !== undefined)
         {
         cost1Arr=cost1.innerText.split('');
         }
         if(cost1Arr.includes('y')){
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

        totalCost =0 ;
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

         const paraId1 = document.getElementById("paraId1");
         const spanId1 = document.getElementById("spanId1")

         const paraId2 = document.getElementById("paraId2");
         const spanId2 = document.getElementById("spanId2")

         const paraId3 = document.getElementById("paraId3");
         const spanId3 = document.getElementById("spanId3");

         const result1 = Number(spanId1.innerText.replace(/\$|\/yr|\/mo|\+/g,''))
         totalCost-=result1;

         const result2 = Number(spanId2.innerText.replace(/\$|\/yr|\/mo|\+/g,''))
         totalCost-=result2;

         const result3 = Number(spanId3.innerText.replace(/\$|\/yr|\/mo|\+/g,''))
         totalCost-=result3;
         
         paraId1.innerText="";
         paraId2.innerText="";
         paraId3.innerText="";
         spanId1.innerText="";
         spanId2.innerText="";
         spanId3.innerText="";
         // perYear.innerText="";
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
    
    function checkBox(event)
    {
      // console.log(event)
   
      if(event === checkbox1 && checkbox1.checked)
      {
         
         paraId1.innerText = service1[0].children[0].textContent;
         spanId1.innerText = addon1Price.textContent;

      }

      if(event === checkbox2 && checkbox2.checked)
      {
         
         paraId2.innerText = service2[0].children[0].textContent;
         spanId2.innerText = addon2Price.textContent;

      }
      
      if(event === checkbox3 && checkbox3.checked)
      {

         paraId3.innerText = service3[0].children[0].textContent;
         spanId3.innerText = addon3Price.textContent;
         
      }
    }




    

           


    
    
 
 

    

