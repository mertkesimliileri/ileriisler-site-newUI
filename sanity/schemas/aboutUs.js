import { defineConfig } from 'sanity'

export default defineConfig({
    title: "About Us",
    name: "aboutUs",
    type: "document",
    fields: [
        {
            title: "AboutUs Banner",
            name: "banner",
            type: "image"
        },
        {
            title: 'Paragraph 1', 
            name: 'content1',
            type: "object",
            fields: [
                {
                    title: "Turkish",
                    name: "tr",
                    type: 'array', 
                    of: [{type: 'block'}]
                },
                {
                    title: "English",
                    name: "en",
                    type: 'array', 
                    of: [{type: 'block'}]
                }
            ]
        },
        {
            title: 'Paragraph 2', 
            name: 'content2',
            type: "object",
            fields: [
                {
                    title: "Turkish",
                    name: "tr",
                    type: 'array', 
                    of: [{type: 'block'}]
                },
                {
                    title: "English",
                    name: "en",
                    type: 'array', 
                    of: [{type: 'block'}]
                }
            ]
        },
        {
            title: 'Video URL',
            name: 'video',
            type: 'url',
        },
        {
            title: "Divider Text",
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
            title: "Button Text",
            name: "buttonText",
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
        }
    ]
})