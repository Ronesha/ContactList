//set up Object Constructor
function Contact(name, email, phoneNumber, age){
   this.name = name;
   this.email = email;
   this.phoneNumber = phoneNumber;
   this.age = age;
}





//set up UI constructor

function UI (){};


//set up prototypes of UI to add and delete contacts

//add contact
UI.prototype.createContact = function(personalContact){
   
    //add contact to UI
 
    var parent = document.querySelector('.collection');
    let textTemplate = `
                   <li class="collection-item avatar">
                    <img src="img/avatar.png" alt="" class="circle">
                    <span class="title">${personalContact.name}</span>
                    <p>${personalContact.email}<br>
                      ${personalContact.phoneNumber} <br>
                     <strong>${personalContact.age}</strong><br>
                    </p>
                    <a href="#!" class="secondary-content"><i class="far fa-address-card"></i>
                    <i class="fas fa-times-circle"></i>
                  </a>
                  </li>
                  `
        parent.insertAdjacentHTML('beforeend', textTemplate);



}

//delete contact
UI.prototype.deleteContact = function(e){
      var parent = document.querySelector('.collection');
      parent.addEventListener('click', function(e){
            parent.remove(e.target);
      })
       
}

//clear fields
UI.prototype.clearForm = function(){
 document.querySelector('#user-name').value = '',
 document.querySelector('#user-email').value = '',
 document.querySelector('#user-number').value = '',
 document.querySelector('#user-age').value = ''
      
}




//Add Event Listener to Button once submited and call each of these functions

let btn = document.querySelector('.btn');
btn.addEventListener('click', enterContact);


function enterContact(e) {
   //get variables of the form
   let name = document.querySelector('#user-name').value,
       email = document.querySelector('#user-email').value,
       phoneNumber = document.querySelector('#user-number').value,
       age = document.querySelector('#user-age').value; 

 //create an object of the information from 

    const personalContact = new Contact(name,email,phoneNumber, age);


    //set up if/else statement for form validation
   
    if(name === '' || email === '' || phoneNumber === '' || age === ''){
           let alertbtn = document.querySelector('.btn-red');
           alertbtn.style.display = 'block';
        } else{
    //set up UI prototype to add contact to list and display
    const ui = new UI();
    ui.createContact(personalContact);
    ui.clearForm(personalContact);
    ui.deleteContact(e.personalContact);
    
   }

 //set up UI prototype to delete contact. Add Event listener to X button

   


  e.preventDefault();
}


