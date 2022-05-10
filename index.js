
    const button=document.querySelector(".header-three>i:nth-child(1)");

    
    window.onload = function () {
        checkMode();
    };


    function checkMode()
    {
    let mode=localStorage.getItem("mode");
    let html=document.querySelector("html");
    let sup=document.querySelector(".header-one>h1>sup");
    let search=document.querySelector("#search");
    let icon=document.querySelector("#search-icon");
    let mic=document.querySelector("#mic");
    let suggestion=document.querySelector(".suggestions");
    let suggestionIcons=document.querySelectorAll(".suggestions>div>p");
    let href=document.querySelectorAll("a");
    let videoBack=document.querySelector("#body-two");


   
        if(mode=="light"||mode==undefined||mode==null){
            
                button.classList.remove("fa-sun-o");
                button.classList.add("fa-moon-o");

                

                html.classList.remove("dark-background");
                html.classList.remove("dark-mode-white");
                sup.classList.remove("dark-mode-grey");
                search.classList.remove("dark-background");
                search.removeAttribute("border");
                icon.setAttribute("style","background-color:#f6f4f4; color:black;");
                mic.classList.remove("dark-mode-white");
                mic.setAttribute("style","background-color: #f6f4f4;");
                suggestion.setAttribute("style","background-color:white;");
                suggestionIcons[0].setAttribute("style","background-color: #1b1a1a; color:white;")
                for(let i=1;i<suggestionIcons.length;i++)
                {
                    suggestionIcons[i].removeAttribute("style","background-color:#404040f5;")
                }

                for(let i=0;i<href.length;i++)
                {
                href[i].setAttribute("style","color:black;");
                }

                videoBack.setAttribute("style","background-color:#f5f4f4e8;")
        
    
            } else if(mode=="dark"){
                button.classList.remove("fa-moon-o");
                button.classList.add("fa-sun-o");
                
                //Main document
               html.classList.add("dark-background");
               html.classList.add("dark-mode-white");
               
               //Youtube ka IN
               sup.classList.add("dark-mode-grey");
           
               //search box
               search.classList.add("dark-background");
               search.setAttribute("style","border: 0.1px solid #404040f5;")
           
               //search icon
               
               icon.classList.add("dark-mode-white");
               icon.classList.add("dark-mode-grey");
               icon.setAttribute("style","border:1px solid #404040f5; background-color:#4c4b4bac;")
           
               //mic
               mic.classList.add("dark-mode-white");
               mic.setAttribute("style","background-color: black;")
           
               //suggestion
               suggestion.setAttribute("style","background-color:#212121f5; border-block-color: #606060;");           
   
               suggestionIcons[0].setAttribute("style","background-color: white; color:black;")
   
               for(let i=1;i<suggestionIcons.length;i++)
               {
                   suggestionIcons[i].setAttribute("style","background-color:#404040f5;")
               }
   
               //Links
               for(let i=0;i<href.length;i++)
               {
               href[i].setAttribute("style","color:white;");
               }

              
               videoBack.setAttribute("style"," background-color:#1f1a1ab8;")
           }



    }


button.addEventListener('click',function(e){
    
    if(e.target.classList[1]=="fa-moon-o")
    {
        localStorage.setItem("mode","dark")
        console.log(e.target);
        
    }
    else{
        localStorage.setItem("mode","light")
        console.log(e.target);
        
    }
    
    checkMode();

});

