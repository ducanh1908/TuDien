
let translate = document.getElementById('btn');
translate.addEventListener('click',function (){
    let english = ['Cat','Dog','Pokemon'];
    let vietnamese = ['Mèo','Chó','con pô'];
    let result = "không tìm thấy";
    let input = document.getElementById('in_text').value;
        for (let i =0; i < english.length; i++) {
            if( input == english[i]) {
                result = vietnamese[i];
            }
        }
    document.getElementById('display').innerHTML = result;
})
