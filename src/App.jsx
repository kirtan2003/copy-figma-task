import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import FAQSection from './components/FAQ'
import Flip from './components/flipped'

function App() {

  return (
    <>
      <nav className='flex justify-between items-center gap-4'>
        <div className='logo'> <img width={191} height={39} src="/logo.png" alt="" /> </div>
        <ul className=' flex justify-between items-center gap-[40px] w-[525px] h-[48px] pt-[27px] pr-[140px]'>
          <li>Home</li>
          <li>Flashcard</li>
          <li>Contact</li>
          <li>FAQ</li>
          <button className='gradient-button gap-10 flex justify-center items-center'><span className='w-[48px] h-[22px] font-inter mb-1 font-medium text-base leading-6'>Login</span></button>
        </ul>
      </nav>

      <div className='flex h-[30px] pt-[48px] pl-[102px] '>
        <ul className="flex flex-row">
          <li className='w-[30px] h-[30px]'><img src="/home_logo.png" alt="" /></li>

          <li className='w-[24px] h-[24px]'> <span className='text-customBlue pt-[6px] pl-[8.59px] w-[7.41px] h-[12px] text-xl text-center items-center'> &gt; </span></li>

          <li className="w-[85px] h-[22px] text-customGray font-inter font-medium text-base leading-5 md:leading-6 lg:leading-7 xl:leading-8 text-center">Flashcard</li>

          <li className='w-[24px] h-[24px]'> <span className='text-customBlue pt-[6px] pl-[8.59px] w-[7.41px] h-[12px] text-xl text-center items-center'> &gt; </span></li>

          <li className='text-customGray w-[112px] h-[22px] font-inter font-medium text-base leading-5 md:leading-6 lg:leading-7 xl:leading-8 text-center'>Mathematics</li>

          <li className='w-[24px] h-[24px]'> <span className='text-customBlue pt-[6px] pl-[8.59px] w-[7.41px] h-[12px] text-xl text-center items-center'> &gt; </span></li>

          <li className='text-customBlue w-[188px] h-[22px] text-center font-inter font-semibold leading-7 '>Relations and functions</li>

        </ul>
      </div>

      <div className='pl-[105px] pt-[70px] font-montserrat font-bold text-2xl leading-8 bg-gradient-to-b from-blue-950 from-85% to-blue-500 bg-clip-text text-transparent'>Relations and Functions ( Mathematics ) </div>

      <div className='h-[29px] pt-[30px] items-center'>
        <ul className='flex justify-center items-center gap-[40px] text-center'>

          <li className='w-[82px] h-[29px] font-inter font-bold text-lg leading-24.2 text-customBlue border-b-2 border-blue-900'><span className='w-[58px]'>Study</span></li>

          <li className='w-[68px] h-[29px] font-inter font-medium text-20 leading-24.2 text-customGray'>Quiz</li>

          <li className='w-[66px] h-[29px] font-inter font-medium text-20 leading-24.2 text-customGray'>Test</li>

          <li className='w-[80px] h-[29px] font-inter font-medium text-20 leading-24.2 text-customGray'>Game</li>

          <li className='w-[90px] h-[29px] font-inter font-medium text-20 leading-24.2 text-customGray'>Others</li>

        </ul>
      </div>
      

      <div className='pt-[50px] flex flex-col justify-center items-center'>

        {/* <div className=' w-[712px] h-[393.19px] bg-gradient-to-tr from-blue-500 from-5% via-blue-700 via-40% to-blue-950 border rounded-[42.51px]'>
          <div className='flex justify-between'>
            <div className=' pl-[34.01px] pt-[34.01px]'> <img width={34.01} height={34.01} src="/hint.png" alt="" /> </div>
            <div className=' pr-[34.01px] pt-[34.01px]'> <img width={34.01} height={34.01} src="/volume.png" alt="" /> </div>
          </div>
          <div className="pt-[115.28px] text-center text-white font-lato font-bold text-[38px] leading-46 tracking-wider">9 + 6 + 7x - 2x - 3</div>
        </div> */}

        <Flip/>

        <div className='flex w-[612px] h-[60px] pt-[50px] gap-[140px] items-center'>
          <img className='w-[30px] h-[30px]' src="reload.png" alt="" />

          <div className='flex items-center gap-[43px]'>
            <img className='w-[60px] h-[60px]' src="previous.png" alt="" />
            <span className='font-inter font-bold text-[24px] leading-[calc(29.05/24)]'>01/10</span>
            <img className='w-[60px] h-[60px]' src="next.png" alt="" />
          </div>

          <img className='w-[30px] h-[30px]' src="fullScreen.png" alt="" />
        </div>
      </div>

      <div className='flex pt-[80px] justify-between'>

        <div className='flex w-[217px] h-[80.6px] gap-[6px] pl-[70px] items-center'>
          <img className='w-[80.6px] h-[80.6px] shadow-x0-y0-blur-31-spread-0 bg-opacity-40' src="Logo_1.png" alt="" />
          <div className='flex flex-col gap-[10.36px]'>
            <span className='pt-0 h-[15px] w-[79px] font-inter font-bold text-[12.4px] text-customGray leading-[calc(15.01/12.4)]'>Published by</span>
            <img className='w-[115.14px] h-[34.54px]' src="logo_name.png" alt="" />
          </div>
        </div>

        <div className='flex items-center gap-[8px] pr-[70px]'>
          <img className='w-[60px] h-[60px]' src="plus.png" alt="" />
          <span className=' font-inter font-semibold text-[28px] leading-[calc(33.89/28)] bg-gradient-to-b from-blue-950 from-85% to-blue-500 bg-clip-text text-transparent'>Create Flashcard</span>
        </div>
      </div>

      <div className='pl-[104px] pt-[100px] bg-gradient-to-b from-blue-950 from-85% to-blue-500 bg-clip-text text-transparent font-inter font-bold leading-tight tracking-wide text-[48px]'>FAQ</div>


      {/* <div className='flex flex-col w-[848px] h-[300px] gap-[32px] pl-[104px] pt-[30px]'>
        <div className='gradient-border w-[848px] h-[58px] border rounded-[12px] items-center font-inter font-semibold text-base leading-relaxed flex justify-between'>
          <span className='pl-[20px] text-textColor'>Can education flashcards be used for all age groups?</span>
          <div className='pr-[20px]'><img className='w-[24px] h-[24px]'  src="dropdown.png" alt="" /></div>
       </div>
       <div className='gradient-border w-[848px] h-[58px] border rounded-[12px] items-center font-inter font-semibold text-base leading-relaxed flex justify-between'>
          <span className='pl-[20px] text-textColor'>How education flashcards works?</span>
          <div className='pr-[20px]'><img className='w-[24px] h-[24px]'  src="dropdown.png" alt="" /></div>
       </div>
       <div className='gradient-border w-[848px] h-[58px] border rounded-[12px] items-center font-inter  font-semibold text-base leading-relaxed flex justify-between'>
          <span className='pl-[20px] text-textColor'>Can education flashcards be used for test preparation?</span>
          <div className='pr-[20px]'><img className='w-[24px] h-[24px]'  src="dropdown.png" alt="" /></div>
        </div>
      </div> */}

      <FAQSection/>
    </>
  )
}

export default App
