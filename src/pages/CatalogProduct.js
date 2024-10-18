import CatalogProductCategory from "../components/PagesCatalogProduct/CatalogProductCategory";

function CatalogProduct(props){
    return (
        <>
            <CatalogProductCategory nav={'/'} catalog={'Каталог'} arrowRight={'false'}/>
        </>
    );
};

export default CatalogProduct;