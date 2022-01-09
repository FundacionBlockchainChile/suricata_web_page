$(function () {
  'use strict'
  let $cardContainer = $('#cardContainer')

  let $products = [
    {
      imgUrl: '././asstes/img/colaciones.jpg',
      title: 'Colaciones',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      firstInfo: 'Morbi leo risus',
      secondInfo: 'Porta ac consectetur ac',
    },
    {
      imgUrl: './asstes/img/desayunos.jpg',
      title: 'Desayunos',
      description:
        'Iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      firstInfo: 'Morbi leo risus',
      secondInfo: 'Porta ac consectetur ac',
    },
    {
      imgUrl: './asstes/img/bebidas.jpg',
      title: 'Bebidas',
      description:
        'Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      firstInfo: 'Morbi leo risus',
      secondInfo: 'Porta ac consectetur ac',
    },
    {
      imgUrl: './asstes/img/verduras.jpg',
      title: 'Verduras',
      description:
        'Ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      firstInfo: 'Morbi leo risus',
      secondInfo: 'Porta ac consectetur ac',
    },
    {
      imgUrl: './asstes/img/dulces.jpg',
      title: 'Dulces',
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      firstInfo: 'Morbi leo risus',
      secondInfo: 'Porta ac consectetur ac',
    },
    {
      imgUrl: './asstes/img/empanadas.jpg',
      title: 'Empanadas',
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      firstInfo: 'Morbi leo risus',
      secondInfo: 'Porta ac consectetur ac',
    },
  ]

  $.each($products, (index, item) => {
    $cardContainer.append(
      `<div class="col mb-4 ">
          <div class="card h-100 shadow">
            <img
              src="${item.imgUrl}"
              class="card-img-top brighten"
              alt="${item.imgUrl}"
            />
            <div class="card-body">
              <h5 class="title">${item.title}</h5>
              <p class="description">
                ${item.description}
              </p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${item.firstInfo}</li>
                <li class="list-group-item">${item.secondInfo}</li>
                <li class="list-group-item">
                  <a href="/">Ver Mas</a>
                  <a href="/">Comprar</a>
                </li>
              </ul>
            </div>
          </div>
        </div>`
    )
  })
})
