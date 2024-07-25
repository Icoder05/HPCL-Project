import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Programs from './Components/programs/programs'
import About from './Components/About/About'
import Career from './Components/Career/Career'
import Job from './Components/Job/Job'
import Equipments from './Components/Equipments/Equipments';
import Tenders from './Components/Tenders/Tenders'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import Manualone from './Components/Manualone/Manualone';
import Manualtwo from './Components/Manualtwo/Manualtwo';
import Oisd from './Components/Oisd/Oisd';
import Chemicals from './Components/Chemicals/Chemicals';
import Manualthree from './Components/Manualthree/Manualthree';
import Factory from './Components/Factory/Factory';
import Petroleum from './Components/Petroleum/Petroleum';
import Losscontrol from './Components/Losscontrol/Losscontrol';
import Bulletin from './Components/Bulletin/Bulletin';
import Books from './Components/Books/Books';
import News from './Components/News/News';
import Freshers from './Components/Freshers/Freshers'
import Permit from './Components/Permit/Permit'
import Contractor from './Components/Contractor/Contractor'
import Worker from './Components/Worker/Worker';
import Supervisor from './Components/Supervisor/Supervisor';
import Refinary from './Components/Refinary/Refinary';
import Trend from './Components/Trend/Trend';
import HSE from './Components/HSE/HSE'
import Safetycode from './Components/Safetycode/Safetycode';
import Training from './Components/Training/Training';




const App = () => {
  const [playState,setPlayState] = useState(false);

  return (
    <div className="App">
      <Router>
      <div className="container">
      <Navbar/>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about/about1" element={<About setPlayState={setPlayState}/>} />
      <Route path="/about/about2" element={<Programs />} />
      <Route path="/about/about3" element={<Career />} />
      <Route path="/about/about4" element={<Job />} />
      <Route path="/fun/fun1" element={<Equipments />} />
      <Route path="/fun/fun2" element={<Chemicals />} />
      <Route path="/fun/fun3" element={<Tenders/>} />
      <Route path='/manual/manual1' element={<Manualone/>}/>
      <Route path='/manual/manual2' element={<Manualtwo/>}/>
      <Route path='/manual/manual3' element={<Manualthree/>}/>
      <Route path='/standard/standard1' element={<Oisd/>}/>
      <Route path='/standard/standard2' element={<Factory/>}/>
      <Route path='/standard/standard3' element={<Petroleum/>}/>
      <Route path='/text/text1' element={<Freshers/>}/>
      <Route path='/text/text2' element={<Permit/>}/>
      <Route path='/text/text3' element={<Contractor/>}/>
      <Route path='/train/train1' element={<Worker/>}/>
      <Route path='/train/train2' element={<Supervisor/>}/>
      <Route path='/train/train3' element={<Refinary/>}/>
      <Route path='/train/train4' element={<Trend/>}/>
      <Route path='/dept/dept1' element={<HSE/>}/>
      <Route path='/dept/dept2' element={<Safetycode/>}/>
      <Route path='/dept/dept3' element={<Training/>}/>
      <Route path="/pub/pub1" element={<Losscontrol/>} />
      <Route path="/pub/pub2" element={<Bulletin/>} />
      <Route path="/pub/pub3" element={<Books/>} />
      <Route path="/pub/pub4" element={<News/>} />
      </Routes>
  
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
      </div>
      </Router>
     <Footer/>
     </div>
  )
}

export default App