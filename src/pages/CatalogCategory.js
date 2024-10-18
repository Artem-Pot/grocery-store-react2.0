import CatalogProduct from '../components/PagesCatalog/Catalog';

function Catalog(props){
    return (
        <>
            <CatalogProduct nav={'/'} catalog={'Каталог'} arrowRight={'false'}/>
        </>
    );
};

export default Catalog;