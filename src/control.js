


export default class Contro {
    static controlval(pam){
         const ıs = pam.find(pak => pak === "");
   
 
 
 if(ıs === undefined){
     
    
        const  ıslem = {
                  
                    durum:true,
                   
                }
        return ıslem;
     
     
 }else{
         
     const  ıslem = {
                  
                    durum:false,
                    mesaj:'Antrenman programınız boş değer olamaz.'
                }
       return ıslem;
 }
        
     }
     
     static numbrscontrol(pam){
            const ınıt = pam.every(num => isNaN(num)) ; 
       
           
      
     
 
     if(ınıt){
     
            const  ıslem = {
                  
                    durum:true
                   
                }
        return ıslem;
     }else{
       
         let  ıslem = {
                  
                    durum:false,
                    mesaj:'Antrenman programınıza sayı girmeyiniz.'
                }
        
         
        return ıslem;
     }  
         
         
     }
     
     static corrıvmecontrol(valx){
   //dızıde en az 2 tane olmasını bulcaz 
     
 
     
     const ıslem2 = valx.filter(pazx => pazx === "SQUAT");
        
     
         
     
     
   
         if(ıslem2.length == 2 ){
             
             
            
                const ıslem02 = valx.filter(pazx =>  pazx === "DEADLIFT")
        
 
    
             
             if(ıslem02.length == 2 ){
                 
     const ıslem03 = valx.filter(pazx => (pazx === "BENCH PRESS") || (pazx === "PRESS") ); 
                 
         
         
                 if(ıslem03.length == 2){
            
                     
       const ıslem04 = valx.filter(pazx => pazx === "OHP");
        
         
         
  
                 if(ıslem04.length == 2){
                        
                   const  ıslem = {
                  
                    durum:true
                   
                }
       return ıslem;
            
                    
                    }else{
                      
                   const  ıslem = {
                  
                    durum:false,
                    mesaj:'Antrenman programınız omuzların düşmanı ohp  hareketi olmalı ve  haftada 2 kez olacak şekilde ayarlamalısın'
                }
       return ıslem;
                       
                    }   
                     
                     
                     
                    
                    }else{
                    
                     const  ıslem = {
                  
                    durum:false,
                    mesaj:'Antrenman programınız Bench press hareketi olmalı ve  haftada 2 kez olacak şekilde ayarlamalısın'
                }
       return ıslem;
                    }
     
                
                }else{
                   
                    const  ıslem = {
                  
                    durum:false,
                    mesaj:'Antrenman programınız Deadlift hareketi olmalı ve  haftada 2 kez olacak şekilde ayarlamalısın'
                }
       return ıslem;
                }
             
             
             
            }else{
               
               const  ıslem = {
                  
                    durum:false,
                    mesaj:'Antrenman programınız Squat hareketi olmalı ve  haftada 2 kez olacak şekilde ayarlamalısın'
                }
       return ıslem;
            }
     
     
    
     
    
    
     
     
 }
     
     static  kardıocontrol(karx){
     
     
     
    const bolxsonc =  karx.includes("KOŞU", 2);
     
   
     
     
     if(bolxsonc){
         
       
             const  ıslem = {
                  
                    durum:true
                   
                }
       return ıslem;
        
         
      
     }else{
         const  ıslem = {
                  
                    durum:false,
                    mesaj:'Bu program kilo vermek isteyenler içindir dolayısıyla  antrenman yapmadığınız bir gün olan çarşamba günü için kardiyonuzu en az 45 dakika en fazla 60 dakika olacak sekilde koşu seçeneğini kullanarak yazınız daha sonra o gün serbestsiniz...! '
                }
       return ıslem;
     }
     
 }
     
    static squatcontrol(squx){
       
    
 
  function ıslem(){
 
 return squx[0] == "SQUAT";
 }
 
  function ıslem2(){
 
 return squx[3] == "SQUAT";
 }
 
 
 const sonuc =  squx.findIndex(ıslem);
 
     
    
     
     if(sonuc !== -1){ // yanı 0rıncı ındexde bulmus demek
          const sonuc2 =  squx.findIndex(ıslem2);
         if(sonuc2 !== -1){
                const  ıslem = {
                  
                    durum:true
                   
                }
       return ıslem;
         }else{
              const  ıslem = {
                  
                    durum:false,
                    mesaj:'Haftanın ilk günü yazmanız güzel.Fakat 48 saat geçtikten sonra perşembe günü için ilk yapacagınız hareket squat olmalı'
                }
       return ıslem;
         }
         
       
     }else{
           const  ıslem = {
                  
                    durum:false,
                    mesaj:'Lütfen haftanın başlangıcında squat yazınız.Büyük kas grubudur. '
                }
       return ıslem;
     }
 }
     
