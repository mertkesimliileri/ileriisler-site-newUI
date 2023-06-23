import { defineConfig } from 'sanity'

export default defineConfig({

    title: 'Brand image',
    name: 'brand',
    type: 'image',
    options: {
        hotspot: true // <-- Defaults to false
    },
    fields: [
        {
            name: 'caption',
            type: 'string',
            title: 'Caption',
        },
        {
            name: 'attribution',
            type: 'string',
            title: 'Attribution',
        }
    ]

})