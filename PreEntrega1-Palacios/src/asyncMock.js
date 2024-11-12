const products = [
    {
    id: 1,
    title: 'GeForce RTX 2060 VENTUS 6G OC',
    price: '445.000',
    category: 'NVIDIA',
    stock:20,
    description: 'Tarjeta gráfica con 6GB GDDR6, ideal para juegos y creación de contenido. Compatible con ray tracing y DLSS.',
    image:
        'https://http2.mlstatic.com/D_NQ_NP_924881-MLA43073316041_082020-O.webpA',
        details: 
        `
        Graphics Processing Unit: NVIDIA® GeForce® RTX 2060 
        Model Name: GeForce RTX™ 2060 VENTUS 6G OC
        Core Clocks: Boost: 1710 MHz
        CUDA® CORES: 1920 Units
        Memory Speed: 14 Gbps
        Memory: 6GB GDDR6
        Memory Bus: 192-bit
        Output: DisplayPort x 3 (v1.4a)
        HDMI™ x 1(Supports 4K@60Hz as specified in HDMI™ 2.0b)
        HDCP Support: 2.2
        Power consumption: 160 W
        Power connectors: 8-pin x 1
        Recommended PSU: 500 W
        Card Dimension (mm): 226 x 128 x 41 mm
        Weight (Card / Package): 764 g / 1193 g
        DirectX Version Support: 12 API
        OpenGL Version Support: 4.5
        Maximum Displays: 4
        VR Ready: Y
        G-SYNC® technology: Y
        Digital Maximum Resolution: 7680x4320   
        Interface: PCI Express x16 3.0
        `
    },
    {
    id: 2,
    title: 'GeForce GTX 1050 Ti 4GT OC',
    price: '420.000',
    category: 'NVIDIA',
    stock:5,
    description: 'GPU de 4GB GDDR5, perfecta para juegos a 1080p con una excelente relación calidad-precio.',
    image:
        'https://asset.msi.com/resize/image/global/product/product_6_20180411114412_5acd848c49500.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png',
        details: 
        `
        Nombre núcleo: GP107-400 
        Motor de gráficos: NVIDIA GeForce® GTX 1050 Ti
        Norma Bus: PCI Express x16 3.0
        Tamaño de Memoria (MB): 4096
        Interfaz de Memoria: 128 bits
        Formato: ATX
        Velocidad clock núcleo (MHz): 1455 MHz / 1341 MHz
        Afterburner OC: Y
        Velocidad clock memoria (MHz): 7000 MHz
        Máximo de pantallas: 3
        Tecnología G-SYNC™: Y
        Adaptive Vertical Sync: Y
        Soporte HDCP: 2.2
        Consumo (W): 75
        Salida: DisplayPort (Versión 1.4) / HDMI™ (Versión 2.0) / DL-DVI-D
        Alimentación recomendada (W): 300
        Resolución máxima digital: 7680x4320
        Salida de pantalla (Resolución Máxima): 2560x1600
        Soporte DirectX Versión: 12
        Soporte OpenGL Versión: 4.5
        Dimensiones (mm): 215 x 112 x 38
        Diseño Térmico: Fansink 
        `
    },
    {
    id: 3,
    title: 'VGA MSI Radeon RX 6600 XT GAMING X 8G',
    price: '230.000',
    category: 'AMD',
    stock:10,
    description: 'Tarjeta gráfica de 8GB GDDR6, con un rendimiento sobresaliente para juegos en 1440p y características de ray tracing.',
    image:
        'https://www.invidcomputers.com/images/000000000041380903223product-1627614535a92069d43bae9ee0db8eada2acefbe33.png',
        details: 
        `
        Model Name: Radeon™ RX 6600 XT GAMING X 8G
        Memory: 8GB GDDR6
        Cores: 2048 Units 
        Motor Gráfico: AMD Radeon™ RX 6600 XT
        Bus Standard: PCI Express® 4.0 x8
        Reloj de Núcleo: Boost: Up to 2607 MHz
        Game: Up to 2428 MHz 16 Gbps 
        Velocidad de Memoria: 4
        Maximum Displays: Y
        Multi-GPU Technology: Y
        Soporte HDCP: Y
        Output: DisplayPort x 3 (v1.4)
        HDMI™ x 1 (Supports 4K@120Hz/8K@60Hz and VRR as specified in HDMI™ 2.1)
        Power consumption (W): 160 W
        Virtual Reality Ready: Y
        Digital Maximum Resolution: 7680 x 4320
        Versión Soportada de OpenGL: 4.6
        Peso: 886 g / 1473 g
        `
    },
];


export const getProducts = new Promise((resolve) => {
setTimeout(()=>{
    resolve(products)
}, 1000)
})

export const getProduct = (id) =>{
    return products.find((prod) => prod.id == id)
}

export const getCategory = (category) =>{
    return products.filter((product) => product.category === category)
}