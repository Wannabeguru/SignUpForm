
document.getElementById('submit-btn').addEventListener('click', validatePass);

function validatePass(event) {
    const getPass = document.getElementById('password');
    const confirmed = document.getElementById('confirm');
    
    if (getPass.value != confirmed.value) {
        alert('Your passwords do not match, please try again.');
        event.preventDefault(); //Prevents form submission
    }
}

