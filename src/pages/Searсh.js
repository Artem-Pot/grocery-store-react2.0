import PagesSearсh from "../components/PagesSearсh/PagesSearсh";

function Searсh(props){
    return (
        <>
            <PagesSearсh products={props.filteredProducts}/>
        </>
    );
};

export default Searсh;