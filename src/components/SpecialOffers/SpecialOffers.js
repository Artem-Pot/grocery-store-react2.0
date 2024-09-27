import './style.css';

function SpecialOffers() {
  return (
    <section class="special-offers">
      <div class="container">
        <h2 class="title-h2">Специальные предложения</h2>
        <div class="special-offers__wrapper">
          <div class="special-offers__box special-offers__box_card">
            <h3 class="special-offers__h3">Оформите карту «Северяночка»</h3>
            <p class="special-offers__text">И получайте бонусы при покупке в магазинах и на сайте</p>
          </div>
          <div class="special-offers__box special-offers__box_basket">
            <h3 class="special-offers__h3">Покупайте акционные товары</h3>
            <p class="special-offers__text">И получайте вдвое больше бонусов</p>
          </div>
        </div>
      </div>
    </section>
    )
  }

export default SpecialOffers;