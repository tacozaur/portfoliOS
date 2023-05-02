import React from 'react'
import '../index.css'
import Widget from '../components/widgets/Widget'
import SwiperWidget from '../components/widgets/SwiperWidget'
import SmallWidget from'../components/widgets/SmallWidget'


import {BsInstagram, BsLinkedin} from 'react-icons/bs';
import { FaBehance, FaGithub } from 'react-icons/fa';



import PresentationWidget from '../components/widgets/PresentationWidget';
import MapWidget from '../components/widgets/MapWidget';
import PathWidget from '../components/widgets/PathWidget';
import SpotifyWidget from '../components/widgets/SpotifyWidget';

import FirstImg from '../assets/images/blue-flowers.jpg'
import SecondImg from '../assets/images/purple-flowers.jpg'
import ThirdImg from '../assets/images/pink-flowers.jpg'

import { UIUXimages, frontEndImages, frontEndImages2 } from '../components/imagesLists/imagesLists';

import KATANimg from '../assets/projects/katan-project.PNG'
import studyMateImg from '../assets/projects/studymate-project.PNG'
import littleLemonRestaurantImg from '../assets/projects/littlelemon-restaurant-project.PNG'
import myPortfolioImg from '../assets/projects/myportfolio-project.PNG'
import myPortfolioImgDark from '../assets/projects/myportfolio-project-dark.PNG'

import useDarkMode from '../hooks/useDarkMode';


