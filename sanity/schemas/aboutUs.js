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
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            title: 'Paragraph 2', 
            name: 'content2',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            title: "Content Image",
            name: "contentImage",
            type: "image"
        },
        {
            title: "Divider Text",
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