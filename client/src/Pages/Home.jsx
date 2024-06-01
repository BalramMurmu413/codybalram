import React from 'react'
import Banner from '../Components/Banner.jsx'
import Card from '../Components/Card.jsx'
import Footer from '../Components/Footer.jsx'
import Header from '../Components/Header.jsx'
import ShowCase from '../Components/ShowCase.jsx'
import ShowCaseTwo from '../Components/ShowCaseTwo.jsx'
import Whatsapp from '../Components/Whatsapp.jsx'



export default function Home(){
    return (
        <>
        <Header />
        <Whatsapp />
        <Banner />
        <ShowCase />
        <Card />
        <ShowCaseTwo />
        <Footer/>
        </>
)}