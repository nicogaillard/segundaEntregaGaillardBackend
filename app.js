import ProductManager from "./managers/ProductManager.js";

const path ='./files/Products.json'

const productsManager = new ProductManager(path)

const prueba = async ()=> {
    //let primerConsulta = await productsManager.getProducts()
    //console.log(primerConsulta);

    let product = {
        title: "Producto de prueba",
        description: "Este producto es de prueba",
        price: 200,
        thumnbail: "Sin imagen",
        code: "abcde123",
        stock: 100
    }

    //cargamos el producto al filesystem
    //let result = await productsManager.addProduct(product)

    //consultamos cuantos productos hay cargados en el filesystem
    // let segundaConsulta = await productsManager.getProducts()
    // console.log(segundaConsulta);

    //consulta donde se obtiene el producto establecido
    // let tercerConsulta = await productsManager.getProductById(2)
    // console.log(tercerConsulta);

    //consulta donde se obtiene Not found
    //let cuartaConsulta = await productsManager.getProductById(52)
    //console.log(cuartaConsulta);

    // actualizamos el producto deseado
    // let quintaConsulta = await productsManager.updateProduct({
    //     title: "Producto de prueba",
    //     description: "Este producto es de prueba",
    //     price: 500,
    //     thumnbail: "Sin imagen",
    //     code: "abcde123",
    //     stock: 100,
    //     id: 1
    // })

    // borrando un producto 
    let sextaConsulta = await productsManager.deleteProducts(1)
}


prueba()