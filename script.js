
    const checkbox = document.getElementById('toggle');
    const Arcade = document.getElementById('Arcade');
    const Advanced = document.getElementById('Advanced');
    const Pro = document.getElementById('Pro');

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
    });
