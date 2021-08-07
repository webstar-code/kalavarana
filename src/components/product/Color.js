import React ,{useState}from 'react'

const Color = ({color,hex,getColor}) => {
  const [currentColor,setColor]=useState('')
    var element = document.querySelectorAll('.element');

    if (element) {
    
      element.forEach(function(el, key){
        
         el.addEventListener('click', function () {
            console.log(key);
         
            el.classList.toggle("act");
            
             element.forEach(function(ell, els){
                 if(key !== els) {
                     ell.classList.remove('act');
                 }
                  console.log(els);
             });
         });
      });
    }
    
      const handleColor=()=>{
        getColor(color)
        setColor(color)
      }

    return (
        <div className={`element`} onClick={handleColor}  style={{background:hex==="#fff"?'rgb(236 234 234)':hex}}>
           
        </div>
    )
}

export default Color
