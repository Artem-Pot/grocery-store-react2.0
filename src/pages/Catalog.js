import CatalogProduct from '../components/Catalog/Catalog';

function Catalog(props){
    return (
        <>
            <CatalogProduct nav={'/'} catalog={'Каталог'} arrowRight={'false'}/>
        </>
    );
};

export default Catalog;