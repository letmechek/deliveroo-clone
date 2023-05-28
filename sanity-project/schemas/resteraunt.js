export default {
    name: 'resteraunt',
    type: 'document',
    title: 'Resteraunt',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Resteraunt Name',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'short_description',
            type: 'string',
            title: 'Short Description',
            validation: (Rule) => Rule.max(200),
        },
        {
            name: 'image',
            type: 'image',
            title: 'image of the resteraunt',
        },
        {
            name: 'lat',
            type: 'number',
            title: 'Latitude of the resteraunt',
        },
        {
            name: 'long',
            type: 'number',
            title: 'Longitude of the resteraunt',
        },
        {
            name: 'address',
            type: 'string',
            title: 'Address of the resteraunt',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'rating',
            type: 'number',
            title: 'Enter a rating from 1 to 5 stars',
            validation: (Rule) => 
            Rule.required()
            .min(1)
            .min(5)
            .error('Please enter a value from 1 to 5 stars'),
        },
        {
            name: 'type',
            type: 'reference',
            title: 'Category',
            validation: (Rule) => Rule.required(),
            to: [{type: 'category'}],
            
        },
        {
            name: 'dishes',
            type: 'array',
            title: 'dishes',
            of: [{type: 'reference', to: [{type: 'dish'}] }],
           
        }
    ]
}
