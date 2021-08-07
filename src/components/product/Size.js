import React,{useState} from 'react'

const Size = ({size,getSize}) => {
    const [Size,setSize]=useState('')
    const element = document.querySelectorAll('.size')
    console.log(element)
    if (element) {
    
        element.forEach(function(el, key){
          
           el.addEventListener('click', function () {
              
           
              el.classList.toggle("active");
              
               element.forEach(function(ell, els){
                   if(key !== els) {
                       ell.classList.remove('active');
                   }
               });
           });
        });
      }
  
        
    const handleSize=(e)=>{
        setSize(size)
        getSize(size)
        
//  console.log(e.target.nextElementSibling.nextElementSibling.classList)
    }


    return (
        <div className={`size`} onClick={handleSize}>
            {size}
        </div>
    )
}

export default Size
