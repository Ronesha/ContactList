//Set up a database to store contact information
let db = [
   {name:'James Smith', email:'Jsmith@gmail.com', phoneNumber:'222-112-3456', age:35},
   {name:'Laura Whitman', email:'LWhitman@gmail.com', phoneNumber:'256-1234-6789', age:18},
   {name:'Veronica Yvonne', email:'Vyvonne@gmail.com', phoneNumber:'251-767-1345', age:40},
   {name:'Demetrius Johnson', email:'Meechjonson@gmail.com', phoneNumber:'205-234-6782', age:21}
];

//Set up an IIFE to call the functions within
(function Contact(db){
   this.init = function(){
      this.generateContacts();
      this.enterUser();
     
   };


 //creating a new contact on the right hand side
 this.generateContacts = function(){
    let parent = document.querySelector('#parent-element');
    let template = '';
  //Loop through database and display contact list
   for(var i =0; i< db.length; i++){
      template += `<ul class="collection">
                   <li class="collection-item avatar">
                   <img src="img/avatar.png" alt="" class="circle">
                   <span class="title">${db[i].name}</span>
                   <p>${db[i].email}<br>
                   ${db[i].phoneNumber} <br>
                   ${db[i].age}<br>
                  </p>
                  <a href="#!" class="secondary-content"><i class="far fa-address-card"></i>
                  <span class="delete-item"><i class="fas fa-times-circle"></i></span></a>
                 </li>
                 </ul>            
                    `
   }
 
   parent.innerHTML = '';
   parent.insertAdjacentHTML('afterbegin', template);
   deleteItem();
   };
  
   //Create new contact
    this.enterUser = function(){
    
      function grabUser(){
      let name = document.querySelector('#user-name').value;
      let email = document.querySelector('#user-email').value;
      let phoneNumber = document.querySelector('#user-number').value;
      let age = document.querySelector('#user-age').value;
      let elements = [name, email, phoneNumber, age];
      
      if(validateUser(elements)){
         document.querySelector('#myForm').reset();
         db.push({name:name, email:email, age:age})
         generateContacts();
         } else {
            document.querySelector('.btn-red').style.display = 'block';
            setTimeout(function(){
               document.querySelector('.btn-red').style.display = 'none';
            }, 2000)
         }
      }
       
         document.querySelector('#myForm').addEventListener('submit', function(e){
         e.preventDefault();
         grabUser();
   
   
        });
      
      };
   
      //Form Validation
     this.validateUser = function(inputs){
   
       for(var i = 0; i < inputs.length; i++) {
            if(inputs[i] === ''){
               return false
            }
       }
       return true;
     };
   

     //Delete Contact
     this.deleteItem = function(){
      let buttons = document.querySelectorAll('.delete-item');
 
      function deleteThis(element){
        document.getElementById('#parent-element').remove(child); 
        db.splice(obj,1);
        generateList();
 
 
      }
 
      for(var i = 0; i< buttons.length; i++){
      buttons[i].addEventListener('click', function(e){
           deleteThis(this);
           console.log(buttons)
      })
   
    }
    }
  
     


   this.init();
}) (db);