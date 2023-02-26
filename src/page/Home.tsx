import React, { Component } from 'react';
import NavBar from '../component/NavBar';
import SampleImg from '../assets/images/Island Allies.png';
import GrassImg from '../assets/images/grass.svg';
import IcelandImg from '../assets/images/island.svg';
import IslandImg from '../assets/images/islandClub.svg';
import AreanaImg from '../assets/images/islandAreana.svg';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className='relative'>
        <div className='w-100  bg-gradient-to-r from-amber-300  via-teal-200 to-teal-200 top-container'>
             <div className='circle bg-gradient-to-r from-amber-100 via-amber-300 to-amber-600'></div>
            <NavBar />
            <div className='flex h-screen items-center justify-center'>
                <div className="grid grid-cols-3 gap-0 mx-80 items-center justify-center">
                    <div className="relative">
                        <img src={IcelandImg} className="h-52 absolute iceland-img"/>
                    </div>
                    <div className="">
                        <img src={IslandImg}  className="h-90  island-img"/>
                    </div>
                    <div className="relative">
                        <img src={AreanaImg} className="h-52  absolute areana-img"/>
                    </div>
                </div>
            </div>
            <div className='grass-container absolute bottom-0 left-0 right-0'>
                <img src={GrassImg} className="grass-img"/>
            </div>
        </div>
      </div>
    )
  }
}
