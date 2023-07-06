import { defineConfig } from 'sanity'

export default defineConfig({
    title: "Contact Us",
    name: "contactUs",
    type: "document",
    fields: [
        {
            title: "Title",
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
            title: "Text",
            name: "text",
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
            title: "Phone",
            name: "phone",
            type: "string"
        },
        {
            title: "Mail",
            name: "mail",
            type: "string"
        },
        {
            title: "Contact Us Banner",
            name: "banner",
            type: "image"
        },
    ]
})