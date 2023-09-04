var ht=document.getElementById('main-header');
ht.style.borderBottom= 'solid 3px #000'
let add_items=document.getElementById("main").getElementsByClassName('title')[0]

add_items.style.color='green'
add_items.innerHTML='<strong>Add Items</strong>'
// new line comment

{
    let items=document.getElementsByClassName('list-group-item');
    console.log(items)
    for (let i=0; i<items.length;i++){
        items[i].style.fontWeight = 'bold'
    }
    items[2].style.backgroundColor='green'
}