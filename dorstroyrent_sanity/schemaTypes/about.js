export default {
  name: 'about',
  title: 'О нас',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'Описание',
      type: 'text',
    },
    {
      name: 'images',
      title: 'Картинки',
      type: 'array',
      of: [{type: 'image'}],
    },
  ],
}
