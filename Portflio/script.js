document.addEventListener('DOMContentLoaded', function() {
  const icon = document.getElementById('icon');
  const body = document.body;
  const briefhis = document.getElementById('briefhistory');
  const logoborder = document.getElementById('logo');
  const headerborder = document.querySelector('.top');
  const navbar = document.querySelector('.navbar');
  const anavbar = document.querySelectorAll('.navbar a');
  

  icon.addEventListener('click', function() {
    
    body.classList.toggle('dark-mode');
    
    // Update button text
    if (body.classList.contains('dark-mode')) {
        icon.src = "image/sun.png";
        briefhis.style.backgroundColor = 'rgb(24, 24, 24)';
        briefhis.style.borderColor = 'rgb(999, 999, 999)';
        briefhis.style.borderWidth = '0.0000000001px';
        briefhis.style.borderRadius = '20px';
        logoborder.style.borderColor = 'white';
        headerborder.style.borderColor = 'white';
        briefhis.style.color = 'pink';
        /*body.style.color = 'yellowgreen';*/
        navbar.style.backgroundColor = '#3b30a0';
        anavbar.forEach(link => {
            link.style.color = '#d5d0ff';
          });
        navbar.style.color = '#d5d0ff';
        navbar.style.borderRadius = '8px';
    } else {
        icon.src = "image/moon.png";
        briefhis.style.backgroundColor = 'rgb(248, 249, 250)';
        briefhis.style.borderColor = 'rgb(0, 0, 0)';
        briefhis.style.borderRadius = '0px';
        logoborder.style.borderColor = 'red';
        headerborder.style.borderColor = 'red';
        briefhis.style.color = 'black';
        navbar.style.backgroundColor = 'orange';
        anavbar.forEach(link => {
            link.style.color = 'white';
          });
        navbar.style.color = 'white';
        navbar.style.borderRadius = '0px';
        briefhis.style.borderColor = 'rgb(155, 158, 159)';
        briefhis.style.borderWidth = '0.8px';
    }

  });

   
   
   
});

