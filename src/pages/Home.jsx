import React from 'react'
import { Link } from 'react-router-dom';
import Imgtxt from './Imgtxt';

function Home() {
    const link = "https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/w_1920,c_limit/GoogleMapTA.jpg";
    const link2 = "https://img.freepik.com/premium-photo/electronic-online-doc-man-with-magnifying-glass-data-analytics-annual-report-result-checking-business-documents-scanning_27634-1055.jpg?w=900"

  return (
    <>
      <div className="home-container" style={{backgroundColor:"white",height:"90vh"}}>
        <div className="mains">
          <div className="left-h" style={{height:'57vh',width:'25vw',backgroundColor:'transparent'}}>
              <img src={link2} style={{height:'57vh',width:'26vw',borderRadius:'25px'}}/>

          </div>
        {/* style={{height:'57vh',width:'40vw',backgroundColor:'grey'} */}
          <div className="container" style={{height:'57vh',width:'40vw'}}>
              <img className="container-img" src={link} style={{height:'57vh',width:'40vw'}}/>
          </div>

          <div className="right-h" style={{height:'55vh',width:'25vw',backgroundColor:'taransparent'}}>
              <div className="news" style={{height:'55vh',width:'25vw',border:'2.5px solid red',borderRadius:'15px',display:'flex',justifyContent:'center',alignItems:'center',padding:'0px 7px'}}>
                  <h1>Live Articles related to Organ Health, Organ Dontation, Organ Trafficking will be 
                    reflected here
                  </h1>
              </div>
              {/* ,borderBottom:'10px solid red',borderLeft:'10px solid red',borderRight:'10px solid left' */}
          </div>
      </div>
      <div className="btn" style={{display:'flex',alignItems:'center',justifyContent:'space-around',marginTop:'4vh'}}>
      <button style={{height:'6vh',width:'6vw',backgroundColor:'red',borderRadius:'5px',padding:'2px',color:'white'}}>
            <Link to='/Imgtxt'>
              convert text
            </Link>
        </button>
        <button style={{height:'6vh',width:'6vw',backgroundColor:'red',borderRadius:'5px',padding:'2px',color:'white'}}>
            <Link to='/Finddoner'>
              Find Doner
            </Link>
        </button>
        <button style={{height:'6vh',width:'6vw',backgroundColor:'red',borderRadius:'5px',padding:'2px',color:'white'}}>
            <Link to='/Finddoner'>
              find more articles
            </Link>
        </button>
      </div>
      <div className="footer" style={{marginTop:'5vh',display:'flex',justifyItems:'center',height:'11vh',backgroundColor:'#ba0735'}}>
      <div class="footer-content" style={{maxWidth:'800px',margin:'0px auto',height:'10vh'}}>
            <p style={{padding:'4vh',color:'white'}}>&copy; 2023 Your Website</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default Home