     static dedadlıfcontrol(deadx){
     
     
 
  function ıslem(){
 
 return deadx[5] == "DEADLIFT";
 }
 
  function ıslem2(){
 
 return deadx[8] == "DEADLIFT";
 }
 
 
 const sonuc =  deadx.findIndex(ıslem);
 
     
    
     
     if(sonuc !== -1){ // yanı 5rıncı ındexde bulmus demek
          const sonuc2 =  deadx.findIndex(ıslem2);
         if(sonuc2 !== -1){
               const  ıslem = {
                  
                    durum:true
                   
                }
       return ıslem;
         }else{
             const  ıslem = {
                  
                    durum:false,
                    mesaj:'Haftanın ilk günü olarak yazmanız güzel.Fakat 48 saat geçtikten sonra perşembe günü için 2. yapacagınız hareket deadlift olmalı örneğin Romanian Deadlift olabilir'
                }
       return ıslem;
         }
         
       
     }else{
         const  ıslem = {
                  
                    durum:false,
                    mesaj:'Lütfen haftanın başlangıcında squattan sonra hareketiniz sumo deadlift olsun.Büyük kas grubudur. '
                }
       return ıslem;
     }
     
 }
     
     static benchcontrol(bencx){
     
     
 
  function ıslem(){
 
 return bencx[10] == "BENCH PRESS";
 }
 
  function ıslem2(){
 
 return bencx[13] == "BENCH PRESS";
 }
 
 
 const sonuc =  bencx.findIndex(ıslem);
 
     
    
     
     if(sonuc !== -1){ // yanı 10unncı ındexde bulmus demek
          const sonuc2 =  bencx.findIndex(ıslem2);
         if(sonuc2 !== -1){
                const  ıslem = {
                  
                    durum:true
                    
                }
       return ıslem;
         }else{
              const  ıslem = {
                  
                    durum:false,
                    mesaj:'Haftanın ilk günü olarak  yazmanız güzel.Fakat 48 saat geçtikten sonra perşembe günü için 3. yapacagınız hareket bench press olmalı'
                }
       return ıslem;
         }
         
       
     }else{
        const  ıslem = {
                  
                    durum:false,
                    mesaj:'Lütfen haftanın başlangıcında deadliiften sonraki hareketiniz bench press olsun.Büyük kas grubudur aynı şekilde. '
                }
       return ıslem;
     }
     
 }
     
    static ohpcntrol(ohpx){
     
 
  function ıslem(){
 
 return ohpx[15] == "OHP";
 }
 
  function ıslem2(){
 
 return ohpx[18] == "OHP";
 }
 
 
 const sonuc =  ohpx.findIndex(ıslem);
 
     
    
     
     if(sonuc !== -1){ // yanı 10unncı ındexde bulmus demek
          const sonuc2 =  ohpx.findIndex(ıslem2);
         if(sonuc2 !== -1){
               const  ıslem = {
                  
                    durum:true,
                    mesaj:'tebrikler temel hareketlerın haftada 48 saat ara vererek 2 kez calışmaya olanak sağlamış oldun,ayrıca pazartesi ve perşembe günleri için 5 ve 6. hareketlerin için eksık olduğun hareketleri ekleyebilirsin'
                   
                }
       return ıslem;
         }else{
           const  ıslem = {
                  
                    durum:false,
                    mesaj:'Haftanın ilk günü olarak  yazmanız güzel.Fakat 48 saat geçtikten sonra perşembe günü için 4. yapacagınız hareket  ohp olmalı'
                }
       return ıslem;
         }
         
       
     }else{
      const  ıslem = {
                  
                    durum:false,
                    mesaj:'Lütfen haftanın başlangıcında bench pressden sonraki hareketiniz ohp olsun.Büyük kas grubudur aynı şekilde. '
                }
       return ıslem;
     } 
 }
     
     
   static assistccedaycontorl(degrx){
    
      let newxarr = [];
     for(let i =0;i<degrx.length;i++){
       
         if(i == 1 || i == 21 || i == 26 || i == 6){
          
             newxarr.push(degrx[i].toUpperCase());
            
         }//bu ındexdekı degerlerı arraye attık degerlerı ıncelıcez
         
     }
     
  console.log(newxarr);

   const dgrdc = newxarr.reduce(function(prev,curr,index){
       
       if(curr == "DB PRESS"){
           
           prev.push(curr);
         
       }
       
       if(curr == "CHEST PRESS"){
             prev.push(curr);
       }
       
     if(curr == "INCLINE CURL"){
             prev.push(curr);
       }
       if(curr == "SKULL CRUSHER"){
             prev.push(curr);//REDUCER ETME ISLEMIMIZ
       }
       
                                  
       return prev;
         
       
      
       
   },[]);
  console.log(dgrdc);
     
     if(dgrdc.length == 4){

         const  ıslem = {
                    durum:true,
                    mesaj:'Nokta atışı hareketler seçtin bravvoo.'
                }
       return ıslem;
     }else{
          const  ıslem = {
                  
                    durum:false,
                    mesaj:'Spora yeni başlayan bir insansın lütfen salı günü için asistan hareketler bul bak buraya bırakıyorum,örneğin DB PRESS, CHEST PRESS,INCLINE CURL,SKULL CRUSHER hareketlerini tercih et cuma gününüde aynı şekilde yapabilirsin fakat orayı sana bırakıyorum artık öğrendin...(: '
                }
       return ıslem;
     }
     
     
 }
     
     
     
     
 }
 