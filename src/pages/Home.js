import Swiper from '../components/PagesHome/Swiper/Swiper';
import SpecialOffers from '../components/PagesHome/SpecialOffers/SpecialOffers';
import OurStores from '../components/PagesHome/OurStores/OurStores';
import Articles from '../components/PagesHome/Articles/Articles';
import ProductBlock from '../components/ProductBlock/ProductBlock';

function Home(props) {
    return (
        <>
            <Swiper />
            <ProductBlock text={'Акции'} textAll={'Все акции'} hiddenProperties='false' hiddenTextall='false' />
            <ProductBlock text={'Новинки'} textAll={'Все новинки'} hiddenProperties='false' hiddenTextall='false' />
            <ProductBlock text={'Покупали ранее'} textAll={'Все покупки'} hiddenProperties='true' hiddenTextall='false' />
            <SpecialOffers />
            <OurStores />
            <Articles />
        </>
    )
    }

export default Home;



