// import databiz from '../../images'
import './Section.css'
export const Section = () =>{
  return(
    <div className="section">
      <div className="container">
        <div className="section-left">
          <h1>Make  <br /> remote work</h1>
          <p>Get your team in sync , no matter your location. <br /> streamline processes. create team rituals , and <br /> wacth productivity soar</p>

          <a href="">Learn more</a>
          
          <div className="sponsors">

            <img src="./images/client-databiz.svg" alt="" />
            <img src="./images/client-audiophile.svg" alt="" />
            <img src="./images/client-meet.svg" alt="" />
            <img src="./images/client-maker.svg" alt="" />
            
          </div>

        </div>

      


        <div className="section-right">
            
        </div>
      </div>  
    </div>
  )
}