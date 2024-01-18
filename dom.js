let elem=document.getElementById('test');//selector
elem.innerHTML="Hello";//innertext
//styling
elem.style.fontSize="25px";
elem.style.color="red";
elem.style.fontFamily="san-serif";
elem.style.textTransform="uppercase";
elem.style.textDecoration="underline";  
elem.style.fontStyle="italic";

//creating new element using 
let newElem=document.createElement('div');
newElem.innerText="Hello child";
newElem.style.textDecoration="none !important";
newElem.style.fontStyle="normal";
newElem.style.color="green";
elem.appendChild(newElem);

//targeting div using class
let someElem=document.getElementsByClassName('someClass')
someElem[0].classList.add('newClass');

let someElemArray=[...someElem];
someElemArray.forEach((item,index)=>{
    console.log(item,index);
    switch (index){
        case 0:
            item.innerText="SUDHIR";
            break;
        case 1:
            item.innerText="BHATTARAI";
            break;
        default:
            item.innerText="AAYENA"    

    }
})

// let divElem=document.getElementsByTagName('div')
let buttonElem=document.getElementById('randomBtn');

buttonElem.addEventListener('mouseenter',(event)=>{
    buttonElem.innerText="Hello Ram"
})
buttonElem.addEventListener('mouseout',(event)=>{
    buttonElem.innerText="Hello Shyam"
})
buttonElem.addEventListener('click',(event)=>{
    alert("user clicked")
})

let inputElem=document.getElementById('name');
inputElem.addEventListener('input',(event)=>{
    let studentName=event.target.value;
    console.log(studentName);
})

let shakeButton=document.getElementById('fly');
// const newPositionX = Math.random() * (window.innerWidth - flyBtnElem.clientWidth);
    // const newPositionY = Math.random() * (window.innerHeight - flyBtnElem.clientHeight);
    // flyBtnElem.style.left = newPositionX + 'px';
    // flyBtnElem.style.top = newPositionY + 'px';
// shakeButton.addEventListener('mouseover', () => {
//     shakeButton.classList.add('shake');
//   });
//   shakeButton.addEventListener('mouseout', () => {
//     shakeButton.classList.remove('shake');
//   });


  //back to top button logic here
  window.addEventListener('scroll',(event)=>{
    let scrollElem=document.getElementById('scrollDiv');
    if(window.scrollY<150){
        scrollElem.style.visibility="hidden"
    }
    else{
        scrollElem.style.visibility="visible"
    }
  })
  //adding click event listner to button 2
  let button2=document.getElementById('button2');
  button2.addEventListener('click',(event)=>{
    let divToScroll=document.getElementById('div2');
    //scrolling to div2
    divToScroll.scrollIntoView();
  })
  //getBattery() => device ko battery return garcha
  window.navigator.getBattery().then(battery=>{
    let percentElem=document.getElementById('chargingPercentage');
    let batteryImg=document.querySelector('#chargingInformation img');
    percentElem.innerText=`${(battery.level*100).toFixed(2)}%`
    if(battery.charging){
        batteryImg.src="./charging.gif"
    }
    else{
        batteryImg.src="./discharging.gif"
    }
    battery.onchargingchange=(data)=>{
        console.log(data);
        if(data.target.charging){
            batteryImg.src="./charging.gif"
        }
        else{
            batteryImg.src="./discharging.gif"
        }
    }
    console.log(battery);
    battery.onlevelchange=(newLevel)=>{
        console.log(newLevel);
        percentElem.innerText=`${(newLevel.target.level*100).toFixed(2)}%.`
    }
  })
const changeUrl=()=>{
    window.location.href="https://www.google.com"
}
const goBack=()=>{
    window.history.back();
}
const updateUrl=()=>{
    window.location.href=window.location.pathname+"?name=sudhir"
}
const handleAudioVideo=()=>{
    window.navigator.getUserMedia(
        {audio:false,video:true},
        (r)=>{
            let videoElem=document.getElementById("video");
            videoElem.srcObject=r;
        },
        (e)=>{
            console.log('permission denied');
        })
}
const fetchSomething=()=>{
    new Promise((resolve,reject)=>{
        fetch('random-url')
        .then(res=>{
            resolve(res)
        })
        .catch(err=>{
            reject(err)
        })
    })
}
const fetchSomething1=()=>{
    new Promise((resolve,reject)=>{
        fetch('')
        .then(res=>{resolve(res)})
        .catch(err=>{reject(err)})
    })
}