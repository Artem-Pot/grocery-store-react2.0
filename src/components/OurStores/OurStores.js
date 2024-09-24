import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './style.css';

function OurStores() {
    return (
      <section className="our-stores">
        <div className="container">
          <h2 className="title-h2">Наши магазины</h2>
          <Tabs>
            <TabList className="our-stores__box-button">
              <Tab className="our-stores__button">п.Щельяюр</Tab>
              <Tab className="our-stores__button">п.Вертеп</Tab>
              <Tab className="our-stores__button">с.Краснобор</Tab>
              <Tab className="our-stores__button">д.Диюр</Tab>
            </TabList>

            <div className="our-stores__box-map">
              <TabPanel >
                <iframe title='1' src="https://yandex.ru/map-widget/v1/?um=constructor%3Af0114071001831eb6c568463c61b199c0ef00b322c0e48bbd1c1a56d1a06dd5c&amp;amp;source=constructor" width="100%" height="354"></iframe>
              </TabPanel>

              <TabPanel >
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Afde7ead6a32e9abaf1c60037a2b7ee7121acff0d80402e36da854316217da39b&amp;source=constructor" width="100%" height="354" frameborder="0"></iframe>
              </TabPanel>

              <TabPanel >
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aae54973fff26dbe1960942d2289f3e9a0b73a6556f945195a544bed22f5be4fe&amp;source=constructor" width="100%" height="354" frameborder="0"></iframe>
              </TabPanel>

              <TabPanel >
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A4f5115cbb10fddd662bb5e68428d8099d2dad5dfcbed9c9411b00a9703c5ebf2&amp;source=constructor" width="100%" height="354" frameborder="0"></iframe>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </section>
    )
}

export default OurStores;