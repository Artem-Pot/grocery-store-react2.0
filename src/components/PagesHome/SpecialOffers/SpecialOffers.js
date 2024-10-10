import Title from '../../Form/Title/Title';
import './style.css';

function SpecialOffers() {
  return (
    <section className="special-offers">
      <div className="container">
        <Title text={'Специальные предложения'} hiddenTextall='true'/>
        <div className="special-offers__wrapper">
          <div className="special-offers__box special-offers__box_card">
            <h3 className="special-offers__h3">Оформите карту «Северяночка»</h3>
            <p className="special-offers__text">И получайте бонусы при покупке в магазинах и на сайте</p>
          </div>
          <div className="special-offers__box special-offers__box_basket">
            <h3 className="special-offers__h3">Покупайте акционные товары</h3>
            <p className="special-offers__text">И получайте вдвое больше бонусов</p>
          </div>
        </div>
      </div>
    </section>
    )
  }

export default SpecialOffers;