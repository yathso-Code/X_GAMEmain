'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGamepad, faCoins } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../../component/Footer'
import Navbar2 from '../../../component/Navbar2'



const  singleGame = () => {
  
  const handleViewChange = (view) => {
    console.log(view);
  };
  return (
    <>
      <Navbar2/>

      <div className='game_det_box '>
           <div className='game_img flex justify-around pt-4 pb-4 flex-wrap'>
              <div className='img_box m-4'>
                 <img src='/1-2.png'/>
              </div>
              <div className='game_text text-center  m-4'>
                 <div className='flex justify-center'>
                        <img src="/about_feature_1.svg" alt="img" />
                 </div>
                 <h1 className='mt-4 mb-4'>the Hunter Killer</h1>
                 <p>Lounge areas with comfortable seating for relaxation between gaming sessions.
                  Provide snacks, drink, and vending machine for refreshments.</p>
                 <div className=' text flex justify-between pl-2 pr-3 mt-3 '>
                      <p className='font-bold  uppercase' > <FontAwesomeIcon icon={faGamepad} /> Multi player</p>
                      <p  className='font-bold uppercase '> <FontAwesomeIcon icon={faCoins} /> Free</p>
                 </div>
                 <div className='play_btn '>
                        <a href="tournament.html" className="th-btn style2">
                             PLAY GAMES <i className="fa-solid fa-arrow-right ms-2"></i>
                         </a>
                 </div>
                  
              </div>
           </div>
           
           <div className="col-lg-auto">
            <div
              className="sec-btn custom-anim-right wow animated"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
              
            >
              <div className="tournament-filter-btn filter-menu filter-menu-active" >
                <button data-filter="*" className="tab-btn active" type="button" onClick={() => handleViewChange("about")}>
                  ABOUT
                </button>
                <button data-filter=".cat1" className="tab-btn" type="button"  onClick={() => handleViewChange("SCREENSHOT")}>
                SCREENSHOT
                </button>
                <button data-filter=".cat2" className="tab-btn" type="button"  onClick={() => handleViewChange("other")} >
                  OTHER
                </button>
              </div>
            </div>
          </div>

          <div className='viste_page'>
          
          
          </div>

          <div
          className="point-table-area-1 space overflow-hidden"
          data-bg-src="/img/bg/tournament-table-sec1-bg.png"
        >
          <div className="container">
            <div
              className="title-area text-center custom-anim-top wow animated"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <span className="sub-title style2"># Point Table</span>
              <h2 className="sec-title">
                Game On, Power Up, Win Big <span className="text-theme">!</span>
              </h2>
            </div>
            <div className="table-responsive">
              <table className="table tournament-table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Player Image</th>
                    <th scope="col">Player Name</th>
                    <th scope="col">Matches</th>
                    <th scope="col">Total PTS.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <a href="tournament.html"
                        ><img src="/img/tournament/1-1.png" alt="img" /></a>
                    </td>
                    <td>amit</td>
                    <td>0</td>
                    
                    <td>47</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>
                      <a href="tournament.html"
                        ><img src="/img/tournament/1-2.png" alt="img" /></a
                      >
                    </td>
                    <td>lion</td>
                    <td>1</td>
                    
                    <td>45</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>
                      <a href="tournament.html"
                        ><img src="/img/tournament/1-3.png" alt="img" /></a
                      >
                    </td>
                    <td>Rahul</td>
                    <td>1</td>
                    
                    <td>45</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>
                      <a href="tournament.html"
                        ><img
                          src="/img/tournament/1-4.png"
                          alt="img"
                        /></a
                      >
                    </td>
                    <td>yash</td>
                    <td>0</td>
                   
                    <td>44</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>
                      <a href="tournament.html"
                        ><img src="/img/tournament/1-5.png" alt="img" /></a
                      >
                    </td>
                    <td>subham</td>
                    <td>1</td>
                  
                    <td>43</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>
                      <a href="tournament.html"
                        ><img src="/img/tournament/1-6.png" alt="img" /></a
                      >
                    </td>
                    <td>ben</td>
                    <td>0</td>
                   
                    <td>38</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>
                      <a href="tournament.html"
                        ><img src="/img/tournament/1-7.png" alt="img" /></a
                      >
                    </td>
                    <td>Nitn</td>
                    <td>0</td>
                   
                    <td>36</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    
    
    
    
    
    
    
    
         

      </div>

      <Footer/>
    </>
  )
}

export default singleGame
