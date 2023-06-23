import { defineConfig } from 'sanity'

export default defineConfig({
    title: "Home Image Section",
    name: "homeImage",
    type: "document",
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
            title: "Button Text",
            name: "buttonText",
            type: "string"
        },
        {
            title: "Image",
            name: "image",
            type: "image"
        },
    ]
})