// sanity/schemas/product.js
export default {
  name: 'product',
  title: 'Товар',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Название',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Цена',
      type: 'number',
    },
    {
      name: 'category',
      title: 'Категория',
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'image',
      title: 'Изображение',
      type: 'image',
    },
    {
      name: 'slug',
      title: 'Ссылка',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
  ],
}
