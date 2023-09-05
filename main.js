var forms = document.getElementById('addForm');
var itemList = document.getElementById('items');

forms.addEventListener('submit',addItems);
itemList.addEventListener('click', removeItems);

function addItems(e){
    e.preventDefault();

    var newItem=document.getElementById('item').value
    var itemdescription=document.getElementById("itemdescription").value
    var li=document.createElement('li')
    li.className='list-group-item'
    li.appendChild(document.createTextNode(newItem+' '))
    li.appendChild(document.createTextNode(itemdescription))
    var button=document.createElement('button')
    button.className='btn btn-danger btn-sm float-right delete'
    button.appendChild(document.createTextNode('X'))
    li.appendChild(button)
    itemList.appendChild(li)
}

function removeItems(e){
    if (e.target.classList.contains('delete')){
        if (confirm('Are u sure?')){
            var li =e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

var filter = document.getElementById('filter')
filter.addEventListener('keyup',filterItems)
function filterItems(e){
    var text=e.target.value.toLowerCase();
    var li = document.getElementsByTagName('li')
    Array.from(li).forEach(function(item){
        let itemName=item.firstChild.textContent;
        const itemdescript= item.childNodes[1].textContent

        console.log(itemdescript)
        if (itemName.toLowerCase().indexOf(text)!=-1 || itemdescript.toLowerCase().indexOf(text)!=-1) {
            item.style.display='block'
        }
        else{
            item.style.display='none'
        }
    })
    // // console.log((li))
}