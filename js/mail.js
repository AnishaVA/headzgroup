const firebaseConfig = {
  apiKey: "AIzaSyDyjJto2CXYHXDbi9imSQQ_DTssBJ4jIMw",
  authDomain: "headzgroup-2857d.firebaseapp.com",
  databaseURL: "https://headzgroup-2857d-default-rtdb.firebaseio.com",
  projectId: "headzgroup-2857d",
  storageBucket: "headzgroup-2857d.appspot.com",
  messagingSenderId: "237135669705",
  appId: "1:237135669705:web:ac3f0d2e59da018596e018"
};

//initialize firebase

firebase.initializeApp(firebaseConfig);

//reference for db

var registerDB = firebase.database().ref('registerForm');

document.getElementById("registerForm").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();    
    
    var fullName = getElementVal('fullName');
    var mobile= getElementVal('mobile');
    var email = getElementVal('email');
    var password = getElementVal('password');
    var companyName = getElementVal('companyName');
    var companyAddress = getElementVal('companyAddress');
    var requirements = getElementVal('requirements');
    var dob = getElementVal('dob');
    var education = getElementVal('education');
    var resume = getElementVal('resume');
   
   console.log(fullName,mobile,email,password,companyName,companyAddress,requirements,dob,education,resume);

   saveMessages(fullName,mobile,email,password,companyName,companyAddress,requirements,dob,education,resume); 
   //alert
   document.querySelector('.alert').style.diplay = 'block';

   //remove alert
   setTimeout(()=>{
    document.querySelector('.alert').style.display='none';
},3000);

//reset form

document.getElementById("registerForm").reset();

}

const saveMessages = (fullName,mobile,email,password,companyName,companyAddress,requirements,dob,education,resume) => {
  var newregisterForm = registerDB.push();

  newregisterForm.set({
    fullName: fullName,
    mobile: mobile,
    email: email,
    password: password,
    companyName : companyName ,
    companyAddress : companyAddress,
    requirements: requirements,
    dob: dob,
    education: education,
    resume: resume,
  });
};

const getElementVal = (id) => {
    return  document.getElementById(id).value;
}
