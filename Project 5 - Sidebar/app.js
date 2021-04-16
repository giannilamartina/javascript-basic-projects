const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function() {
// A longer method
   /* if(sidebar.classList.contains('show-sidebar')){
        sidebar.classList.remove('show-sidebar');
    }
    else {
        sidebar.classList.add('show-sidebar');
    }
}); */ 

// A shorter method
sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar');
});

//CSS IS SETUP TO HIDE THE SIDEBAR BY DEFAULT 
//AND TOGGLE THE CLASS THAT HAS THE VALUE OF TRANSFORM TRANSLATE 0