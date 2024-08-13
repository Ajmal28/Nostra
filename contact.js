var details=document.querySelectorAll(".details")       //select all tags with class name "details"
console.log(details)
function submit(){
    for(count=0;count<details.length;count++)
    {
        details[count].value="";
    }
    alert("Details Has Been Submitted Successfully!")
}