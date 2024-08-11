// sanity/schemas/footer.js
export default {
  name: 'footer',
  title: 'Подвал',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'Описание',
      type: 'text',
    },
    {
      name: 'siteMap',
      title: 'Карта сайта',
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
              name: 'link',
              title: 'Ссылка',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'socialLinks',
      title: 'Социальные сети',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Площадка',
              type: 'string',
            },
            {
              name: 'url',
              title: 'Ссылка',
              type: 'url',
            },
            {
              name: 'icon',
              title: 'Иконка (SVG формат)',
              type: 'image',
            },
          ],
        },
      ],
    },
  ],
}
