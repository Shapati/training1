import logo from '../../images/logo.svg'
import './Navbar.css'
import { useRef } from 'react'
import { useState } from 'react'
import top from '../../images/icon-arrow-up.svg'
import bottom from '../../images/icon-arrow-down.svg'

export const Navbar = () =>{
  const show1 = useRef()
  const show2 = useRef()
  const img1 = useRef()

  const [img,setImg] = useState(bottom)
  const [img2,setImg2] = useState(bottom)

  const handleClick1 = () =>{
    show1.current.classList.toggle('dropdown')
    if(show1.current.className === 'remove dropdown'){
      setImg(top)
    }
    else if(show1.current.className=== 'remove'){
      setImg(bottom)
    }
   
  }
  const handleClick2 = () =>{
    show2.current.classList.toggle('dropdown2')
    
    if(show2.current.className === 'remove2 dropdown2'){
      setImg2(top)
    }
    else if(show2.current.className=== 'remove2'){
      setImg2(bottom)
    }
  }




  
  
  
  return(
    <div className="navbar" >
      <div className="navsection1">


         <div className="logo">
            <img src={logo} alt="" />
         </div>

         <ul className="navlinks">
             
            <li>


              <div className="drop"  >
                <a href="">Features</a> 
                <img src={img} alt="" onClick={()=>handleClick1()} style={{cursor: 'pointer'}} ref={img1} />
              </div>


            <div className="remove" ref={show1}>

              <a href="">  <img src="./images/icon-todo.svg" alt="" /> Todo List</a>
              <a href="">  <img src="./images/icon-calendar.svg" alt="" /> Calender</a>
              <a href="">  <img src="./images/icon-reminders.svg" alt="" /> Reminders</a>
              <a href="">  <img src="./images/icon-planning.svg" alt="" /> Planning</a>

            </div>
               
            </li> 

            <li>
              <div className="drop">
                <a href="">Company</a> 
                <img src={img2} alt="" onClick={()=>handleClick2()} style={{cursor: 'pointer'}} />
              </div>
              
              <div className="remove2" ref={show2}>
                  <a href="">History</a>
                  <a href="">Our Team</a>
                  <a href="">Blog</a>
              </div>
              
              </li>
            <li><a href="">Careers</a></li>
            <li><a href="">About</a></li>

           
          </ul>

      </div>
      <div className="navsection2">
          <div className="signinlinks">
            <a href="">Login</a>
            <a href=""> Register </a>
            
          </div>
      </div>
    </div>
  )
}