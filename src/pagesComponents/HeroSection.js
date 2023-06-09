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


const Hero = ({selectedTab, theme}) => {

  useDarkMode(theme)


  return (
    <section className='grid justify-center pb-20'>
          <div className={`
          dark:bg-darkBackground-darkBg dark:border-1 dark:border-white/10
          bg-white
          rounded-apple
          col-span-2 row-span-2
          sm:col-span-2 sm:row-span-2
          md:col-span-2 md:row-span-2
          lg:col-span-2 lg:row-span-2
          xl:col-span-2 xl:row-span-1`}>
            <PresentationWidget/>
          </div>
          <div className='
          hidden
          sm:hidden md:inline-block lg:hidden xl:inline-block
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
          bg-white rounded-apple
          col-span-2 row-span-3
          sm:col-span-2 sm:row-span-2
          md:col-span-1 md:row-span-2
          lg:col-span-2 lg:row-span-2
          xl:col-span-1 xl:row-span-2
          '>
            <PathWidget theme={theme}/>
          </div>
          <div className={`
          dark:bg-default-blue/60
          col-span-2
          sm:col-span-2
          md:col-span-2
          lg:col-span-2 lg:row-span-1
          xl:col-span-1
          rounded-apple bg-default-blue group
          `}>
            <a href='https://www.linkedin.com/in/emilian-pirtea-59a748232' target='_blank' rel='noopener noreferrer'>
              <SmallWidget content={<BsLinkedin color='white' className='transition-all duration-200 text-7xl sm:text-8xl group-hover:text-7xl'/>}/>
            </a>
          </div>
          <div className="
          dark:border-1 dark:border-white/20
          col-span-2 row-span-2
          sm:col-span-2 sm:row-span-1
          md:col-span-3 md:row-span-1
          lg:col-span-2 lg:row-span-1
          xl:col-span-2 xl:row-span-1 overflow-hidden sm:rounded-apple
          "> {/* Add a class or style to define the container size */}
            <MapWidget theme={theme}/>
          </div>
          <div className={`
        dark:from-darkBackground-darkBg dark:to-darkBackground-darkBg dark:border-1 dark:border-white/10
          col-span-2 row-span-2
          sm:col-span-2 sm:row-span-2
          md:col-span-2 md:row-span-2
          lg:col-span-3
          xl:col-span-2 bg-gradient-to-bl rounded-apple
          from-white via-white to-white/10
          `}>
            <Widget
              title='PortfoliOS'
              images={frontEndImages2}
              projectImage={theme === 'dark' ? myPortfolioImgDark :myPortfolioImg}
              url='project-portfolios'
              externalUrl='https://github.com/tacozaur/portfoliOS'
            />
          </div>
          <div className='
          dark:bg-default-blue/60
          col-span-2 row-span-1
          sm:col-span-2 sm:row-span-1
          md:col-span-1 md:row-span-1
          lg:col-span-1 lg:row-span-2
          xl:col-span-2 xl:row-span-1 rounded-apple bg-default-blue text-white group
          '>
            <a href='https://github.com/tacozaur' target='_blank' rel='noopener noreferrer'>
              <SmallWidget content={<FaGithub className='transition-all duration-200 text-7xl sm:text-8xl group-hover:text-7xl'/>}/>
            </a>
          </div>
          <div className={`
          dark:from-darkBackground-darkBg dark:to-darkBackground-darkBg dark:border-1 dark:border-white/10
          col-span-2 row-span-2
          sm:col-span-2 sm:row-span-2
          md:col-span-1 md:row-span-2
          lg:col-span-3
          xl:col-span-2
          bg-gradient-to-bl from-gradient-green1 via-gradient-green1 to-gradient-green2 rounded-apple
          `}>
            <Widget
              titleColor='white'
              title='Little Lemon Restaurant'
              images={frontEndImages}
              projectImage={littleLemonRestaurantImg}
              url='project-littlelemon'
              externalUrl='https://github.com/tacozaur/littlelemonrestaurant'
            />
          </div>
          <div className='
          dark:bg-default-blue/60
          col-span-1 row-span-1
          md:col-span-2 md:row-span-1
          lg:col-span-1 lg:row-span-2
          xl:col-span-2 xl:row-span-1 bg-blue-700 text-white rounded-apple group
          '>
            <a href='https://www.behance.net/emilianpirtea1' target='_blank' rel='noopener noreferrer'>
              <SmallWidget content={<FaBehance className='transition-all duration-200 text-6xl sm:text-8xl group-hover:text-7xl'/>}/>
            </a>
          </div>
          <div className={`
          dark:bg-darkBackground-darkBg dark:border-1 dark:border-white/10
          col-span-1
          sm:col-span-1
          md:col-span-2
          lg:col-span-1 row-span-1 rounded-apple text-white
          bg-neutral-black group
          `}>
            <a href='https://www.instagram.com/tacotuesday.everyday/' target='_blank' rel='noopener noreferrer'>
              <SmallWidget content={<BsInstagram className='transition-all duration-200 text-6xl sm:text-8xl group-hover:text-7xl'/>}/>
            </a>
          </div>
          <div className='
          col-span-2 row-span-2
          sm:col-span-2 sm:row-span-2
          md:col-span-1 md:row-span-1
          lg:col-span-1 lg:row-span-1
          xl:col-span-1 xl:row-span-1 rounded-apple overflow-hidden
          '>
            <SwiperWidget
            firstImg={FirstImg}
            secondImg={SecondImg}
            thirdImg={ThirdImg}
            />
          </div>
          <div className={`
        dark:from-darkBackground-darkBg dark:to-darkBackground-darkBg dark:border-1 dark:border-white/10
          col-span-2 row-span-2
          sm:row-span-2 sm:col-span-2
          md:row-span-2 md:col-span-3
          lg:row-span-2 lg:col-span-2
          xl:row-span-2 xl:col-span-2
          bg-gradient-to-bl rounded-apple
          from-gradient-red1 via-gradient-red1 to-gradient-red2
          `}>
            <Widget
              titleColor='white'
              title='KATAN ClothingUI/UX'
              images={UIUXimages}
              projectImage={KATANimg}
              url='project-katan'
              externalUrl='https://www.behance.net/gallery/162209903/KATAN-Concept-Clothing-App-Case-Study'
            />
          </div>
          <div className={`
        dark:from-darkBackground-darkBg dark:to-darkBackground-darkBg dark:border-1 dark:border-white/10
          col-span-2 row-span-2
          sm:col-span-2 sm:row-span-2
          md:col-span-2 md:row-span-2
          lg:col-span-2 lg:row-span-2
          xl:col-span-2 xl:row-span-2
          bg-gradient-to-bl rounded-apple
        from-gray-950 via-gray-900 to-gray-700
          `}>
            <Widget
              titleColor='white'
              title='StudyMate UI/UX'
              images={UIUXimages}
              projectImage={studyMateImg}
              url='project-studymate'
              externalUrl='https://www.behance.net/gallery/165755283/StudyMate-UIUX-Case-Study'
            />
          </div>
          <div className='
        dark:bg-default-blue/60
          bg-white rounded-apple
          col-span-2 row-span-2
          sm:col-span-2 sm:row-span-2
          md:col-span-1 md:row-span-2
          lg:col-span-2 lg:row-span-1
          xl:col-span-2 xl:row-span-1
          '>
            <a href='https://open.spotify.com/' target='_blank' rel="noopener noreferrer">
              <SpotifyWidget/>
            </a>
          </div>
    </section>
  )
}

export default Hero;