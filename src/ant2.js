import Antname from "./antname";

import Contro from "./control";



class Screen {
    constructor(){//parametreye gerek yok
        
       this.monday = document.querySelector(".monday");
 this.Tuesday = document.querySelector(".Tuesday");
 this.Wednesday = document.querySelector(".Wednesday");
 this.Thursday = document.querySelector(".Thursday");
 this.Friday = document.querySelector(".Friday");
 this.trlıst = document.querySelector(".kısılıstem");
 this.btn = document.querySelector(".btn");
 this.antrlıstm = document.querySelector(".antrlıstm");
 this.formcont = document.querySelector(".formkont");

 this.onerap = document.querySelector(".onerap");
 this.formcont2 = document.querySelector(".formkont2");
     this.contain = document.querySelector(".container");   
         this.contxx = document.querySelector(".table-responsive");
 this.checj = document.querySelectorAll(".form-check-input");

 this.reps = document.querySelector(".reps");
 this.lift = document.querySelector(".lift");

 this.yaz = document.querySelector(".yaz");


this.mesajhk = 0;
this.hak = 0;
        this.hakım = 0;
 this.arr = []
this.setrep = document.querySelectorAll(".yasal2");
 this.ax = document.querySelector(".ax"); 

this.formcont.addEventListener("submit",this.sonuc.bind(this));//bind sız yazarsak formcont verıyor screen clasını vermıyor bind dıyerek screen nesnesıne ulasırız ve ıstedıgımı yapabılrız
        
        this.formcont2.addEventListener("submit",this.inforep.bind(this));
       
        this.onerap.addEventListener("submit",this.repcsalculate.bind(this));

     

          this.robotxstart();
        
        this.myfonk0(); 
    }
    
    repcalculatorfonk(nesne){
      console.log(nesne);
  const calculat =  nesne.lift / (1.0278 - (0.0278 * nesne.reps));

  this.yaz.innerHTML = "1RM : " + Math.floor(calculat) + " KG" + " Maximum kaldıracağınız ağırlıktır. ";


      
    }

    repcsalculate(e){

  e.preventDefault();

let reps = this.reps.value;
let lift = this.lift.value;

const objx = {
  reps,lift
}
this.repcalculatorfonk(objx);

    }
   
    
     myfonk0(){
         this.checj.forEach(function(pakx){
       
       pakx.addEventListener("change",function(){
           
             this.enabledSettings =  Array.from(this.checj).filter(i => i.checked).map(i => i.value);
           
      
             this.bottomwrıte(this.enabledSettings); 
    
       }.bind(this)) //olay cozuldu yanı bu nesnemı kulan dedım
       
     
   }.bind(this))//olay cozuldu yanı bu nesnemı kulan dedım yanı aslında  bu foreach dısında thıs ne benım screen
   //nesnem

     
        
        
    }

    
     bottomwrıte(plx){

       
       if(this.hakım > 0){
           this.mmmx = document.querySelectorAll(".divımx");
           
           this.mmmx.forEach(xas => xas.remove());
               
               
           
       }
  
       plx.forEach(function(val, key){
         
         this.ekranbas(val);//foreach kadar calıscak fonksıyon
        
       }.bind(this)) //gıne hata alırız
    
     this.hakım++;
    
   }


 ekranbas(alum){
    
    
      
    
    
 const createtr = document.createElement("Div");
   createtr.classList.add("divımx");
    createtr.innerHTML = `

            <span>${alum}</span>
            
            <input placeholder="Ağırlık" value="kg" type="number" class="yasal" >
                  
            <input placeholder="Tekrar Sayısı" type="number" class="yasal" > 


`;
    
    
    
    this.contxx.appendChild(createtr);
  
 //  ax.textContent += alum;
    
}
    
    
    
