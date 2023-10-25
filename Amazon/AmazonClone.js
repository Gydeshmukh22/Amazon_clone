const handleSignIn = () => {
   var EmailId = document.getElementById("EmailId").value;
   var Password = document.getElementById("Password").value;

   var noEmail = document.getElementById("noEmail");
   var WrongEmail = document.getElementById("WrongEmail");
   var noPassword = document.getElementById("noPassword");
   var WrongPassword = document.getElementById("WrongPassword");

   if (EmailId && Password) {
      if (EmailId === "Gyanavi@gmail.com" && Password === "12345678") {
         document.location = './index.html';
      } else {
         if (EmailId != 'Gyanavi@gmail.com') {
            WrongEmail.style.display = "block";
         }
         if (Password != '12345678') {
            WrongPassword.style.display = "block";
         }
      }
   } else {
      if (!EmailId) {
         noEmail.style.display = "block";

      }
      if (!Password) {
         noPassword.style.display = "block";

      }

   }
}

// sign in page pe emil/pass me kuch bhi type kre to msg nhi dikhna chahiye
const handleEnterpwd = () => {
   var noPassword = document.getElementById("noPassword");
   var WrongPassword = document.getElementById("WrongPassword");

   noPassword.style.display = "none";
   WrongPassword.style.display = "none";
}
const handleEnterEmail = () => {
   var noEmail = document.getElementById("noEmail");
   var WrongEmail = document.getElementById("WrongEmail");

   noEmail.style.display = "none";
   WrongEmail.style.display = "none";
}

const handleOpenSidebar = () => {
   var sidebar = document.getElementById("sidebar");
   sidebar.style.display = "block";
}
const handleCloseSidebar = () => {
   var sidebar = document.getElementById("sidebar");
   sidebar.style.display = "none";
}

// ye method use nh krni hai ...jitne jyada if else statement honge utna code execute hone me time lagega
// ***********----------------********

// const something =() =>{
//    var sidebar = document.getElementById("sidebar");
//    if (sidebar.style.display === "block") {
//       sidebar.style.display = "none";
//    }
//    else{
//       sidebar.style.display = "block";
//    }
// }

// fetch("https://dummyjson.com/products")
//    .then(res => res.json())
//    .then(data => {


//    })
//    .catch(err => {
//       console.log(err)
//    })
$.ajax({
   url: 'https://dummyjson.com/products',
   type: 'get',
   dataType: 'json',
   success: function (data) {

      for (let i = 0; i < data.products.length; i++) {

         const oneProduct = `
        <div class="oneProduct" >
            <p>${data.products[i].category}</p>
         
            <img src="${data.products[i].images[0]}" alt="${data.products[i].images[0]}">
         
            <div class="ratingandprice">
                
                  <h1>&#x20B9; ${data.products[i].price}</h1>
                  
                  <h3>Rating : ${data.products[i].rating}</h3>
            </div>
         
            <h2>${data.products[i].title}</h2>
            
            <h4>
              ${data.products[i].description}   
            </h4>
         
            <button>Add to Card</button>
         
       </div>
      `
         $('.products').append(oneProduct)
         // mainDiv.append(oneProduct)

      }
   },
   error: function (error) {
      console.log(error)
   },
   always: function () {
   }
})


