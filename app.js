  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  import { getDatabase,ref,set,push,onValue  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDHoL4DYBEF5SWbMwbEoyvnjmmgeZX3lZU",
    authDomain: "dbms-26eaa.firebaseapp.com",
    projectId: "dbms-26eaa",
    storageBucket: "dbms-26eaa.appspot.com",
    messagingSenderId: "479277550050",
    appId: "1:479277550050:web:41006e1152064471d7d1bb",
    measurementId: "G-W237BTM67F"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase();



var inp = document.getElementById("task")
  window.sendData=function(){

    var obj={
        task : inp.value,
        dateTime : JSON.stringify(new Date()),
    
    }

    const keyRef = ref(database,"task/")
    obj.id=push(keyRef).key;
    
      const taskReference = ref(database,`task/${obj.id}`)

      set(taskReference,obj)
}

window.showData=function(){
    const ref2=ref(database,"task/")
    onValue(ref2,function(x){

        console.log(x.val())
    })
}