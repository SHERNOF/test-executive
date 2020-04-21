
    
$('#btns-main').click(function(a){
  // if((document.querySelector('.name').value = 'sherwin') && (document.querySelector('.pword').value = 'test')){
    let name = document.querySelector('.name').value;
    let pword = document.querySelector('.pword').value;

    if((name == 'sherwin') && (pword == 'test')){
      console.log('sherwin')
      name = "";
      pword = ""

    document.querySelector('.navbar').style.visibility = 'visible';
    document.querySelector('.intro').style.visibility = 'visible';
    $('.header').hide();
    loadDataFocus();

  }else {
    
    document.querySelector('.name').style.color = 'red';
    document.querySelector('.name').value = 'Your user name is wrong';
    document.querySelector('.pword').style.color = 'red';
    document.querySelector('.pword').value = 'Your user password is wrong';

  }

  document.querySelector('.name').addEventListener('focus', name => {
    document.querySelector('.name').value = '';
    document.querySelector('.name').style.color = 'white';
    
  })

  document.querySelector('.pword').addEventListener('focus', pword => {
    document.querySelector('.pword').style.color = 'white';
    document.querySelector('.pword').value = '';
  })

  

})

// $('.name')
// document.querySelector('.name').onFocus = '';
// document.querySelector('.pword').value = 'Your user password is wrong';



// location.loadData

function Show(){
    // not to repeat the append child, technique so not to continuously append the appendChild
    this.item = $('.item').hide();
    // ==========
    this.btn = $('.btn').attr("disabled", false)
    this.intro = $(".intro").show();
    document.querySelector('.intro').style.visibility = "visible";
    document.querySelector('.failureDisplay').style.display = 'visible';
    document.querySelector('.failureDisplay__box1').style.visibility = "hidden";
    document.getElementById("failureTypes").style.visibility = 'hidden';
    document.querySelector(".rejectDetails").style.visibility = 'hidden';
  }

  function Btn(btnName, btnDis){
    this.btnShow = btnName;
    this.btnDis = btnDis;
  }

  Btn.prototype.mainButton = function(){
    const btnShow = $(this.btnShow).show();
    const btnDis = $(this.btnDis).attr("disabled", true);
  }


// ================= CONFIGURATION ====================

document.getElementById('configuration').addEventListener('click', loadData);

function loadData(){

  const show = new Show()
  const configuration = new Btn('#configuration', '#configuration')
  configuration.mainButton();
  document.querySelector('.failureDisplay').style.visibility = 'hidden';
  

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
            document.getElementById("failureTypes").innerHTML = testing[0].testDescription + " Failure Types";  
            
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
              document.querySelector(".intro__box2-disp").src = testing[0].disp.location;
            }                             
            
            // ====== reject display ========

            // gather UI
      
            const box1 = document.querySelector('.insertBox')
            // create element
            const box2 = document.createElement('div')
            box2.className = 'failureDisplay__box21 item';

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
            box2.appendChild(div8)
            $(box2).insertAfter(box1)

            document.getElementById("disp1").src = testing[0].failureContents[0].failureCarousel;
            document.querySelector(".failureDisplay__box2-heading--1").innerHTML = testing[0].failureContents[0].failureLabel;    

            // ======= end of 1st box =======
     
            // create element
            const box3 = document.createElement('div')
            box3.className = 'failureDisplay__box22 item';

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
             box4.className = 'failureDisplay__box23 item';

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

             

             // ========== end of box 3 ==============
  
             // create element
             const box5 = document.createElement('div')
             box5.className = 'failureDisplay__box24 item';

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
                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide();        
                document.getElementById("rejDisp").src = testing[0].failureContents[0].failureImage;    
                document.getElementById("rejDesc").innerHTML = testing[0].failureContents[0].failureDescription;           
                let d = "";
                for (i=0; i < testing[0].failureContents[0].failureCause.length; i++){
                    d += testing[0].failureContents[0].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = d;
              })


              $("#disp2").click(()=>{

                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide();  
                document.getElementById("rejDisp").src = testing[0].failureContents[1].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[0].failureContents[1].failureDescription;
                let e = "";
                for (i=0; i < testing[0].failureContents[1].failureCause.length; i++){
                    e += testing[0].failureContents[1].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = e;
              })

              $("#disp3").click(()=>{
                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide();  
                document.getElementById("rejDisp").src = testing[0].failureContents[2].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[0].failureContents[2].failureDescription;
                
                let f = "";
                for (i=0; i < testing[0].failureContents[0].failureCause.length; i++){
                    f += testing[0].failureContents[0].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = f;
              })


              $("#disp4").click(()=>{
                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide();  
                document.getElementById("rejDisp").src = testing[0].failureContents[3].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[0].failureContents[3].failureDescription;
                
                let g = "";
                for (i=0; i < testing[0].failureContents[3].failureCause.length; i++){
                    g += testing[0].failureContents[3].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = g;
              })
        
              $(".btnF").click(()=>{
                document.querySelector('.intro').style.display = 'none';
                document.querySelector('.failureDisplay').style.visibility = 'visible';
                document.getElementById("failureTypes").style.visibility = 'visible';
                // document.querySelector('.failureDisplay__box1').style.visibility = 'visible';
              })   

              $(".btnC").click(()=>{
                $(".intro").hide();
                document.querySelector('.rejectDetails').style.visibility = 'hidden';
                $(".failureDisplay").show();
              })
        }
    }
    xhr.send();
}

