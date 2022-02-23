let userName = document.querySelector('.input-name');
let userEmail = document.querySelector('.input-email');
let userTel = document.querySelector('.input-tel');

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}
function isValidName (name){
    var pattern = new RegExp(/^[а-яА-ЯёЁa-zA-Z]+$/gi,)
    return pattern.test(name)
}
function isValidTel (tel){
    var pattern = new RegExp(/^[1-9]+$/gi);
    return pattern.test(tel)
}


document.querySelector('.input-submit').addEventListener("click", function(){
    event.preventDefault()
    document.querySelectorAll('.error').forEach(element => element.remove())
    document.querySelectorAll('.inpit-input').forEach(element => element.classList.remove('border-red'));
    if( userName.value.length < 3){
        userName.insertAdjacentHTML('afterend', `<span class="error">Меньше 3 букв</span>`)
        userName.classList.add('border-red')
    }else if(!(isValidName(userName.value)) ){
        userName.insertAdjacentHTML('afterend', `<span class="error">В имени не может быть цифр и спец символов</span>`)
        userName.classList.add('border-red')
    }
    if(userTel.value.length <= 11){
        userTel.insertAdjacentHTML('afterend', `<span class="error">ваш номер состоит из ${userTel.value.length} символов а надо от 11</span>`)
        userTel.classList.add('border-red')
    }else if(!(isValidTel(userTel.value))){
        userTel.insertAdjacentHTML('afterend', `<span class="error">Какой то странный номер. попробуйте другой</span>`)
        userTel.classList.add('border-red')
    }
    if( userEmail.value.length < 5){
        userEmail.insertAdjacentHTML('afterend', `<span class="error">В ващем Email должно быть больше 5 символов</span>`)
        userEmail.classList.add('border-red')
    }else if(!(isValidEmailAddress(userEmail.value))){
        userEmail.insertAdjacentHTML('afterend', `<span class="error">У вас странный Email Попробуйте другой</span>`)
        userEmail.classList.add('border-red')
    }
})