import { defineConfig } from 'sanity'

export default defineConfig({
    title: "Home Banner",
    name: "homeBanner",
    type: "document",
    fields: [
        {
            title: "Subtitle",
            name: "subTitle",
            type: "string"
        },
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
        }
    ]
})