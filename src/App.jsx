import './index.css'
import Header from './Components/Header'
import img from "../public/gradient.png"
import Hero from './Components/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1500,
      once: true
    })
  })
  return (
    <main className="text-white relative font-sans h-screen overflow-x-hidden">
      <img className="top-0 right-0 opacity-60 z-[-1] absolute" src={img} alt="" />

      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] z-[-10]"></div>
      
      <Header />
      <Hero></Hero>
    </main>
  )
}

export default App
