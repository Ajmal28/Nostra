var productcontainer = document.getElementById("products")      //select div tag with id name "products"
var search = document.getElementById("search")                  //select input tag with id name "search"
var products = productcontainer.querySelectorAll("div")         //select div tags inside the div tag class named as "products"

search.addEventListener("keyup",function(event){
    var enteredvalue = event.target.value.toUpperCase()
    for(count=0;count<products.length;count++)
    {
        if(products[count].textContent.toUpperCase().indexOf(enteredvalue)<0)
        {
            products[count].style.display="none"
        }
        else{
            products[count].style.display="block"
        }
    }

})
