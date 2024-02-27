let student = {
    name: "umesh",
    age:20,
    cgpa:7.5,
    ispass:true,
 
};

for (let key in student)
{
    console.log(student[key]);
    //console.log(student[key].name="ram");
    //console.log(key+ " : " + student[key]);
    //console.log(key[0]+ " : " + student[key]);
    //console.log(student.name);
}

            
        for(let val of student){
                console.log("string is ="+""+val)
                size++;
            }
        console.log("string size is "+""+size);

        let str = "javascript";
            let size =0;
            for(let val of str){
                console.log("string is ="+""+val)
                size++;
            }
        console.log("string size is "+""+size);
