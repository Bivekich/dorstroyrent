export default {
  name: 'banner',
  title: 'Баннер',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Заголовок',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Подзаголовок',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Изображение',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
