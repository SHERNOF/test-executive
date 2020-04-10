
$('#btns-main').click(function(){
    document.querySelector('.navbar').style.visibility = 'visible';
    document.querySelector('.intro').style.visibility = 'visible';
    $('.header').hide();
    loadData();

})

// location.loadData

function Show(){
    // not to repeat the append child, technique so not to continuously append the appendChild
    this.item = $('.item').hide();
    // ==========
    this.btn = $('.btn').attr("disabled", false)
    // this.failureDisplay = document.getElementById('failureDisplay').style.display = 'none';
    // this.mainTest = $("#mainTest").show("50");
    this.intro = $(".intro").show("50");
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

  $('.btnF').addClass('keepAct');
  

  const show = new Show()
  const configuration = new Btn('#configuration', '#configuration')
  configuration.mainButton();

  document.querySelector('.intro').style.visibility = "visible";
  
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
              document.querySelector(".intro__box2-disp").src = testing[0].disp.location;
            }                             
            
            // ====== reject display ========

            // gather UI
      
            const box1 = document.querySelector('.failureDisplay__box2')
            // create element
            const box2 = document.createElement('div')
            box2.className = 'failureDisplay__box21 failureDisplay__box2-item';

            const div7 = document.createElement('div')
            div7.className = 'failureDisplay__box2-heading';

            const rej1 = document.createElement('h5')
            rej1.className = 'failureDisplay__box2-heading--1'

            div7.appendChild(rej1)

            const div8 = document.createElement('div')
            div8.className = 'failureDisplay__box2-image';
            
            const disp1 = document.createElement('img')
            disp1.className = 'failureDisplay__box2-dimImg'
            disp1.id = 'disp1'

            div8.appendChild(disp1)

            box2.appendChild(div7)
            // document.createElement('hr')
            box2.appendChild(div8)

            // box2.appendChild(rej1)
            // box2.appendChild(disp1)

            
            // $(box2).insertAfter(box7)
            $(box2).appendTo(box1)

            document.getElementById("disp1").src = testing[0].failureContents[0].failureCarousel;
            document.querySelector(".failureDisplay__box2-heading--1").innerHTML = testing[0].failureContents[0].failureLabel;    

            // ======= end of 1st box =======
     
            
            // create element
            const box3 = document.createElement('div')
            box3.className = 'failureDisplay__box22 failureDisplay__box2-item';

            const div1 = document.createElement('div')
            div1.className = 'failureDisplay__box2-heading';

            const rej2 = document.createElement('h5')
            rej2.className = 'failureDisplay__box2-heading--2';

            div1.appendChild(rej2)

            const div2 = document.createElement('div')
            div2.className = 'failureDisplay__box2-image';
            
            const disp2 = document.createElement('img')
            disp2.className = 'failureDisplay__box2-dimImg'
            disp2.id = 'disp2'

            div2.appendChild(disp2)

            // box3.appendChild(rej2)
            box3.appendChild(div1)
            box3.appendChild(div2)

            $(box3).insertAfter(box2)

            document.getElementById("disp2").src = testing[0].failureContents[1].failureCarousel; 
            document.querySelector(".failureDisplay__box2-heading--2").innerHTML = testing[0].failureContents[1].failureLabel;   

            // ========== end of box 2 ==============

             // create element
             const box4 = document.createElement('div')
             box4.className = 'failureDisplay__box23 failureDisplay__box2-item';

            const div3 = document.createElement('div')
            div3.className = 'failureDisplay__box2-heading';
 
             const rej3 = document.createElement('h5')
             rej3.className = 'failureDisplay__box2-heading--3';

             div3.appendChild(rej3)

             const div4 = document.createElement('div')
             div4.className = 'failureDisplay__box2-image';
             
             const disp3 = document.createElement('img')
             disp3.className = 'failureDisplay__box2-dimImg'
             disp3.id = 'disp3'

             div4.appendChild(disp3)
 
            //  box4.appendChild(rej3)
            //  box4.appendChild(disp3)

            box4.appendChild(div3)
            box4.appendChild(div4)
 
             $(box4).insertAfter(box3)
 
             document.getElementById("disp3").src = testing[0].failureContents[2].failureCarousel;
             document.querySelector(".failureDisplay__box2-heading--3").innerHTML = testing[0].failureContents[2].failureLabel;   

             console.log(box4)

             // ========== end of box 3 ==============
  
             // create element
             const box5 = document.createElement('div')
             box5.className = 'failureDisplay__box24 failureDisplay__box2-item';

             const div5 = document.createElement('div')
             div5.className = 'failureDisplay__box2-heading';
 
             const rej4 = document.createElement('h5')
             rej4.className = 'failureDisplay__box2-heading--4';

             div5.appendChild(rej4)

             const div6 = document.createElement('div')
             div6.className = 'failureDisplay__box2-image';
             
             const disp4 = document.createElement('img')
             disp4.className = 'failureDisplay__box2-dimImg '
             disp4.id = 'disp4'

             div6.appendChild(disp4)

            box5.appendChild(div5)
            box5.appendChild(div6)
 
            //  box5.appendChild(rej4)
            //  box5.appendChild(disp4)
 
             $(box5).insertAfter(box4)
 
            document.getElementById("disp4").src = testing[0].failureContents[3].failureCarousel;
            document.querySelector(".failureDisplay__box2-heading--4").innerHTML = testing[0].failureContents[3].failureLabel; 

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
                // $(".failureDisplay").show("easing")
                document.querySelector('.failureDisplay').style.visibility = 'visible';
                document.querySelector('.failureDisplay__box1').style.visibility = 'visible';
                

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