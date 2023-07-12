const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

/* A */
const pizzasImpar= pizzas.filter(pizza => pizza.id % 2 !== 0).forEach(pizza => {
  console.log(`La ${pizza.nombre} tiene un ID impar.`);
});

console.log(pizzasImpar)

/* B */
console.log(`

`)

const pizzasBaratas = pizzas.filter(pizza => pizza.precio < 600);

if (pizzasBaratas.length > 0) {
  pizzasBaratas.forEach(pizza => {
    console.log(`La ${pizza.nombre} es barata, su precio es de ${pizza.precio} pesos.`);
  });
} else {
  console.log("Lo sentimos, hoy no hay pizzas en oferta.");
}


/* C */
console.log(`

`)

const listaDePizzas = pizzas.forEach( 
  elemento => {
    console.log(`${elemento.nombre} // Precio: $${elemento.precio}`)
  }
)

console.log(listaDePizzas)

/* D */
console.log(`

`)

pizzas.forEach(elemento => {
  const ingredientes = elemento.ingredientes.join(", ");
  console.log(` ${elemento.nombre} - Ingredientes: ${ingredientes}`);
});
