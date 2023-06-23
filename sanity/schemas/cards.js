import { defineConfig } from 'sanity'

export default defineConfig({
    title: "Home Cards Section",
    name: "homeCards",
    type: "document",
    fields: [
        {
            title: "Section Title",
            name: "title",
            type: "string"
        },
        {
            title: 'Card',
            name: 'card',
            type: 'array',
            of: [{type: 'card'}]
        }
    ]
})