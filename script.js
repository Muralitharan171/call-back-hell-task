window.onload=function(){
    let num=document.getElementById("box");
    
    num.style.color="blue"
num.innerText=10
setTimeout(()=>{
    num.innerText=9
    setTimeout(()=>{
        num.innerText=8
        setTimeout(()=>{
            num.innerText=7
            setTimeout(()=>{
                num.innerText=6
                setTimeout(()=>{
                    num.innerText=5
                    setTimeout(()=>{
                        num.innerText=4
                        setTimeout(()=>{
                            num.innerText=3
                            setTimeout(()=>{
                                num.innerText=2
                                setTimeout(()=>{
                                    num.innerText=1
                                    setTimeout(()=>{
                                        num.innerText="Happy Independance Day"

                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
}