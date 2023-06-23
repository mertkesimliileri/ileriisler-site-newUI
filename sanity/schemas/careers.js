import { defineConfig } from 'sanity'

export default defineConfig({
    title: "Careers",
    name: "careers",
    type: "document",
    fields: [
        {
            title: "Careers Banner",
            name: "banner",
            type: "image"
        },
        {
            title: 'Content', 
            name: 'content',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            title: "Cards Title",
            name: "cardsTitle",
            type: "string"
        },
        {
            title: "Cards Text",
            name: "cardsText",
            type: "string"
        },
        {
            title: "Content Button Text",
            name: "contentButton",
            type: "string"
        },
        {
            title: "Divider Text",
            name: "text",
            type: "string"
        },
        {
            title: "Divider Button Text",
            name: "buttonText",
            type: "string"
        },
        {
            title: "Second Divider Title",
            name: "secondTitle",
            type: "string"
        },
        {
            title: "Second Divider Text",
            name: "secondText",
            type: "string"
        },
        {
            title: 'Positions',
            name: 'positions',
            type: 'array',
            of: [{type: 'position'}]
        }
    ]
})