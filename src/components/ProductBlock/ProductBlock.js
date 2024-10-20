//блок с товарами акции, вы покупали и т.д.
import Product from '../Products/Product';
import Product2 from '../Products/Product2';
import ArrProducts from '../../helpers/ArrProducts/ArrProducts';
import Title from "../Form/Title/Title";
import './style.css';


//функция вывода случайного продукта c проверкой дублирования
function getRandomInteger() {
    const ArrRandom = [];
    let min = 1; 
    let max = ArrProducts.length; // Округление вниз
    let randomId;

    do {
        randomId = Math.floor(Math.random() * (max - min + 1)) + min; // Генерация случайного ID
    } while (ArrRandom.includes(randomId)); // Проверка на дублирование

    ArrRandom.push(randomId); // Сохраняем уникальный ID
    return randomId; // Возвращаем уникальный ID
}

function ProductBlock(props) {
    return (
        <section className="product-list product-list_stock">
            <div className="container">
                <div className="product-list__wrapper">

                    <Title text={props.text} hiddenTextall={props.textAll} textAll={props.textAll}/>

                    <div className="product-list__box">
                        <Product2 idProduct={getRandomInteger()} hiddenProperties={props.hiddenProperties} hiddenTextall={props.hiddenTextall}/>
                        <Product2 idProduct={getRandomInteger()} hiddenProperties={props.hiddenProperties} hiddenTextall={props.hiddenTextall}/>
                        <Product2 idProduct={getRandomInteger()} hiddenProperties={props.hiddenProperties} hiddenTextall={props.hiddenTextall}/>
                        <Product2 idProduct={getRandomInteger()} hiddenProperties={props.hiddenProperties} hiddenTextall={props.hiddenTextall}/>
                    </div>
                </div>
            </div>
        </section>
        )
    }

export default ProductBlock;
