



const nasa = Object.create( {},{
    business : {
        value: "NASA",
        enumerable: true,
        writable: false,
    },
    employmentStart: {
        value : "05-13-53",
        enumerable: true,
        writable: false,
    },
    employmentEnd: {
        value: "04-16-73",
        enumerable: true,
        writable: false,
    },
    enjoyment: {
        value: "Beating the Russians was fun",
        enumerable: true,
        writable: false,
    },
    bad:{
        value:"I never went to the moon myself",
        enumerable: true,
        writable: false,
    }

})
const cia = Object.create({},{
    business: {
        value: "CIA",
        enumerable: true,
        writable: false,
    },
    employmentStart:{
        value: "06-22-73",
        enumerable: true,
        writable: false,
    },
    employmentEnd:{
        value: "11-22-91",
        enumerable: true,
        writable: false,
    },
    enjoyment:{
        value:"Beating the Russians was fun for a second time",
        enumerable: true,
        writable: false,
    },
    bad:{
        value:"I thought the Berlin wall looked pretty cool",
        enumerable: true,
        writable: false,
    }


})

//~~Challenge
//const jobMaker = {business:"walmart", employmentStart:"yesterday", employmentEnd:"today", enjoyment:"none", bad:"everything"}
function newJob(businessName,employmentBegin,employmentStop,Pro,Con){
    let jobMaker = Object.create({},{
        business:{
            value:businessName,
            enumerable: true,
        writable: false,
        },
        employmentStart:{
            value:employmentBegin,
            enumerable: true,
        writable: false,
        },
        employmentEnd:{
            value:employmentStop,
            enumerable: true,
        writable: false,
        },
        enjoyment:{
            value: Pro,
            enumerable: true,
        writable: false,
        },
        bad:{
            value: Con,
            enumerable: true,
        writable: false,
        }
    }) 
    return jobMaker
   }
   console.log(newJob("walmart","yesterday","today","free food","no money"))
    
   //~~Advanced Challenge

   
   let jbUlRef = document.createElement("Ul")

   const jobs = [nasa,cia,newJob]
   for( i=0; i<jobs.length; i++){
       for(i in jobs){
           
           
        }
        let liRef = document.createElement("li")
        liRef.textContent = jobs[i]
        jbUlRef.appendChild(liRef)

}
document.body.appendChild(jbUlRef);




//let liRef = document.createElement("li")
//liRef.textContent = `${jb}: ${jobs[jb]}`
//jbUlRef.appendChild(liRef)

   
    
    
