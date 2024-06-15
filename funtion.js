var btn = document.querySelectorAll('.item');
btn.forEach(applyToList)
function applyToList(item ,index,arr){
     item.addEventListener('click',()=>{
        item.classList.toggle('clicked');
    });
}
console.log(btn);
// btn.addEventListener('click',()=>{
//     btn.classList.toggle('clicked');
// });