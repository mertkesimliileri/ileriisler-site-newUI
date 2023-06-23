import { defineConfig } from 'sanity'

export default defineConfig({
    title: "Card",
    name: "card",
    type: "object",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string"
        },
        {
            title: "Text",
            name: "text",
            type: "string"
        },
        {
            title: "Image",
            name: "image",
            type: "image"
        },
        
    ]
})