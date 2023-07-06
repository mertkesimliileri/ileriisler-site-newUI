import { defineConfig } from 'sanity'

export default defineConfig({
    title: "Home Cards Section",
    name: "homeCards",
    type: "document",
    fields: [
        {
            title: "Section Title",
            name: "title",
            type: "object",
            fields: [
                {
                    title: "Turkish",
                    name: "tr",
                    type: "string"
                },
                {
                    title: "English",
                    name: "en",
                    type: "string"
                }
            ]
        },
        {
            title: 'Card',
            name: 'card',
            type: 'array',
            of: [{type: 'card'}]
        }
    ]
})