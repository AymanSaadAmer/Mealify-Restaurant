// var fname =document.querySelector(".Name");
// var email = document.querySelector(".Email");
// var password =document.querySelector(".Password");
// var SingUpForm=document.querySelector(".signupForm")
// var allPersonal;
// if(localStorage.getItem("allPersonal") !=null)
//     {
//     allPersonal=JSON.parse(localStorage.getItem("allPersonal"));    
//     console.log(allPersonal);
    
//     }else{
//     allPersonal=[];
//     }
    
// function getvalue(event){
//     event.preventDefault(); // منع السلوك الافتراضي للنموذج
    
//     if (!fname.value || !email.value || !password.value) {
//          // رسالة خطأ للمستخدم
//             var wrong_massage=document.querySelector(".alert-danger")
//             wrong_massage.classList.replace("d-none","d-block")
//         return; // إيقاف العملية إذا كانت الحقول فارغة
//     }
//     else{
//         var Succeed_massage=document.querySelector(".alert-info")
//             Succeed_massage.classList.replace("d-none","d-block")
//     }

//     var personal={
//         NAME:fname.value,
//         EMAIL:email.value,
//         PASSWORD:password.value
//     }
//     allPersonal.push(personal);

//     localStorage.setItem("allPersonal",JSON.stringify(allPersonal))

//     clear_value()
// };
// function clear_value(){
//     fname.value="";
//     email.value="";
//     password.value="";
// };

// SingUpForm.addEventListener("submit",getvalue);

var fname = document.querySelector(".Name");
var email = document.querySelector(".Email");
var password = document.querySelector(".Password");
var SingUpForm = document.querySelector(".signupForm");

var allPersonal = localStorage.getItem("allPersonal") 
    ? JSON.parse(localStorage.getItem("allPersonal")) 
    : [];

// تسجيل المستخدم
function getvalue(event) {
    event.preventDefault(); // منع السلوك الافتراضي للنموذج

    // التحقق من الحقول
    if (!fname.value || !email.value || !password.value) {
        document.querySelector(".alert-danger").classList.replace("d-none", "d-block");
        return;
    }

    // التحقق من البريد الإلكتروني (لا يجب أن يتكرر)
    var existingUser = allPersonal.find(user => user.EMAIL === email.value);
    if (existingUser) {
        alert("This email is already registered!");
        return;
    }

    // إضافة المستخدم الجديد
    var personal = {
        NAME: fname.value,
        EMAIL: email.value,
        PASSWORD: password.value,
    };

    allPersonal.push(personal);
    localStorage.setItem("allPersonal", JSON.stringify(allPersonal));

    // عرض رسالة النجاح
    document.querySelector(".alert-info").classList.replace("d-none", "d-block");

    // تنظيف الحقول
    clear_value();

    // إعادة التوجيه إلى صفحة تسجيل الدخول
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1500);
}

function clear_value() {
    fname.value = "";
    email.value = "";
    password.value = "";
}

SingUpForm.addEventListener("submit", getvalue);



