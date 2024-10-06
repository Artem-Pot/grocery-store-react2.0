import Swiper from '../components/Home/Swiper/Swiper';
import SpecialOffers from '../components/Home/SpecialOffers/SpecialOffers';
import OurStores from '../components/Home/OurStores/OurStores';
import Articles from '../components/Home/Articles/Articles';
import ProductBlock from '../components/ProductBlock/ProductBlock';

function Home(props) {
    return (
        <>
            <Swiper />
            <ProductBlock text={'Акции'} textAll={'Все акции'} startProducts={13} quantityProducts={17} hiddenProperties='false' hiddenTextall='false' />
            <ProductBlock text={'Новинки'} textAll={'Все новинки'} startProducts={8} quantityProducts={12} hiddenProperties='false' hiddenTextall='false' />
            <ProductBlock text={'Покупали ранее'} textAll={'Все покупки'} startProducts={17} quantityProducts={21} hiddenProperties='true' hiddenTextall='false' />
            <SpecialOffers />
            <OurStores />
            <Articles />
        </>
    )
    }

export default Home;

