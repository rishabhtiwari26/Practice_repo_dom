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

{
    let itemsByTag=document.getElementsByTagName('li')
    console.log(itemsByTag)
    itemsByTag[4].style.fontWeight='bold'
    itemsByTag[4].style.color='red'}

    // change the font color to green for 2nd item in the item list
    // odd elements and make their background green using QuerySelectorALL
{
    let secondItem=document.querySelectorAll('li')
    console.log(secondItem)
    secondItem[1].style.color='green'

    let odd=document.querySelectorAll('li:nth-child(odd)');
    for (let i =0 ;i<odd.length;i++){
        odd[i].style.backgroundColor='green';
        odd[i].style.color='white';

    }
}
