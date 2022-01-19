

import BannerNews from "../components/banner/BannerNews";
import TechNews from "../components/techNews/TechNews";
import SportNews from "../components/sportNews/SportNews";
import CovidNews from "../components/covid19News/Covid19News";

function HomePage(props){

    return (
        <>
            <BannerNews />
            <TechNews />
            <SportNews />
            <CovidNews />
        </>
    )
}

export default HomePage