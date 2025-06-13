
import './App.css';

import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Цветочный магазин "Флора"</h1>
        <nav>
          <a href="#about">О нас</a>
          <a href="#products">Каталог</a>
          <a href="#contact">Контакты</a>
        </nav>
      </header>

      <section id="about" className="section about">
        <h2>О нашем магазине</h2>
        <p>Мы предлагаем свежие цветы на любой вкус и событие. Индивидуальный подход, качественное обслуживание и быстрая доставка.</p>
      </section>

      <section id="products" className="section products">
        <h2>Наш каталог</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://via.placeholder.com/200x150?text=Розы" alt="Розы" />
            <h3>Розы</h3>
            <p>Букеты из свежих роз любых оттенков.</p>
            <button>Заказать</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/200x150?text=Тюльпаны" alt="Тюльпаны" />
            <h3>Тюльпаны</h3>
            <p>Яркие тюльпаны — символ весны и радости.</p>
            <button>Заказать</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/200x150?text=Орхидеи" alt="Орхидеи" />
            <h3>Орхидеи</h3>
            <p>Элегантные орхидеи для особых случаев.</p>
            <button>Заказать</button>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Свяжитесь с нами</h2>
        <p>Телефон: +7 (999) 123-45-67</p>
        <p>Email: info@flora-shop.ru</p>
      </section>

      <footer className="footer">
        <p>© 2025 Магазин "Флора". Все права защищены.</p>
      </footer>
    </div>
  );
}

export default App;

