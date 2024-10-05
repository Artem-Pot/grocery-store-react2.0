import Swiper from '../components/Home/Swiper/Swiper';
import SpecialOffers from '../components/Home/SpecialOffers/SpecialOffers';
import OurStores from '../components/Home/OurStores/OurStores';
import Articles from '../components/Home/Articles/Articles';
import ProductBlock from '../components/ProductBlock/ProductBlock';

function Home(props) {
    return (
        <>
            <Swiper />
            <ProductBlock text={'Акции'} textAll={'Все акции'} startProducts={6} quantityProducts={10} hiddenProperties='false' hiddenTextall='false' />
            <ProductBlock text={'Новинки'} textAll={'Все новинки'} startProducts={1} quantityProducts={5} hiddenProperties='false' hiddenTextall='false' />
            <ProductBlock text={'Покупали ранее'} textAll={'Все покупки'} startProducts={4} quantityProducts={8} hiddenProperties='true' hiddenTextall='false' />
            <SpecialOffers />
            <OurStores />
            <Articles />
        </>
    )
    }

export default Home;

