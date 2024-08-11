export default {
  name: 'category',
  title: 'Категория',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Название',
      type: 'string',
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
    {
      name: 'image',
      title: 'Картинка',
      type: 'image',
    },
  ],
}
