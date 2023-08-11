import { defineConfig } from 'sanity'

export default defineConfig({
    title: "Careers",
    name: "careers",
    type: "document",
    fields: [
        {
            title: "Page Name",
            name:  "pageName",
            type: "object",
            fields: [
                {
                    title: "Turkish",
                    name: "tr",
                    type: "string",
                    initialValue: "Kariyer",
                },
                {
                    title: "English",
                    name: "en",
                    type: "string",
                    initialValue: "Careers",
                }
            ]
        },
        {
            title: "Careers Banner",
            name: "banner",
            type: "image"
        },
        {
            title: 'Content', 
            name: 'content',
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
            title: 'Card',
            name: 'card',
            type: 'array',
            of: [{type: 'card'}]
        },
        {
            title: "Content Button Text",
            name: "contentButton",
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
            title: "Divider Button Text",
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
        },
        {
            title: "Second Divider Title",
            name: "secondTitle",
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
            title: "Second Divider Text",
            name: "secondText",
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
            title: 'Positions',
            name: 'positions',
            type: 'array',
            of: [{type: 'position'}]
        }
    ]
})