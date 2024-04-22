const navbarexpand = () => {
    const sidebarButton = document.getElementById('sidebar-button');
    const navbar = document.getElementById("navbar");
    const sidebar = document.getElementById('sidebar');
    navbar.addEventListener("mouseover", (event) => {
  
        
            // Open the sidebar
            sidebar.classList.add('opened');
            sidebarButton.textContent = '➴ menu';
    
    });
    navbar.addEventListener("mouseout", (event) => {
    
              sidebar.classList.remove('opened');
              sidebarButton.textContent = '➵ menu';
      
      });
  };
  

  document.addEventListener("DOMContentLoaded", (event) => {
    // We wrap each question in a try-catch so that way even if
    // your code for one question errors, the other ones
    // will work.
    const name = document.getElementById("name");
    try {
      navbarexpand();
    } catch (e) {
      console.error(e);
    }
  
  });