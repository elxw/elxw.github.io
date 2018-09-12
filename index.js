function handleClick(){
    var text = $(this).text()
    alert(text)
}


$(document).ready(function(){
    $(".panel").click(handleClick) //select panel element

})