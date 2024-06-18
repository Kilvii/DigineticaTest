// Написать функцию для получения список всех артикулов товаров в консоли браузера на странице 
// https://groupprice.ru/categories/jenskaya-odejda?referer_from=main_catalog
function getArticleNumbers() {
    const productNodes = document.querySelectorAll('div._product');
    const articleNumbers = [];
  
    for (const node of productNodes) {
      const articleId = node.getAttribute('data-id');
      articleNumbers.push(articleId);
    }
  
    console.log(articleNumbers);
  }