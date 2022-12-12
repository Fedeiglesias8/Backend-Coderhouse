class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    const product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      id: this.products.length + 1
    };

    if (title === undefined || description === undefined || price === undefined || thumbnail === undefined || code === undefined || stock === undefined) {
      return console.log('Completar todos los campos.')
    };

    let codeRepetido = this.products.find((product) => product.code === code);

    if (codeRepetido) {
      return console.log(`Error el producto ${product.title} esta repetido`)
    } else {
      this.products.push(product)
    }
  }

  getProducts() {
    return this.products
  }

  getProductById(id) {

    let productoEncontrado = null

    this.products.forEach((product) => {
      if (product.id === id) {
        productoEncontrado= product;
      } 
    })
    if(productoEncontrado === null){
      return console.log('error, no se encontro un producto con ese ID')
    }else{
      return productoEncontrado
    }
  }
}

const nuevoProducto = new ProductManager();
nuevoProducto.addProduct(
  'iphone 13',
  'iphone 13 usado sin ningun detalle',
  'USD$350',
  'affff',
  'iphone 13',
  '1'
);

nuevoProducto.addProduct(
  'motorola edge',
  'motorola edge nuevo',
  'USD$150',
  'affff',
  'motorola edge',
  '1'
);

nuevoProducto.addProduct(
  'iphone 13',
  'iphone 13 usado sin ningun detalle',
  'USD$350',
  'affff',
  'iphone 13',
  '1'
);


const listaDeProductos = nuevoProducto.getProducts();

console.log(listaDeProductos)
console.log('Se encotro este producto con el mismo ID:', nuevoProducto.getProductById(3))

