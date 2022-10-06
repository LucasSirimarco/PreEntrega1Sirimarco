const products = [
    { 
        id: '1', 
        name: 'Ivañez', 
        price: 5000, 
        category: 'guitars', 
        img:'https://http2.mlstatic.com/D_NQ_NP_716816-MLA46349902396_062021-W.jpg', 
        stock: 9, 
        description:'Descripcion de Ivañez'
    },
    { 
        id: '2', 
        name: 'Les Paul', 
        price: 10000, 
        category: 'guitars', 
        img:'https://upload.wikimedia.org/wikipedia/commons/b/b8/Gibson_LP_Classic.png', 
        stock: 5, 
        description:'Descripcion de Les Paul'
    },
    { 
        id: '3', 
        name: 'Fender Stratocaster', 
        price: 20000, 
        category: 'guitars', 
        img:'http://d2r9epyceweg5n.cloudfront.net/stores/001/784/472/products/squier-stratocaster1-6eaad5d24e056aa4cb16287218558147-640-0.jpg', 
        stock: 10, 
        description:'Descripcion de Fender Stratocaster'
    },
    { 
        id: '4', 
        name: 'PRS', 
        price: 12000, 
        category: 'guitar', 
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVFnoNK2nO-VTZRYL36sdrW7-5w88TxZZGDjAHMIRUiEuMhuwBZ5zFuHaAEVX9xfjR4A&usqp=CAU', 
        stock: 12, 
        description:'Descripcion de PRS'
    },
    { 
        id: '5', 
        name: 'Yamaha', 
        price: 9000, 
        category: 'bass', 
        img:'https://audioimport.com.ar/wp-content/uploads/2020/07/174r.jpg', 
        stock: 13, 
        description:'Descripcion de Yamaha'
    },
    { 
        id: '6', 
        name: 'Rickenbacker', 
        price: 16000, 
        category: 'bass', 
        img:'https://es.yamaha.com/es/files/TRBX_540x540_f991ed162dddf8ee31c71378109087b7.jpg?impolicy=resize&imwid=396&imhei=396', 
        stock: 20, 
        description:'Descripcion de Rickenbacker'
    },
    { 
        id: '7', 
        name: 'Gibson', 
        price: 6000, 
        category: 'bass', 
        img:'https://therockstore.com.ar/wp-content/uploads/2021/10/1621295896383.jpg', 
        stock: 16, 
        description:'Descripcion de Gibson'
    },
    { 
        id: '8', 
        name: 'PEARL ', 
        price: 30000, 
        category: 'drums', 
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dS_1hBJST2OJX1i6qIHVkDBVG3XZOtjjYuI1tP6ic6ehHYRl5mrp0SQsSs4LU-BHIzI&usqp=CAU', 
        stock: 5, 
        description:'Descripcion de PEARL'
    },
    { 
        id: '9', 
        name: 'MAPEX', 
        price: 25000, 
        category: 'drums', 
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2wNpU_5cw1BlvUc5ReT0-cMEK2sFjWYv9I2QNLn51M2hRBXCsgZtA8zwCgOe1qk9Crog&usqp=CAU', 
        stock: 7, 
        description:'Descripcion de MAPEX'
    },
    { 
        id: '10', 
        name: 'Yamaha', 
        price: 10000, 
        category: 'keyboards', 
        img:'https://bairesrocks.vteximg.com.br/arquivos/ids/223083/71ouqN4Ge1L._AC_SL1500_.jpg?v=637483938054530000', 
        stock: 21, 
        description:'Descripcion de Yamaha'
    },
    { 
        id: '11', 
        name: 'Sonor', 
        price: 15000, 
        category: 'drums', 
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkBBbBwpdOIMOX1Bm6SmIZvxcGLaWZw8H8bWlRD3paf0D40WgM9ZMfmJBGZeWPKRvhXxI&usqp=CAU', 
        stock: 7, 
        description:'Descripcion de Sonor'
    },
    { 
        id: '12', 
        name: 'Tama', 
        price: 20000, 
        category: 'drums', 
        img:'https://sc1.musik-produktiv.com/pic-010103296xxl/tama-s-l-p-lmp42rtls-gse-4-pcs-studio-maple-drumset.jpg', 
        stock: 21, 
        description:'Descripcion de Tama'
    },
    
]


export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 500)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}