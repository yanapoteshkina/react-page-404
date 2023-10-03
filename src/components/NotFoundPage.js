import './NotFoundPage.css';

import React from 'react';


function NotFoundPage() {
  return (
    <div className="error-404">
      <div className="wrapper article">
        <div className="symbol">404</div>
        <h1 className="page-title">Страница не найдена.</h1>
        <p>Похоже, ничего не найдено. Может быть, попробуйте одну из ссылок ниже или воспользуетесь поиском?</p>
        <form role="search" method="get" className="search-form input-wrapper" action="https://init.kz/">
          <div className="fixed-label "><p class="icon-search">🔍</p> </div>
          <input type="text" className="search-field bordered rounded" placeholder="Поиск" value="" name="s" title="Найти:" />
          
        </form>
        <div className="inline center">
          <div className="line">
            <a href="/" className="underline">Главная страница</a>
            <a href="/seo/" className="underline">SEO</a>
            <a href="/online-store/" className="underline">Интернет магазин</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;