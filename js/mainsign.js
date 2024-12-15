// //login 

// var RE_EMAIL =document.querySelector(".RE_email");
// var RE_PASSWORD =document.querySelector(".RE_Password");
// var loginForm =document.querySelector(".loginForm");

// var all_REPersonal;
// if(localStorage.getItem("all_REPersonal") !=null)
//     {
//         all_REPersonal=JSON.parse(localStorage.getItem("all_REPersonal"));    
//     console.log(all_REPersonal);
    
//     }else{
//         all_REPersonal=[];
//     }
    
// function getvalue2(event){
//     event.preventDefault(); // منع السلوك الافتراضي للنموذج
    
//     if ( !RE_EMAIL.value || !RE_PASSWORD.value) {
//          // رسالة خطأ للمستخدم
//             var wrong_massage=document.querySelector(".alert-danger")
//             wrong_massage.classList.replace("d-none","d-block")
//         return; // إيقاف العملية إذا كانت الحقول فارغة
//     }
//     else{
//         var Succeed_massage=document.querySelector(".alert-info")
//             Succeed_massage.classList.replace("d-none","d-block")
//     }

//     var RE_personal={
        
//         RE_Email:RE_EMAIL.value,
//         RE_Password:RE_PASSWORD.value
//     }
//     all_REPersonal.push(RE_personal);

//     localStorage.setItem("all_REPersonal",JSON.stringify(all_REPersonal))

//     const storedUser = JSON.parse(localStorage.getItem('allPersonal'));
//     if (!storedUser) {
//         alert('No user found. Please sign up first.');
//         window.location.href = 'SignUp.html';
//         return;
//       }

//       // التحقق من بيانات تسجيل الدخول
//       if (storedUser.EMAIL === RE_EMAIL && storedUser.PASSWORD === RE_PASSWORD) {
//         console.log("welcom");
        
//       } else {
//         console.log("No welcom");
//       }

//     clear_value()
// };
// function clear_value(){
//     RE_EMAIL.value="";
//     RE_PASSWORD.value="";
// };

// loginForm.addEventListener("submit",getvalue2);

var email = document.querySelector(".RE_email");
var password = document.querySelector(".RE_Password");
var LoginForm = document.querySelector(".loginForm");

// جلب المستخدمين المخزنين
var allPersonal = localStorage.getItem("allPersonal") 
    ? JSON.parse(localStorage.getItem("allPersonal")) 
    : [];

// التحقق من تسجيل الدخول
function login(event) {
    event.preventDefault();

    // التحقق من الحقول
    if (!email.value || !password.value) {
        document.querySelector(".alert-danger").classList.replace("d-none", "d-block");
        return;
    }

    // العثور على المستخدم
    var user = allPersonal.find(
        user => user.EMAIL === email.value && user.PASSWORD === password.value
    );

    if (user) {
        // تسجيل دخول ناجح
        document.querySelector(".alert-info").classList.replace("d-none", "d-block");
    
        // تخزين اسم المستخدم في localStorage loggedInUserName
        localStorage.setItem("loggedInUserName", user.NAME);
    
        setTimeout(() => {
            // إعادة التوجيه إلى الصفحة الجديدة
            window.location.href = "index3.html"; // استبدل بـ رابط الصفحة
        }, 1500);
    } else {
        // تسجيل دخول فاشل
        document.querySelector(".alert-danger").classList.replace("d-none", "d-block");
    }
    
}

LoginForm.addEventListener("submit", login);