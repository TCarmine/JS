let students = [{ name:"Mary", score:90, school:"East"},
{ name:"James", score:100, school:"East"},
{ name:"Steve", score:40, school:"East"},
{ name:"Gabe", score:90, school:"West"},
{ name:"Rachelle", score:80, school:"East"},
{ name:"Mary Jay", score:90, school:"East"}];

passedStudents = function(data, callback){
  for(let i=0; i < data.length; i++){
    if(data[i].school.toLowerCase()==="east"){
      if(typeof callback === "function"){
        callback(data[i]);
      }
    }
  }
}

passedStudents(students, function(obj){
  if(obj.score >60){
    console.log(obj.name + " passed with "+obj.score);
  }
})
