import { defineConfig } from 'sanity'

export default defineConfig({
    title: "Position",
    name: "position",
    type: "object",
    fields: [
        {
            title: "Position Name",
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
            title: 'Position details', 
            name: 'details',
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
            title: "Position Category",
            name: "category",
            type: "string",
            initialValue: 'software',
            options: {
                list: [
                { title: 'Yazılım', value: 'software' },
                { title: 'Yönetim', value: 'management' },
                ],
            },
        }
    ]
})