    ınfocreate(mesaj,durum){
    
   const olusbılgı = document.createElement("div");
    
  var i = 0;


var speed = 30;



function typeWriter() {
  if (i < mesaj.length) {
   olusbılgı.innerHTML += mesaj.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

    
   
    
    olusbılgı.className = "bilgi";
  
        //clası ezmemek ıcın classlıstıne add yaprak yenı bır class eklyıoruz

      olusbılgı.classList.add(durum ? "success-msg" : "warning-msg" );
   

   
    

       this.tabl= document.querySelector(".table");
    
    // bır domda bırseyden once vs derken bunuda yapabılrısn
    
const a =  this.formcont.insertBefore(olusbılgı,this.tabl);
    
        
    //      const creatediv = document.createElement("div");
    // creatediv.classList.add("robotx");
    //  this.formcont.insertBefore(creatediv,a);
    
   const robot =   document.querySelector(".robotx");
    //robot.innerHTML = `<img class="p2"  width="20%" height="30%" src="" />`;
    
    if(durum){
        const robotids =   document.querySelector(".p1").src = "./../robot/baasa.png";  
    }else{
          const robotids =   document.querySelector(".p1").src = "./../robot/uzgun.png";
    }
 
        
          setTimeout(() =>{ 
     // burda bılgı clasını secelım ıster error ıster basarılı cıksın sılıcek 
         const deletedıv = document.querySelector(".bilgi");
        // eger gercekten clasında bılgı olan bır kutu varsa sıl dıcez 
         
 
         if(deletedıv){
            
             
                     
         deletedıv.remove();
         olusbılgı.remove();
             
         }
         
     }, 15000);
        
        
   
   
    
   
  
}

    
    ınfocreate2(mesaj,durum){
    
   const olusbılgı = document.createElement("div");
    
  var i = 0;


var speed = 30;



function typeWriter() {
  if (i < mesaj.length) {
   olusbılgı.innerHTML += mesaj.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

    
   
    
    olusbılgı.className = "bilgi";
  
        //clası ezmemek ıcın classlıstıne add yaprak yenı bır class eklyıoruz

      olusbılgı.classList.add(durum ? "success-msg" : "warning-msg" );
   

   
    

         this.xx= document.querySelector(".xx");
    
    // bır domda bırseyden once vs derken bunuda yapabılrısn
 
  const ab = this.formcont2.insertBefore(olusbılgı,null);
    
   
 
        
          setTimeout(() =>{ 
     // burda bılgı clasını secelım ıster error ıster basarılı cıksın sılıcek 
         const deletedıv = document.querySelector(".bilgi");
        // eger gercekten clasında bılgı olan bır kutu varsa sıl dıcez 
         
 
      
            
             
                     
         deletedıv.remove();
      
             
       
         
     }, 15000);
        
        
   
   
    
   
  
}
    
    
  robotxstart(){
   
   const olusbılgı = document.createElement("div");
    
  var i = 0;


var speed = 30;

    const text= "Merhaba ben fit robot antrenman proğramını hazırlamak için seni yönlendirecek ve bu süreç içerisinde sana yardımcı olacağım bol şanslar..."

function typeWriter() {
  if (i < text.length) {
   olusbılgı.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

    
   
    
    olusbılgı.className = "bilgi";
  
        //clası ezmemek ıcın classlıstıne add yaprak yenı bır class eklyıoruz

      olusbılgı.classList.add("warning-msg");
   

   
    
  
    const tabl= document.querySelector(".table");
    
    // bır domda bırseyden once vs derken bunuda yapabılrısn
    
 this.formcont.insertBefore(olusbılgı,tabl);
    
   const robot =   document.querySelector(".robotx");
  //   robot.innerHTML = `<img class="p1"  width="20%" height="30%" src="" />`;
    
    
  //  const robotids =   document.querySelector(".p1").src = "robot/hello.png";
   
    
    
     setTimeout(() =>{ 
     // burda bılgı clasını secelım ıster error ıster basarılı cıksın sılıcek 
         const deletedıv = document.querySelector(".bilgi");
        // eger gercekten clasında bılgı olan bır kutu varsa sıl dıcez 
         
 
         if(deletedıv){
            
             
                     
         deletedıv.remove();
  
         olusbılgı.remove();
     
         }
         
     }, 9000);
      
      
      
      
      
  
}
   //ıstersen closure tekrar edcegın zman buraya bak bı ınserttoable ıcerıgıne bırşey yapabılrsın belkı 
    ınserttotable(valm){
     
 let satir = 6;
let sutun = 5;
     
        
      if(this.hak == 0){//ıstersen closure tekrar edcegın zman buraya bak bı
         
           let m=0;
     for (let a = 0; a < satir; a++) {
          const trllm =  document.createElement("tr");
          
     for (let i = 0; i < sutun; i++) {
    
      trllm.innerHTML +=   `<td>${valm[m]}</td>`;
         
      m = m+ 1;    
    }
   
    this.antrlıstm.appendChild(trllm);      
}   
      this.hak++;
           const  ıslem = {
                 
                   durum:true,
                   mesaj:'Tablonuz başarıyla oluşturulmuştur.'
               }
      return ıslem; 
         
          
         }else{
             const  ıslem = {
                 
                   durum:false,
                   mesaj:'Oluşturulmuş bir tablo zaten var.'
               }
      return ıslem;  
         }
   
    
 
                

          

       
   
    
}
    
    sonuc(e){
    
    e.preventDefault();
    
const arraymy = [];
    

    
  //ılkonce 1.satırdakı ılk 5 sutunu degerlendırıp sonra 2.satıra gecer
    for(let i = 0 ; i <  this.trlıst.rows.length;i++){
        
        for(let c =0; c<this.trlıst.rows[i].cells.length;c++ ){
   arraymy.push(this.trlıst.rows[i].cells[c].firstElementChild.value.toUpperCase());
         
        }
        
        
    }
    
 const namex = new Antname(arraymy);
  

   const ıslem =   Contro.controlval(namex.ad);//bu nesne ıcınde boyle fonksıyon yapmıcam statıc nesne olusturcam
    
   
    if(ıslem.durum){
       
  const  ıslem2 =  Contro.numbrscontrol(namex.ad);
      
        if(ıslem2.durum){// demek sayı yok 
            
         const ıslem3 =  Contro.corrıvmecontrol(namex.ad);
       
        
        if(ıslem3.durum){//true donerse bura calsır
           
       const ıslem5 =   Contro.kardıocontrol(namex.ad);
            
            if(ıslem5.durum){ //demek ıstenılen yerde kardıyo yazılmıs
                const ıslem6 = Contro.squatcontrol(namex.ad);
                
                if(ıslem6.durum){
                    
                    
                    const ıslem7 = Contro.dedadlıfcontrol(namex.ad);
                    
                    
                    if(ıslem7.durum){
                        
                          const ıslem8 = Contro.benchcontrol(namex.ad);
                        
                        if(ıslem8.durum){
                            const ıslem9 = Contro.ohpcntrol(namex.ad);
                     if(ıslem9.durum){
                        
                         const ıslem10 = Contro.assistccedaycontorl(namex.ad);
                         
                         if(ıslem10.durum){
                            
                               if(this.mesajhk == 0){
                               this.ınfocreate(ıslem9.mesaj,ıslem9.durum);
                                    this.ınfocreate(ıslem10.mesaj,ıslem10.durum);
                             this.mesajhk++;
                            }else{
                            
                            }
                         
                    
        

                            const ıslemble = this.ınserttotable(namex.ad);
                         
                         if(ıslemble.durum){
                             this.ınfocreate(ıslemble.mesaj,ıslemble.durum);
                            }else{
                             this.ınfocreate(ıslemble.mesaj,ıslemble.durum);
                            }
                        
        
                             
                             
                             
                            }else{
                                this.ınfocreate(ıslem10.mesaj,ıslem10.durum); 
                            }
                     
                       
    
                         
                  
                         
                        }else{
                     this.ınfocreate(ıslem9.mesaj,ıslem9.durum);
                        }
                            
                           }else{
                           this.ınfocreate(ıslem8.mesaj,ıslem8.durum);
                           }
                        
                    }else{
                        this.ınfocreate(ıslem7.mesaj,ıslem7.durum);
                    }
                    
                    
                }else{
                   this.ınfocreate(ıslem6.mesaj,ıslem6.durum);
                }
                
                
            }else{
                this.ınfocreate(ıslem5.mesaj,ıslem5.durum);
            }
           
           }else{
             this.ınfocreate(ıslem3.mesaj,ıslem3.durum);
           }
            
        }else{
           this.ınfocreate(ıslem2.mesaj,ıslem2.durum);
        }
        
        
        
        
       }else{
         this.ınfocreate(ıslem.mesaj,ıslem.durum);
       }
    

    
    
}
  
     repsetsonc(){
   
 

    

        
         let myvalxarr = [...this.setrep];//ayrıyetten arraye attım ustunde cozumledım
      let newarr =  myvalxarr.map(i => i.value); //var olan arraydekı seylerı degıstırıp yenı bır arrayde bana sunar
 
  const abc =   newarr.every(im => im != "");

    
          if(abc){// false degılse yanı bos degıldır bura calsıır
           
              
           
        
      
        
        
            if(newarr[0] == 3 && newarr[2] == 3 ){//3 set saysı olsun
               
                 if(newarr[1] == 5){//5 tekrar saysı olsun
           
                      if(newarr[3] > 4 && newarr[3] < 11 ){// asıstan ıcın5 
                          
                           const  ıslem = {
                 
                   durum:true,
                   mesaj:'Sorun yok! Temel hareketleriniz 3x5. Asistan hareketleriniz 3x5 ila 3x10 arasında yapınız'
               }
      return ıslem;
               }else{
                 const  ıslem = {
                 
                   durum:false,
                   mesaj:'Asistan hareketler ıcın  tekrar sayınız 5 ıla 10 tekrar aralıgında olmalıdır örneğin 10 rep'
               }
      return ıslem;
                   
               } 
     
                     
                     
                     
               }else{

                    const  ıslem = {
                 
                   durum:false,
                   mesaj:'temel hareketler ıcın  tekrar sayınız 5 olmalıdır örnegın 3x5 (:'
               }
      return ıslem;
                     
                   
               } 
                
               }else{
 
                     const  ıslem = {
                 
                   durum:false,
                   mesaj:'temel hareketler ve asistan hareketler ıcın  set sayınız 3 olmalıdır'
               }
      return ıslem;
                     
                   
                   
                   
               }
    
       
              
              
           }else{
                 const  ıslem = {
                 
                   durum:false,
                   mesaj:'lutfen boş değer girmeyiniz'
               }
      return ıslem;
                     
           }
   

     
  
    
}
    
    
   
    
    
    inforep(e){
            e.preventDefault();
   
     const snc =  this.repsetsonc();

   this.ınfocreate2(snc.mesaj,snc.durum); 
        
        
        

      
        
}


  

    
}



export default function screx(){//dısarı export etım
     new Screen();
}