// ======== End of Configuration Test ===============

// ================ Sensor Data Path ================

document.getElementById('sdp').addEventListener('click', loadDataSDP);

function loadDataSDP(){

  const show = new Show()
  const sdp = new Btn('#sdp', '#sdp')
  sdp.mainButton();
  document.querySelector('.failureDisplay').style.visibility = 'hidden';
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'test.json', true);

    xhr.onload = function(){
        if(this.status === 200){

            const testing = JSON.parse(this.responseText);

            document.getElementById("testDescription").innerHTML = testing[1].testDescription; 
            document.getElementById("failureTypes").innerHTML = testing[1].testDescription + " Failure Types";   
            

            // Test Description
            let i, a = "";
              for (i=0; i < testing[1].descriptionContent.length; i++){
                  a += testing[1].descriptionContent[i] + "<br>";
              }
              document.getElementById("descriptionContent").innerHTML = a;

            //   ========= photo ==========
            let z = testing[1].disp.location

            if(z === ""){
              document.getElementById("sidebarRight").style.display = "none";
            } else {
              document.querySelector(".intro__box2-disp").src = testing[1].disp.location;
            }                             
            
            // ====== reject display ========

            const box1 = document.querySelector('.insertBox')
            
            const box2 = document.createElement('div')
            box2.className = 'failureDisplay__box21 item';

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
            box2.appendChild(div8)
            $(box2).insertAfter(box1)

            document.getElementById("disp1").src = testing[1].failureContents[0].failureCarousel;
            document.querySelector(".failureDisplay__box2-heading--1").innerHTML = testing[1].failureContents[0].failureLabel;    

            // ======= end of 1st box =======

            const box3 = document.createElement('div')
            box3.className = 'failureDisplay__box22 item';

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
            box3.appendChild(div1)
            box3.appendChild(div2)

            $(box3).insertAfter(box2)

            document.getElementById("disp2").src = testing[1].failureContents[1].failureCarousel; 
            document.querySelector(".failureDisplay__box2-heading--2").innerHTML = testing[1].failureContents[1].failureLabel;   

            // ========== end of box 2 ==============

            const box4 = document.createElement('div')
             box4.className = 'failureDisplay__box23 item';

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

            box4.appendChild(div3)
            box4.appendChild(div4)
 
             $(box4).insertAfter(box3)
 
             document.getElementById("disp3").src = testing[1].failureContents[2].failureCarousel;
             document.querySelector(".failureDisplay__box2-heading--3").innerHTML = testing[1].failureContents[2].failureLabel;   

             // ========== end of box 3 ==============

             const box5 = document.createElement('div')
             box5.className = 'failureDisplay__box24 item';

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
             $(box5).insertAfter(box4)
 
             document.getElementById("disp4").src = testing[1].failureContents[3].failureCarousel;
             document.querySelector(".failureDisplay__box2-heading--4").innerHTML = testing[1].failureContents[3].failureLabel;   

             // ========== end of box 4============


            // Cause of Failure
            let c = "";
              for (i=0; i < testing[1].descriptionContent.length; i++){
                  c += testing[1].failureContents[0].failureCause + "<br>";
              }
              
              $("#disp1").click(()=>{
                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide();   
                document.getElementById("rejDisp").src = testing[1].failureContents[0].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[1].failureContents[0].failureDescription;
                let d = "";
                for (i=0; i < testing[1].failureContents[0].failureCause.length; i++){
                  d += testing[1].failureContents[0].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = d;
    
              })

              $("#disp2").click(()=>{
                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide();  
                document.getElementById("rejDisp").src = testing[1].failureContents[1].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[1].failureContents[1].failureDescription;
                let e = "";
                for (i=0; i < testing[1].failureContents[1].failureCause.length; i++){
                    e += testing[1].failureContents[1].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = e;
  
              })

              $("#disp3").click(()=>{
                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide();  
                document.getElementById("rejDisp").src = testing[1].failureContents[2].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[1].failureContents[2].failureDescription;
                let f = "";
                for (i=0; i < testing[1].failureContents[2].failureCause.length; i++){
                    f += testing[1].failureContents[2].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = f;
              })

              $("#disp4").click(()=>{
                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide();  
                document.getElementById("rejDisp").src = testing[1].failureContents[3].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[1].failureContents[3].failureDescription;
                
                let g = "";
                for (i=0; i < testing[1].failureContents[3].failureCause.length; i++){
                    g += testing[1].failureContents[3].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = g;
              })

              $(".btnF").click(()=>{
                document.querySelector('.intro').style.display = 'none';
                document.querySelector('.failureDisplay').style.visibility = 'visible';
                $(".failureDisplay").show();
              })   

              $(".btnC").click(()=>{
                $(".intro").hide();
                document.querySelector('.rejectDetails').style.visibility = 'hidden';
                $(".failureDisplay").show();
              })
        }
    }
    xhr.send();
}


// ======== End of Sensor Data Path== ===============

//  ********  Debris  *******************************

document.getElementById('debris').addEventListener('click', loadDataDeb);

function loadDataDeb(){

const show = new Show()

const debris = new Btn('#debris', '#debris')
debris.mainButton();
document.querySelector('.failureDisplay').style.visibility = 'hidden';

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'test.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            const testing = JSON.parse(this.responseText);
            document.getElementById("testDescription").innerHTML = testing[2].testDescription;  
            document.getElementById("failureTypes").innerHTML = testing[2].testDescription + " Failure Types";  

            // Test Description
            let i, a = "";
              for (i=0; i < testing[2].descriptionContent.length; i++){
                  a += testing[2].descriptionContent[i] + "<br>";
              }
              document.getElementById("descriptionContent").innerHTML = a;

            //   ========= photo ==========
            let z = testing[1].disp.location

            if(z === ""){
              document.getElementById("sidebarRight").style.display = "none";
            } else {
              document.querySelector(".intro__box2-disp").src = testing[2].disp.location;
            }                               

            // ====== reject display ========

            const box1 = document.querySelector('.insertBox')
            
            const box2 = document.createElement('div')
            box2.className = 'failureDisplay__box21 item';

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
            box2.appendChild(div8)
            $(box2).insertAfter(box1)

            document.getElementById("disp1").src = testing[2].failureContents[0].failureCarousel;
            document.querySelector(".failureDisplay__box2-heading--1").innerHTML = testing[2].failureContents[0].failureLabel;    

            // ======= end of 1st box =======
     
            const box3 = document.createElement('div')
            box3.className = 'failureDisplay__box22 item';

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
            box3.appendChild(div1)
            box3.appendChild(div2)

            $(box3).insertAfter(box2)

            document.getElementById("disp2").src = testing[2].failureContents[1].failureCarousel;
            document.querySelector(".failureDisplay__box2-heading--2").innerHTML = testing[2].failureContents[1].failureLabel; 

            // ========== end of box 2 ==============

             // create element
            const box4 = document.createElement('div')
             box4.className = 'failureDisplay__box23 item';

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

            box4.appendChild(div3)
            box4.appendChild(div4)
 
             $(box4).insertAfter(box3)
 
             document.getElementById("disp3").src = testing[2].failureContents[2].failureCarousel;
             document.querySelector(".failureDisplay__box2-heading--3").innerHTML = testing[2].failureContents[2].failureLabel;   

             // ========== end of box 3 ==============

            // Cause of Failure
            let c = "";
              for (i=0; i < testing[1].descriptionContent.length; i++){
                  c += testing[1].failureContents[1].failureCause + "<br>";
              }

              $("#disp1").click(()=>{
                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide(); 
                document.getElementById("rejDisp").src = testing[2].failureContents[0].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[2].failureContents[0].failureDescription;

                let d = "";
                for (i=0; i < testing[2].failureContents[0].failureCause.length; i++){
                    d += testing[2].failureContents[0].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = d;
              })

              $("#disp2").click(()=>{
                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide(); 
                document.getElementById("rejDisp").src = testing[2].failureContents[1].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[2].failureContents[1].failureDescription;
                let e = "";
                for (i=0; i < testing[2].failureContents[1].failureCause.length; i++){
                    e += testing[2].failureContents[1].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = e;
              })

              $("#disp3").click(()=>{
                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide(); 
                document.getElementById("rejDisp").src = testing[2].failureContents[2].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[2].failureContents[2].failureDescription;
                
                let f = "";
                for (i=0; i < testing[2].failureContents[2].failureCause.length; i++){
                    f += testing[2].failureContents[2].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = f;
              })

              $(".btnF").click(()=>{
                document.querySelector('.intro').style.display = 'none';
                document.querySelector('.failureDisplay').style.visibility = 'visible';
                document.querySelector('.failureDisplay__box1').style.visibility = 'visible';
              })   

              $(".btnC").click(()=>{
                $(".intro").hide();
                document.querySelector('.rejectDetails').style.visibility = 'hidden';
                $(".failureDisplay").show();
              })
        }
    }
    xhr.send();
}

// ======== End of Debris ===========================

//  ********  Image Acquire **************************

document.getElementById('imageAcquire').addEventListener('click', loadDataImgAc);

function loadDataImgAc(){
 
  
const show = new Show()

const imageAcquire = new Btn('#imageAcquire', '#imageAcquire')
imageAcquire.mainButton();
document.querySelector('.failureDisplay').style.visibility = 'hidden';

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'test.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            const testing = JSON.parse(this.responseText);
            document.getElementById("testDescription").innerHTML = testing[3].testDescription;  
            document.getElementById("failureTypes").innerHTML = testing[3].testDescription + " Failure Types";  

            // Test Description
            let i, a = "";
              for (i=0; i < testing[3].descriptionContent.length; i++){
                  a += testing[3].descriptionContent[i] + "<br>";
              }
              document.getElementById("descriptionContent").innerHTML = a;

            //   ========= photo ==========
            let z = testing[3].disp.location

            if(z === ""){
              document.getElementById("sidebarRight").style.display = "none";
            } else {
              document.querySelector(".intro__box2-disp").src = testing[3].disp.location;
            }                               

            // ====== reject display ========

            const box1 = document.querySelector('.insertBox')
      
            const box2 = document.createElement('div')
            box2.className = 'failureDisplay__box21 item';

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
            box2.appendChild(div8)
            $(box2).insertAfter(box1)

            document.getElementById("disp1").src = testing[3].failureContents[0].failureCarousel;
            document.querySelector(".failureDisplay__box2-heading--1").innerHTML = testing[3].failureContents[0].failureLabel;    

            // ======= end of 1st box =======

            const box3 = document.createElement('div')
            box3.className = 'failureDisplay__box22 item';

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
            box3.appendChild(div1)
            box3.appendChild(div2)

            $(box3).insertAfter(box2)

            document.getElementById("disp2").src = testing[3].failureContents[1].failureCarousel;
            document.querySelector(".failureDisplay__box2-heading--2").innerHTML = testing[3].failureContents[1].failureLabel; 

            // ========== end of box 2 ==============

            // Cause of Failure
            let c = "";
              for (i=0; i < testing[1].descriptionContent.length; i++){
                  c += testing[1].failureContents[1].failureCause + "<br>";
              }
              
              $("#disp1").click(()=>{
                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide();   
                document.getElementById("rejDisp").src = testing[3].failureContents[0].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[3].failureContents[0].failureDescription;

                let d = "";
                for (i=0; i < testing[3].failureContents[0].failureCause.length; i++){
                    d += testing[3].failureContents[0].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = d;
              })

              $("#disp2").click(()=>{
                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide();   
                document.getElementById("rejDisp").src = testing[3].failureContents[1].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[3].failureContents[1].failureDescription;
                let e = "";
                for (i=0; i < testing[3].failureContents[1].failureCause.length; i++){
                    e += testing[3].failureContents[1].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = e;
              })
             
              $(".btnF").click(()=>{
                document.querySelector('.intro').style.display = 'none';
                document.querySelector('.failureDisplay').style.visibility = 'visible';
                document.getElementById("failureTypes").style.visibility = 'visible';
              })   

              $(".btnC").click(()=>{
                $(".intro").hide();
                document.querySelector('.rejectDetails').style.visibility = 'hidden';
                $(".failureDisplay").show();
              })
    }
  }
    xhr.send();
}

// ======== End of Image Acquire =============

//  ********  Cold Pixel  *******************************

document.getElementById('coldPixel').addEventListener('click', loadDataCp);

function loadDataCp(){

const show = new Show()

const coldPixel = new Btn('#coldPixel', '#coldPixel')
coldPixel.mainButton();
document.querySelector('.failureDisplay').style.visibility = 'hidden';

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'test.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            const testing = JSON.parse(this.responseText);
            document.getElementById("testDescription").innerHTML = testing[4].testDescription;  
            document.getElementById("failureTypes").innerHTML = testing[4].testDescription + " Failure Types";  

            // Test Description
            let i, a = "";
              for (i=0; i < testing[4].descriptionContent.length; i++){
                  a += testing[4].descriptionContent[i] + "<br>";
              }
              document.getElementById("descriptionContent").innerHTML = a;

            //   ========= photo ==========
            let z = testing[4].disp.location

            if(z === ""){
              document.getElementById("sidebarRight").style.display = "none";
            } else {
              document.querySelector(".intro__box2-disp").src = testing[4].disp.location;
            }                               

            // ====== reject display ========
            const box1 = document.querySelector('.insertBox')

            const box2 = document.createElement('div')
            box2.className = 'failureDisplay__box21 item';

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
          
            box2.appendChild(div8)
            $(box2).insertAfter(box1)

            document.getElementById("disp1").src = testing[4].failureContents[0].failureCarousel;
            document.querySelector(".failureDisplay__box2-heading--1").innerHTML = testing[4].failureContents[0].failureLabel;    

            // ======= end of 1st box =======

            const box3 = document.createElement('div')
            box3.className = 'failureDisplay__box22 item';

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
            box3.appendChild(div1)
            box3.appendChild(div2)

            $(box3).insertAfter(box2)

            document.getElementById("disp2").src = testing[4].failureContents[1].failureCarousel;
            document.querySelector(".failureDisplay__box2-heading--2").innerHTML = testing[4].failureContents[1].failureLabel; 

            // ========== end of box 2 ==============

          

            // Cause of Failure
            let c = "";
              for (i=0; i < testing[4].descriptionContent.length; i++){
                  c += testing[4].failureContents[1].failureCause + "<br>";
              }
              
              $("#disp1").click(()=>{
                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide();   
                document.getElementById("rejDisp").src = testing[4].failureContents[0].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[4].failureContents[0].failureDescription;

                let d = "";
                for (i=0; i < testing[4].failureContents[0].failureCause.length; i++){
                    d += testing[4].failureContents[0].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = d;
              })

              $("#disp2").click(()=>{
                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide();   
                document.getElementById("rejDisp").src = testing[4].failureContents[1].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[4].failureContents[1].failureDescription;
                let e = "";
                for (i=0; i < testing[4].failureContents[1].failureCause.length; i++){
                    e += testing[4].failureContents[1].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = e;
              })

              $(".btnF").click(()=>{
                document.querySelector('.intro').style.display = 'none';
                document.querySelector('.failureDisplay').style.visibility = 'visible';
                $(".failureDisplay").show();
              })   

              $(".btnC").click(()=>{
                $(".intro").hide();
                document.querySelector('.rejectDetails').style.visibility = 'hidden';
                $(".failureDisplay").show();
              })
        }
    }
    xhr.send();
}

// ======== End of Cold Pixel test ==========

//  ********  Hot Pixel  ********************

document.getElementById('hotPixel').addEventListener('click', loadDataHp);

function loadDataHp(){
 
const show = new Show()
const hotPixel = new Btn('#hotPixel', '#hotPixel')
hotPixel.mainButton();
document.querySelector('.failureDisplay').style.visibility = 'hidden';

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'test.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            const testing = JSON.parse(this.responseText);
            document.getElementById("testDescription").innerHTML = testing[5].testDescription;  
            document.getElementById("failureTypes").innerHTML = testing[5].testDescription + " Failure Types";  

            // Test Description
            let i, a = "";
              for (i=0; i < testing[5].descriptionContent.length; i++){
                  a += testing[5].descriptionContent[i] + "<br>";
              }
              document.getElementById("descriptionContent").innerHTML = a;

            //   ========= photo ==========
            let z = testing[5].disp.location

            if(z === ""){
              document.getElementById("sidebarRight").style.display = "none";
            } else {
              document.querySelector(".intro__box2-disp").src = testing[5].disp.location;
            }                               

                 // ====== reject display ========

            const box1 = document.querySelector('.insertBox')

            const box2 = document.createElement('div')
            box2.className = 'failureDisplay__box21 item';

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
            box2.appendChild(div8)
            $(box2).insertAfter(box1)

            document.getElementById("disp1").src = testing[5].failureContents[0].failureCarousel;
            document.querySelector(".failureDisplay__box2-heading--1").innerHTML = testing[5].failureContents[0].failureLabel;    

            // ======= end of 1st box =======
     
            const box3 = document.createElement('div')
            box3.className = 'failureDisplay__box22 item';

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
            box3.appendChild(div1)
            box3.appendChild(div2)

            $(box3).insertAfter(box2)

            document.getElementById("disp2").src = testing[5].failureContents[1].failureCarousel;
            document.querySelector(".failureDisplay__box2-heading--2").innerHTML = testing[5].failureContents[1].failureLabel; 

            // ========== end of box 2 ==============

            // Cause of Failure
            let c = "";
              for (i=0; i < testing[5].descriptionContent.length; i++){
                  c += testing[5].failureContents[1].failureCause + "<br>";
              }
              
              $("#disp1").click(()=>{
                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide();   
                document.getElementById("rejDisp").src = testing[5].failureContents[0].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[5].failureContents[0].failureDescription;

                let d = "";
                for (i=0; i < testing[5].failureContents[0].failureCause.length; i++){
                    d += testing[5].failureContents[0].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = d;
              })

              $("#disp2").click(()=>{
                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide();   
                document.getElementById("rejDisp").src = testing[5].failureContents[1].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[5].failureContents[1].failureDescription;
                let e = "";
                for (i=0; i < testing[5].failureContents[1].failureCause.length; i++){
                    e += testing[5].failureContents[1].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = e;              
              })

              $(".btnF").click(()=>{
                document.querySelector('.intro').style.display = 'none';
                document.querySelector('.failureDisplay').style.visibility = 'visible';
                document.getElementById("failureTypes").style.visibility = 'visible';
              })   

              $(".btnC").click(()=>{
                $(".intro").hide();
                document.querySelector('.rejectDetails').style.visibility = 'hidden';
                $(".failureDisplay").show();
              })
        }
    }
    xhr.send();
}

// ======== End of Hot Pixel test ===========

//  ********  Focus Test  ********************


document.getElementById('focusTest').addEventListener('click', loadDataFocus);

function loadDataFocus(){

  const show = new Show()

  const focus = new Btn('#focusTest', '#focusTest')
  focus.mainButton();
  document.querySelector('.failureDisplay').style.visibility = 'hidden';
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'test.json', true);

    xhr.onload = function(){
        if(this.status === 200){

            const testing = JSON.parse(this.responseText);

            document.getElementById("testDescription").innerHTML = testing[6].testDescription;  
            document.getElementById("failureTypes").innerHTML = testing[6].testDescription + " Failure Types";   

            // Test Description
            let i, a = "";
              for (i=0; i < testing[6].descriptionContent.length; i++){
                  a += testing[6].descriptionContent[i] + "<br>";
              }
              document.getElementById("descriptionContent").innerHTML = a;

            //   ========= photo ==========
            let z = testing[0].disp.location

            if(z === ""){
              document.getElementById("sidebarRight").style.display = "none";
            } else {
              document.querySelector(".intro__box2-disp").src = testing[6].disp.location;
            }                             
            
            // ====== reject display ========

            const box1 = document.querySelector('.insertBox')
            
            const box2 = document.createElement('div')
            box2.className = 'failureDisplay__box21 item';

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
            box2.appendChild(div8)
            $(box2).insertAfter(box1)

            document.getElementById("disp1").src = testing[6].failureContents[0].failureCarousel;
            document.querySelector(".failureDisplay__box2-heading--1").innerHTML = testing[6].failureContents[0].failureLabel;    

            // ======= end of 1st box =======
     
            // create element
            const box3 = document.createElement('div')
            box3.className = 'failureDisplay__box22 item';

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
            box3.appendChild(div1)
            box3.appendChild(div2)

            $(box3).insertAfter(box2)
            document.getElementById("disp2").src = testing[6].failureContents[1].failureCarousel; 
            document.querySelector(".failureDisplay__box2-heading--2").innerHTML = testing[6].failureContents[1].failureLabel;   

            // ========== end of box 2 ==============

             // create element
             const box4 = document.createElement('div')
             box4.className = 'failureDisplay__box23 item';

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

            box4.appendChild(div3)
            box4.appendChild(div4)

            $(box4).insertAfter(box3)
 
             document.getElementById("disp3").src = testing[6].failureContents[2].failureCarousel;
             document.querySelector(".failureDisplay__box2-heading--3").innerHTML = testing[6].failureContents[2].failureLabel;               

             // ========== end of box 3 ==============

             const box5 = document.createElement('div')
             box5.className = 'failureDisplay__box24 item';

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
             $(box5).insertAfter(box4)
      
            document.getElementById("disp4").src = testing[6].failureContents[3].failureCarousel;
            document.querySelector(".failureDisplay__box2-heading--4").innerHTML = testing[6].failureContents[3].failureLabel;   
     
            // ========== end of box 4 ==============

            const box6 = document.createElement('div')
            box6.className = 'failureDisplay__box25 item';

            const div9 = document.createElement('div')
            div9.className = 'failureDisplay__box2-heading';

            const rej5 = document.createElement('h5')
            rej5.className = 'failureDisplay__box2-heading--5';

            div9.appendChild(rej5)

            const div10 = document.createElement('div')
            div10.className = 'failureDisplay__box2-image';
            
            const disp5 = document.createElement('img')
            disp5.className = 'failureDisplay__box2-dimImg '
            disp5.id = 'disp5'

            div10.appendChild(disp5)
             box6.appendChild(div9)
             box6.appendChild(div10)
            $(box6).insertAfter(box5)
             
            // const testingUlit = testing[6].failureContents[4].failureCarousel;
            const testingUlit = testing[6].failureContents[4].failureLabel;   
            console.log(testingUlit)

            document.getElementById('disp5').src = testing[6].failureContents[4].failureCarousel;
            document.querySelector('.failureDisplay__box2-heading--5').innerHTML = testing[6].failureContents[4].failureLabel;
         
            // ========== end of box 5 ==============

            // Cause of Failure
            let c = "";
              for (i=0; i < testing[6].descriptionContent.length; i++){
                  c += testing[6].failureContents[0].failureCause + "<br>";
              }
              
              $("#disp1").click(()=>{
                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide();  
                document.getElementById("rejDisp").src = testing[6].failureContents[0].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[6].failureContents[0].failureDescription;

                let d = "";
                for (i=0; i < testing[6].failureContents[0].failureCause.length; i++){
                  d += testing[6].failureContents[0].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = d;
              })

              $("#disp2").click(()=>{
                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide();  
                document.getElementById("rejDisp").src = testing[6].failureContents[1].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[6].failureContents[1].failureDescription;
                let e = "";
                for (i=0; i < testing[6].failureContents[1].failureCause.length; i++){
                    e += testing[6].failureContents[1].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = e;                
              })


              $("#disp3").click(()=>{
                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide();  
                document.getElementById("rejDisp").src = testing[6].failureContents[2].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[6].failureContents[2].failureDescription;
                
                let f = "";
                for (i=0; i < testing[6].failureContents[2].failureCause.length; i++){
                    f += testing[6].failureContents[2].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = f;
              })

              $("#disp4").click(()=>{
                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide();  
                document.getElementById("rejDisp").src = testing[6].failureContents[3].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[6].failureContents[3].failureDescription;
                
                let g = "";
                for (i=0; i < testing[6].failureContents[3].failureCause.length; i++){
                    g += testing[6].failureContents[3].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = g;
              })

              $("#disp5").click(()=>{
                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide();  
                document.getElementById("rejDisp").src = testing[6].failureContents[4].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[6].failureContents[4].failureDescription;
                
                let h = "";
                for (i=0; i < testing[6].failureContents[4].failureCause.length; i++){
                    h += testing[6].failureContents[4].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = h;
              })  
        
              $(".btnF").click(()=>{
                document.querySelector('.intro').style.display = 'none';
                document.querySelector('.failureDisplay').style.visibility = 'visible';
                document.getElementById("failureTypes").style.visibility = 'visible';
              })   

              $(".btnC").click(()=>{
                $(".intro").hide();
                document.querySelector('.rejectDetails').style.visibility = 'hidden';
                $(".failureDisplay").show();
              })
        }
        }    
    xhr.send();
}


// =====================  End of Focus Test  =====================================

// =====================  IO Test  ===============================================

document.getElementById('ioTest').addEventListener('click', loadDataIo);

function loadDataIo(){
 
const show = new Show()
const ioTest = new Btn('#ioTest', '#ioTest')
ioTest.mainButton();
document.querySelector('.failureDisplay').style.visibility = 'hidden';

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'test.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            const testing = JSON.parse(this.responseText);
            document.getElementById("testDescription").innerHTML = testing[7].testDescription;  
            document.getElementById("failureTypes").innerHTML = testing[7].testDescription + " Failure Types";  

            // Test Description
            let i, a = "";
              for (i=0; i < testing[7].descriptionContent.length; i++){
                  a += testing[7].descriptionContent[i] + "<br>";
              }
              document.getElementById("descriptionContent").innerHTML = a;

            //   ========= photo ==========
            let z = testing[7].disp.location

            if(z === ""){
              document.getElementById("sidebarRight").style.display = "none";
            } else {
              document.querySelector(".intro__box2-disp").src = testing[7].disp.location;
            }                               

                 // ====== reject display ========

            const box1 = document.querySelector('.insertBox')

            const box2 = document.createElement('div')
            box2.className = 'failureDisplay__box21 item';

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
            box2.appendChild(div8)
            $(box2).insertAfter(box1)

            document.getElementById("disp1").src = testing[7].failureContents[0].failureCarousel;
            document.querySelector(".failureDisplay__box2-heading--1").innerHTML = testing[7].failureContents[0].failureLabel;    

            // ======= end of 1st box =======
     
            const box3 = document.createElement('div')
            box3.className = 'failureDisplay__box22 item';

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
            box3.appendChild(div1)
            box3.appendChild(div2)

            $(box3).insertAfter(box2)

            document.getElementById("disp2").src = testing[7].failureContents[1].failureCarousel;
            document.querySelector(".failureDisplay__box2-heading--2").innerHTML = testing[7].failureContents[1].failureLabel; 

            // ========== end of box 2 ==============

            // Cause of Failure
            let c = "";
              for (i=0; i < testing[7].descriptionContent.length; i++){
                  c += testing[7].failureContents[1].failureCause + "<br>";
              }
              
              $("#disp1").click(()=>{
                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide();   
                document.getElementById("rejDisp").src = testing[7].failureContents[0].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[7].failureContents[0].failureDescription;

                let d = "";
                for (i=0; i < testing[7].failureContents[0].failureCause.length; i++){
                    d += testing[7].failureContents[0].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = d;
              })

              $("#disp2").click(()=>{
                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide();   
                document.getElementById("rejDisp").src = testing[7].failureContents[1].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[7].failureContents[1].failureDescription;
                let e = "";
                for (i=0; i < testing[7].failureContents[1].failureCause.length; i++){
                    e += testing[7].failureContents[1].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = e;              
              })

              $(".btnF").click(()=>{
                document.querySelector('.intro').style.display = 'none';
                document.querySelector('.failureDisplay').style.visibility = 'visible';
                $(".failureDisplay").show();
              })   

              $(".btnC").click(()=>{
                $(".intro").hide();
                document.querySelector('.rejectDetails').style.visibility = 'hidden';
                $(".failureDisplay").show();
              })
        }
    }
    xhr.send();
}

// =====================  End of IO Test  =====================================

// =====================  Internal Illumination  ==============================

document.getElementById('intIllum').addEventListener('click', loadDataintIllum);

function loadDataintIllum(){
 
const show = new Show()
const intIllum = new Btn('#intIllum', '#intIllum')
intIllum.mainButton();
document.querySelector('.failureDisplay').style.visibility = 'hidden';

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'test.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            const testing = JSON.parse(this.responseText);
            document.getElementById("testDescription").innerHTML = testing[8].testDescription;  
            document.getElementById("failureTypes").innerHTML = testing[8].testDescription + " Failure Types";  

            // Test Description
            let i, a = "";
              for (i=0; i < testing[8].descriptionContent.length; i++){
                  a += testing[8].descriptionContent[i] + "<br>";
              }
              document.getElementById("descriptionContent").innerHTML = a;

            //   ========= photo ==========
            let z = testing[8].disp.location

            if(z === ""){
              document.getElementById("sidebarRight").style.display = "none";
            } else {
              document.querySelector(".intro__box2-disp").src = testing[8].disp.location;
            }                               

                 // ====== reject display ========

            const box1 = document.querySelector('.insertBox')

            const box2 = document.createElement('div')
            box2.className = 'failureDisplay__box21 item';

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
            box2.appendChild(div8)
            $(box2).insertAfter(box1)

            document.getElementById("disp1").src = testing[8].failureContents[0].failureCarousel;
            document.querySelector(".failureDisplay__box2-heading--1").innerHTML = testing[8].failureContents[0].failureLabel;    

            // ======= end of 1st box =======

            // Cause of Failure

            let c = "";
              for (i=0; i < testing[8].descriptionContent.length; i++){
                  c += testing[8].failureContents[0].failureCause + "<br>";
              }
              
              $("#disp1").click(()=>{
                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide();   
                document.getElementById("rejDisp").src = testing[8].failureContents[0].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[8].failureContents[0].failureDescription;

                let d = "";
                for (i=0; i < testing[8].failureContents[0].failureCause.length; i++){
                    d += testing[8].failureContents[0].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = d;
              })

              $(".btnF").click(()=>{
                document.querySelector('.intro').style.display = 'none';
                document.querySelector('.failureDisplay').style.visibility = 'visible';
                $(".failureDisplay").show();
              })   

              $(".btnC").click(()=>{
                $(".intro").hide();
                document.querySelector('.rejectDetails').style.visibility = 'hidden';
                $(".failureDisplay").show();
              })
        }
    }
    xhr.send();
}

// =====================  End of Internal Illumination  ============

// =====================  Aimer Test  ==============================

document.getElementById('aimer').addEventListener('click', loadDataaimer);

function loadDataaimer(){
 
const show = new Show()
const aimer = new Btn('#aimer', '#aimer')
aimer.mainButton();
document.querySelector('.failureDisplay').style.visibility = 'hidden';

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'test.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            const testing = JSON.parse(this.responseText);
            document.getElementById("testDescription").innerHTML = testing[9].testDescription;  
            document.getElementById("failureTypes").innerHTML = testing[9].testDescription + " Failure Types";  

            // Test Description
            let i, a = "";
              for (i=0; i < testing[9].descriptionContent.length; i++){
                  a += testing[9].descriptionContent[i] + "<br>";
              }
              document.getElementById("descriptionContent").innerHTML = a;

            //   ========= photo ==========
            let z = testing[9].disp.location

            if(z === ""){
              document.getElementById("sidebarRight").style.display = "none";
            } else {
              document.querySelector(".intro__box2-disp").src = testing[9].disp.location;
            }                               

                 // ====== reject display ========

            const box1 = document.querySelector('.insertBox')

            const box2 = document.createElement('div')
            box2.className = 'failureDisplay__box21 item';

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
            box2.appendChild(div8)
            $(box2).insertAfter(box1)

            document.getElementById("disp1").src = testing[9].failureContents[0].failureCarousel;
            document.querySelector(".failureDisplay__box2-heading--1").innerHTML = testing[9].failureContents[0].failureLabel;    
          
            // ======= end of 1st box =======
     
            const box3 = document.createElement('div')
            box3.className = 'failureDisplay__box22 item';

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
            box3.appendChild(div1)
            box3.appendChild(div2)

            $(box3).insertAfter(box2)

            document.getElementById("disp2").src = testing[9].failureContents[1].failureCarousel;
            document.querySelector(".failureDisplay__box2-heading--2").innerHTML = testing[9].failureContents[1].failureLabel; 

            // ========== end of box 2 ==============

            // Cause of Failure
            let c = "";
              for (i=0; i < testing[9].descriptionContent.length; i++){
                  c += testing[9].failureContents[1].failureCause + "<br>";
              }
              
              $("#disp1").click(()=>{
                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide();   
                document.getElementById("rejDisp").src = testing[9].failureContents[0].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[9].failureContents[0].failureDescription;

                let d = "";
                for (i=0; i < testing[9].failureContents[0].failureCause.length; i++){
                    d += testing[9].failureContents[0].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = d;
              })

              $("#disp2").click(()=>{
                document.querySelector('.rejectDetails').style.visibility = 'visible';
                $(".failureDisplay").hide();
                $(".intro").hide();   
                document.getElementById("rejDisp").src = testing[9].failureContents[1].failureImage; 
                document.getElementById("rejDesc").innerHTML = testing[9].failureContents[1].failureDescription;
                let e = "";
                for (i=0; i < testing[9].failureContents[1].failureCause.length; i++){
                    e += testing[9].failureContents[1].failureCause[i] + "<br>";
                }
                document.getElementById("rejExp").innerHTML = e;              
              })

              $(".btnF").click(()=>{
                document.querySelector('.intro').style.display = 'none';
                document.querySelector('.failureDisplay').style.visibility = 'visible';
                $(".failureDisplay").show();
              })   

              $(".btnC").click(()=>{
                $(".intro").hide();
                document.querySelector('.rejectDetails').style.visibility = 'hidden';
                $(".failureDisplay").show();
              })
        }
    }
    xhr.send();
}

// =====================  End of Aimer Test  =====================================