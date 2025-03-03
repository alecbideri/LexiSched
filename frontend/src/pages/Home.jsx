import React from 'react'
import Header from "../Components/Header.jsx";
import SpecialityMenu from "../Components/SpecialityMenu.jsx";
import TopLawyers from "../Components/TopLawyers.jsx";
import Banner from "../Components/Banner.jsx";

const Home = () => {
    return (
        <div>
            <Header/>
            <SpecialityMenu/>
            <TopLawyers />
            <Banner/>
        </div>
    )
}
export default Home
