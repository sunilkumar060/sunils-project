
            function profileFunction() {
            document.getElementById("profileDropdown").classList.toggle("show");
            }
            function contactFunction(){
            document.getElementById("contactDropdown").classList.toggle("show");
            }
            window.onclick = function(event) {
                if (!event.target.matches('.dropbtn')) {
    
                var dropdowns = document.getElementsByClassName("dropdown-content");
                for (var i = 0; i < dropdowns.length ; i++) {
                  var openDropdown = dropdowns[i];
                  if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                  }
                }
              }
            }
            function navFunction(){
            var header = document.getElementById("navBar");
            var navs = header.getElementsByClassName("header-nav-lables");
            for (var i = 0; i < navs.length; i++) {
            navs[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
                });
              }
            }
            function tickMark(){
                // var widget = document.getElementById("tick");
                var widgets = document.getElementsByClassName("widget-content");
                for (var i = 0; i < widgets.length; i++) {
                widgets[i].addEventListener("click", function() {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                /*this.className += " active";*/
                this.classList.toggle("active");
                    });
                  }
                }
            function widgetBarFunction(){
                var widget=document.getElementById("myWidget").classList.toggle('widget-container')
                if(widget==false){
                console.log(document.getElementById("widgetDropdown").style.width="66%");
                }
                else{
                  console.log(document.getElementById("widgetDropdown").style.width="90%");
                }
            }
           
               
            
                
                    // if (!event.target.matches('.widget-container')) {
        
                    /*var widgetDropdowns = document.getElementsByClassName("dropdown-content");*/
                    
                    // for (var i = 0; i < widgetDropdowns.length ; i++) {
                    //   var openDropdown = dropdowns[i];
                    //   if (openDropdown.classList.contains('widgets-container')) {
                        // openDropdown.classList.remove('widgets-container');
                      
                    
                  
                
            
                           
            
            
        
            
        
        
    