const userData = {
    eye:'', 
    verb:'',
    motor:'',
    total: ''
}

const total = (userData) => {
    // console.log(userData)
    userData.eye = parseInt(userData.eye);
    userData.verb = parseInt(userData.verb);
    userData.motor = parseInt(userData.motor);
    // console.log(userData);
    // userData.total = userData.eye + userData.verb + userData.motor;
    // return sum;
    printToPage(userData);

};


const printToPage = (sum) => {
    console.log(sum); //if statement.
    if (userData.total >= 3 && userData.total <= 8 ) {
        $('#result').html(`<h2> the patient is in high level risk </h2>`)
        
        //need to change .text to html for H2 tags, wont work in just text
        console.log(`user data is between 3-8`);
        
        
    } else if (userData.total > 8 && userData.total <= 12 ) {
        $('#result').html(`<h2>the patient is in medium level risk </h2>`)

        console.log(`user data is between 8-12`);

        
    } else if (userData.total > 12 && userData.total <= 15) {
        $('#result').html(`<h2>the patient is in low level risk</h2>`)

        console.log(`user data is between 12-15`);

}   
}


$('form').on('submit', function(event){
    event.preventDefault();
    userData.eye = $('input[name=eye-response]:checked').val(); 
    userData.verb = $('input[name=verb-response]:checked').val();
    userData.motor = $('input[name=motor-response]:checked').val();

    userData.total = parseInt(userData.eye) + parseInt(userData.verb) + parseInt(userData.motor);
    
    total(userData); 
    
    // console.log(total(userData));
    // console.log(userData)
    



    $('.results').html(`<h2 class="resultTotal"> ${userData.total} </h2>`)

    

   /*  $('form').trigger("reset"); */

});




//correct organisation
//refresh clear




//add in 3 hidden message that will pop up with corresponding value

//make an if statement comparing userData.total to riskValue



