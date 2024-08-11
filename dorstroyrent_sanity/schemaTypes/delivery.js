// sanity/schemas/delivery.js
export default {
  name: 'delivery',
  title: 'Доставка',
  type: 'document',
  fields: [
    {
      name: 'options',
      title: 'Опции доставок',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Заголовок',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Описание',
              type: 'text',
            },
            {
              name: 'image',
              title: 'Картинка',
              type: 'image',
            },
          ],
        },
      ],
    },
  ],
}
