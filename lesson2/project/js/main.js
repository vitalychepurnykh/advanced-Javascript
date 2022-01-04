class ProductList {
    #container;
    #goods;
    #productObjects;

    constructor(container = '.products') {
        this.#container = container;
        this.#goods = [];
        this.#productObjects = [];
        this.fetchGoodsData();
        this.render();
        this.sumProduct();
    }

    fetchGoodsData() {
        this.#goods = [
            {id: 1, title: 'Notebook', price: 1000},
            {id: 2, title: 'Mouse', price: 100},
            {id: 3, title: 'Keyboard', price: 250},
            {id: 4, title: 'Gamepad', price: 150},
        ];
    }

    render() {
        const catalogBlock = document.querySelector(this.#container);

        for (let product of this.#goods) {
            const productObject = new ProductItem(product);
            console.log(productObject)
            this.#productObjects.push(productObject);
            catalogBlock.insertAdjacentHTML('beforeend', productObject.getHTMLString());
        }
    }

    
    sumProduct() {
        const sumTotal = arr =>
            arr.reduce((sum, { price, }) => sum + price, 0)
        this.#goods = [
            { id: 1, title: 'Notebook', price: 1000 },
            { id: 2, title: 'Mouse', price: 100 },
            { id: 3, title: 'Keyboard', price: 250 },   
            { id: 4, title: 'Gamepad', price: 150 },
        ]
        const total = sumTotal(this.#goods)
        alert(`Сумма всех товаров: ${total}`);   //хотел вынести сумму в html разметку, но пока не получается, буду думать.
    }         

    
}
class ProductItem {
    constructor(product, img='https://via.placeholder.com/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
       
    }

    getHTMLString() {
        return `<div class="product-item" data-id="${this.id}">
                      <img src="${this.img}" alt="Some img">
                      <div class="desc">
                          <h3>${this.title}</h3>
                          <p>${this.price} \u20bd</p>
                          <button class="buy-btn">Купить</button>
                      </div>
                  </div>`;
    }
}


const catalog = new ProductList();


