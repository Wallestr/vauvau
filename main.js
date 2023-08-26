//  <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script> 
const signInBtn = document.querySelector('.signin-btn');
const signUpBtn = document.querySelector('.signup-btn');
const formBox = document.querySelector('.form-box');
const body = document.body;
const title = document.querySelector('.block_item_title')
const TOKEN = "6043786440:AAHR3f6JUr8-Wfdrer4GwpkoG4Xa7haWrpo";
const CHAT_ID = "-1001975600117";
const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const success = document.getElementById('success');


signUpBtn.addEventListener('click', function (){
                           formBox.classList.add('active');
                           body.classList.add('active');
                           title.classList.add('active')
                           });

signInBtn.addEventListener('click', function (){
                           formBox.classList.remove('active');
                           body.classList.remove('active');
                           title.classList.remove('active');
                           });



document.getElementById('tg').addEventListener('submit', function(e){
    e.preventDefault();
    
    let message = `<b>Заявка с сайта</b>\n`;
    message += `<b> Отправитель:  </b> ${ this.name.value }\n`;
    message += `<b> Номер телефона:  </b> ${ this.number.value }\n`;
    message += `<b> Какая чистка:  </b> ${ this.comment.value }`;

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: `html`,
        text: message
    })

    .then((res) => {
        this.name.value = ""
        this.number.value = ""
        this.comment.value = ""
        success.innerHTML = "Заявка отправленна!"
        success.style.marginTop = "-200px";
        success.style.marginLeft = "50px";
        success.style.background = "#f1f1f1";
        success.style.display = "block";
    })

    .catch((err) =>{
        console.warn(err);
    })

    .finally(() => {
        console.log('Конец');
    })












})