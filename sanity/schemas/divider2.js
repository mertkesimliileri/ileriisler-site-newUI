import { defineConfig } from 'sanity'

export default defineConfig({
    title: "Home Divider (Dark Blue Background)",
    name: "divider2",
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
    ]
})