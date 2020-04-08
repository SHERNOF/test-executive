
$('#btns-main').click(function(){
    // $('#nav').show();
    document.querySelector('.navbar').style.visibility = 'visible';
    $('.header').hide();
})

location.loadData

function Show(){
    // not to repeat the append child, technique so not to continuously append the appendChild
    this.item = $('.item').hide();
    // ==========
    this.btn = $('.btn').attr("disabled", false)
    this.failureDisplay = document.getElementById('failureDisplay').style.display = 'none';
    this.mainTest = $("#mainTest").show("50");
    this.sidebarRight = $("#sidebarRight").show("50");
    this.rejExt = $(".rejExt").hide("50");  
  }

  function Btn(btnName, btnDis){
    this.btnShow = btnName;
    this.btnDis = btnDis;
  }

  Btn.prototype.mainButton = function(){
    const btnShow = $(this.btnShow).show();
    const btnDis = $(this.btnDis).attr("disabled", true);
    
  }

document.getElementById('configuration').addEventListener('click', loadData);

function loadData(){

  const show = new Show()
  const configuration = new Btn('#configuration', '#configuration')
  configuration.mainButton();
  
    // create an xhr object
    const xhr = new XMLHttpRequest();

    // open / specify the file name to access
    xhr.open('GET', 'test.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText);

            // parse as json object
            const testing = JSON.parse(this.responseText);

            // Failure Name
            document.getElementById("testDescription").innerHTML = testing[0].testDescription;  

            // Test Description
            let i, a = "";
              for (i=0; i < testing[0].descriptionContent.length; i++){
                  a += testing[0].descriptionContent[i] + "<br>";
              }
              document.getElementById("descriptionContent").innerHTML = a;

            //   ========= photo ==========
            let z = testing[0].disp.location

            if(z === ""){
              document.getElementById("sidebarRight").style.display = "none";
            } else {
              // document.getElementById("disp").src = testing[0].disp.location;
              document.querySelector(".disp").src = testing[0].disp.location;
            }                             
            
            // ====== reject display ========

            // gather UI
      
            const box7 = document.querySelector('.box-7')
            // create element
            const box3 = document.createElement('div')
            box3.className = 'box-3 item';

            const rej1 = document.createElement('h5')
            rej1.id = 'rej1'
            rej1.className = 'rejFont'
            
            const disp1 = document.createElement('img')
            disp1.id = 'disp1'
            disp1.className = 'dimImg'

            box3.appendChild(rej1)
            box3.appendChild(disp1)

            // test.insertBefore(box3, rejExt)
            $(box3).insertAfter(box7)

            document.getElementById("disp1").src = testing[0].failureContents[0].failureCarousel;
            document.getElementById("rej1").innerHTML = testing[0].failureContents[0].failureLabel;    

            // ======= end of 1st box =======
     
            
            // create element
            const box4 = document.createElement('div')
            box4.className = 'box-4 item';

            const rej2 = document.createElement('h5')
            rej2.id = 'rej2'
            rej2.className = 'rejFont'
            
            const disp2 = document.createElement('img')
            disp2.id = 'disp2'
            disp2.className = 'dimImg'

            box4.appendChild(rej2)
            box4.appendChild(disp2)

            $(box4).insertAfter(box3)

            document.getElementById("disp2").src = testing[0].failureContents[1].failureCarousel; 
            document.getElementById("rej2").innerHTML = testing[0].failureContents[1].failureLabel;   

            // ========== end of box 2 ==============

             // create element
             const box5 = document.createElement('div')
             box5.className = 'box-5 item';
 
             const rej3 = document.createElement('h5')
             rej3.id = 'rej3'
             rej3.className = 'rejFont'
             
             const disp3 = document.createElement('img')
             disp3.id = 'disp3'
             disp3.className = 'dimImg'
 
             box5.appendChild(rej3)
             box5.appendChild(disp3)
 
             $(box5).insertAfter(box4)
 
             document.getElementById("disp3").src = testing[0].failureContents[2].failureCarousel;
             document.getElementById("rej3").innerHTML = testing[0].failureContents[2].failureLabel;   

             // ========== end of box 3 ==============
  
             // create element
             const box6 = document.createElement('div')
             box6.className = 'box-6 item';
 
             const rej4 = document.createElement('h5')
             rej4.id = 'rej4'
             rej4.className = 'rejFont'
             
             const disp4 = document.createElement('img')
             disp4.id = 'disp4'
             disp4.className = 'dimImg'
 
             box6.appendChild(rej4)
             box6.appendChild(disp4)
 
             $(box6).insertAfter(box5)
 
             document.getElementById("disp4").src = testing[0].failureContents[3].failureCarousel;
            document.getElementById("rej4").innerHTML = testing[0].failureContents[3].failureLabel; 

            // ========== end of box 4 ==============
            

            // Cause of Failure
            let c = "";
              for (i=0; i < testing[0].descriptionContent.length; i++){
                  c += testing[0].failureContents[0].failureCause + "<br>";
              }
           
              
              $("#disp1").click(()=>{
                $(".rejExt").show("50");
                document.getElementById("rejDisp").src = testing[0].failureContents[0].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[0].failureContents[0].failureDescription;

                let d = "";
                for (i=0; i < testing[0].failureContents[0].failureCause.length; i++){
                    d += testing[0].failureContents[0].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = d;
                
                $("#sidebar").hide();
                $("#mainTest").hide();
                $("#failureDisplay").hide();
              })

              $("#disp2").click(()=>{
                $(".rejExt").show("50");
                document.getElementById("rejDisp").src = testing[0].failureContents[1].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[0].failureContents[1].failureDescription;
                let e = "";
                for (i=0; i < testing[0].failureContents[1].failureCause.length; i++){
                    e += testing[0].failureContents[1].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = e;
                

                $("#sidebar").hide("50");
                $("#mainTest").hide("50");
                $("#failureDisplay").hide("50");
              })

              $("#disp3").click(()=>{
                $(".rejExt").show("50");
                document.getElementById("rejDisp").src = testing[0].failureContents[2].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[0].failureContents[2].failureDescription;
                
                let f = "";
                for (i=0; i < testing[0].failureContents[0].failureCause.length; i++){
                    f += testing[0].failureContents[0].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = f;

                $("#sidebar").hide("50");
                $("#mainTest").hide("50");
                $("#failureDisplay").hide("50");
              })


              $("#disp4").click(()=>{
                $(".rejExt").show("50");
                document.getElementById("rejDisp").src = testing[0].failureContents[3].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[0].failureContents[3].failureDescription;
                
                let g = "";
                for (i=0; i < testing[0].failureContents[3].failureCause.length; i++){
                    g += testing[0].failureContents[3].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = g;

                $("#sidebar").hide("50");
                $("#mainTest").hide("50");
                $("#failureDisplay").hide("50");
              })
        
              $(".tof").click(()=>{
                $("#failureDisplay").show("easing")
              })   

              $(".x").click(()=>{
                $(".rejExt").hide("50");
                $("#sidebar").show("50");
                $("#mainTest").show("50");
                $("#failureDisplay").show("50");
              })
        }
    }
    xhr.send();
}

// ======== End of Configuration Test ===============