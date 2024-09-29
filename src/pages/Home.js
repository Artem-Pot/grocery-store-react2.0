import Swiper from '../components/Home/Swiper/Swiper';
import Stock from '../components/Home/Stock/Stock';
import NewItems from '../components/Home/NewItems/NewItems';
import Earlier from '../components/Home/Earlier/Earlier';
import SpecialOffers from '../components/Home/SpecialOffers/SpecialOffers';
import OurStores from '../components/Home/OurStores/OurStores';
import Articles from '../components/Home/Articles/Articles';

function Home(props) {
    return (
        <>
            <Swiper />
            <Stock text={'Акции'} textall={'Все акции'}/>
            <NewItems text={'Новинки'} textall={'Все новинки'}/>
            <Earlier text={'Покупали ранее'} textall={'Все покупки'}/>
            <SpecialOffers />
            <OurStores />
            <Articles />
        </>
    )
    }

export default Home;