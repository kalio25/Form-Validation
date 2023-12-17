const form = document.getElementById("myForm");
form.addEventListener("submit", function(event){
     event.preventDefault();
    const label = document.getElementById('label')
    const firstName = document.getElementById('Fname').value;
    const LastName = document.getElementById('Lname').value;
    const Email = document.getElementById('email').value;
    const Acount = document.getElementById('num').value;
    const Routing = document.getElementById('RoutingN').value;
    const date = document.getElementById('Sdate').value;
    const month = document.getElementById('Month').value;
    const year = document.getElementById('year')

    if(firstName.trim() === "" || LastName.trim() === ''|| Email.trim() === ''||
    Acount.trim() === '' || Routing.trim() === '' ||date.trim()=== '' ||
    month.trim() === '' || year.trim()===''){
        alert('Please fill all Fields')
        return;
    }

})