const AboutSection = ({theme}) => {

  useDarkMode(theme)

  return (
    <section className='grid justify-center pb-20'>
         <div className='
         dark:bg-darkBackground-darkBg dark:border-1 dark:border-white/10
          col-span-2 row-span-2
          sm:col-span-2 sm:row-span-2
          md:col-span-2 md:row-span-2
          lg:col-span-2 lg:row-span-2
          xl:col-span-2 xl:row-span-1 bg-white rounded-apple'>
            <PresentationWidget/>
          </div>
          <div className='
          hidden
          sm:hidden md:hidden xl:inline-block
          sm:col-span-2 sm:row-span-2
          md:col-span-1 md:row-span-1
          xl:col-span-1 xl:row-span-1 rounded-apple overflow-hidden
          '>
            <SwiperWidget
            firstImg={FirstImg}
            secondImg={SecondImg}
            thirdImg={ThirdImg}
            />
          </div>
          <div className='
          dark:bg-darkBackground-darkBg dark:border-1 dark:border-white/10
          col-span-2 row-span-3
          sm:col-span-2 sm:row-span-1
          md:col-span-1 md:row-span-2
          lg:col-span-2 lg:row-span-2
          xl:col-span-1 xl:row-span-2 bg-white rounded-apple
          '>
            <PathWidget/>
          </div>
          <div className='
          col-span-2
          dark:bg-default-blue/60
          sm:col-span-2
          md:col-span-1
          lg:col-span-1 lg:row-span-1
          xl:col-span-1 bg-blue-700 rounded-apple group
          '>
            <a href='https://www.behance.net/emilianpirtea1' target='_blank' rel='noopener noreferrer'>
              <SmallWidget content={<FaBehance color='white' className='transition-all duration-200 text-7xl sm:text-8xl group-hover:text-7xl'/>}/>
            </a>
          </div>
          <div className="
          dark:border-1 dark:border-white/20
          col-span-2 row-span-2
          sm:col-span-2 sm:row-span-1
          md:col-span-2 md:row-span-1
          lg:col-span-2 lg:row-span-1
          xl:col-span-2 xl:row-span-1 overflow-hidden sm:rounded-apple
          "> {/* Add a class or style to define the container size */}
            <MapWidget theme={theme}/>
          </div>
          <div className='
        dark:bg-darkBackground-darkBg dark:border-1 dark:border-white/10
          col-span-1
          sm:col-span-1
          md:col-span-1
          lg:col-span-1 row-span-1 bg-neutral-black rounded-apple text-white group
          '>
            <a href='https://www.instagram.com/tacotuesday.everyday/' target='_blank' rel='noopener noreferrer'>
              <SmallWidget content={<BsInstagram className='transition-all duration-200 text-6xl sm:text-8xl group-hover:text-7xl'/>}/>
            </a>
          </div>
          <div className='
          dark:bg-default-blue/60
          col-span-1 row-span-1
          md:col-span-1 md:row-span-1
          lg:col-span-2 lg:row-span-1
          xl:col-span-2 xl:row-span-1 bg-blue-700 text-white rounded-apple group
          '>
            <a href='https://www.linkedin.com/in/emilian-pirtea-59a748232' target='_blank' rel='noopener noreferrer'>
              <SmallWidget content={<BsLinkedin className='transition-all duration-200 text-6xl sm:text-8xl group-hover:text-7xl'/>}/>
            </a>
          </div>
          <div className='
        dark:bg-darkBackground-darkBg dark:border-1 dark:border-white/10
          col-span-2 row-span-1
          sm:col-span-2 sm:row-span-1
          md:col-span-1 md:row-span-1
          lg:col-span-2 lg:row-span-1
          xl:col-span-1 rounded-apple bg-neutral-black text-white group
          '>
            <a href='https://github.com/tacozaur' target='_blank' rel='noopener noreferrer'>
              <SmallWidget content={<FaGithub className='transition-all duration-200 text-8xl group-hover:text-7xl'/>}/>
            </a>
          </div>
          <div className='
        dark:bg-darkBackground-darkBg dark:border-1 dark:border-white/10
          sm:hidden md:inline-block
          col-span-2 row-span-2
          sm:col-span-2 sm:row-span-1
          md:col-span-1 md:row-span-2
          lg:col-span-2 lg:row-span-1
          xl:col-span-2 xl:row-span-1 bg-white rounded-apple
          '>
            <a href='https://open.spotify.com/' target='_blank' rel="noopener noreferrer">
              <SpotifyWidget/>
            </a>
          </div>
          <div className='
        dark:from-darkBackground-darkBg dark:to-darkBackground-darkBg
          opacity-40 pointer-events-none
          col-span-2 row-span-2
          sm:col-span-2 sm:row-span-2
          md:col-span-2 md:row-span-2
          lg:col-span-2
          xl:col-span-2 bg-gradient-to-bl from-white via-white to-white/10 rounded-apple
          '>
            <Widget
              title='PortfoliOS'
              images={frontEndImages2}
              projectImage={theme === 'dark' ? myPortfolioImgDark :myPortfolioImg}
            />
          </div>
          <div className='
        dark:from-darkBackground-darkBg dark:to-darkBackground-darkBg
          opacity-10 pointer-events-none
          col-span-2 row-span-2
          sm:col-span-2 sm:row-span-2
          md:col-span-1 md:row-span-2
          lg:col-span-2
          xl:col-span-2 bg-gradient-to-bl from-gradient-green1 via-gradient-green1 to-gradient-green2 rounded-apple
          '>
            <Widget
              titleColor='white'
              title='Little Lemon Restaurant'
              images={frontEndImages}
              projectImage={littleLemonRestaurantImg}
            />
          </div>
          <div className='
        dark:from-darkBackground-darkBg dark:to-darkBackground-darkBg
          opacity-8 pointer-events-none
          col-span-2 row-span-2
          sm:row-span-2 sm:col-span-2
          md:row-span-2 md:col-span-2
          lg:col-span-2 lg:row-span-2
          xl:col-span-2 bg-gradient-to-bl from-gradient-red1 via-gradient-red1 to-gradient-red2 rounded-apple
          '>
            <Widget
              titleColor='white'
              title='KATAN ClothingUI/UX'
              images={UIUXimages}
              projectImage={KATANimg}
            />
          </div>
          <div className='
        dark:from-darkBackground-darkBg dark:to-darkBackground-darkBg
          opacity-3 pointer-events-none
          col-span-2 row-span-2
          sm:col-span-2 sm:row-span-2
          md:col-span-3 md:row-span-2
          lg:col-span-2 lg:row-span-2
          xl:col-span-2 bg-gradient-to-bl from-gray-950 via-gray-900 to-gray-700 rounded-apple
          '>
            <Widget
              titleColor='white'
              title='StudyMate UI/UX'
              images={UIUXimages}
              projectImage={studyMateImg}
            />
          </div>
          <div className='
          hidden sm:inline-block md:hidden lg:inline-block
          opacity-5 pointer-events-none
          col-span-2 row-span-1
          sm:col-span-2 sm:row-span-1
          md:col-span-1 md:row-span-2
          lg:col-span-2 lg:row-span-1
          xl:col-span-2 xl:row-span-1 rounded-apple overflow-hidden
          '>
            <SwiperWidget
            firstImg={FirstImg}
            secondImg={SecondImg}
            thirdImg={ThirdImg}
            />
          </div>
    </section>
  )
}

export default AboutSection;