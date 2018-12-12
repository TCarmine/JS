$().ready(ev=>{
 $("button").click(function){
   let btnText = $(this).text();
   console.log("You clicked " + btnText);

}

})
