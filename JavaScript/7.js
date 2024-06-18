// Написать функцию для получения всех характеристики товара в консоли браузера в виде объекта в формате attributeName: value на странице 
// https://nir-vanna.ru/product/smesitel-bravat-art-f175109c-dlya-rakoviny/

function getProductCharacteristics() {
    const characteristics = {};
    const characteristicNodes = document.querySelectorAll('#tab3 .tab-pane-product-parameter-item');

    for (const node of characteristicNodes) {
        const attributeNameDiv = node.querySelector('.parameter-name')
        const tWDiv = node.querySelector('.t-w');
        const attributeName = tWDiv ? tWDiv.previousSibling.textContent.trim() : attributeNameDiv.textContent.trim();
        const attributeValue = node.querySelector('.parameter-value ').textContent.trim();
        characteristics[attributeName] = attributeValue;
    }

    console.log(characteristics);
}