import CatalogProductCategory from "../components/PagesCatalogProduct/CatalogProductCategory";

function CatalogProduct(props){
    return (
        <>
            <CatalogProductCategory to={'123'} nav={'/'} catalog={'Каталог'} arrowRight={'true'}/>
        </>
    );
};

export default CatalogProduct;