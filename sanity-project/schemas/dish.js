export default {
    name: 'dish',
    type: 'document',
    title: 'Dish',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Dish Name',
            validation: Rule => Rule.required()
        },
        {
            name: 'short_description',
            type: 'string',
            title: 'short Description',
            validation: Rule => Rule.max(200)
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price of the dish in usd',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image of the dish',
        },
    ],
}