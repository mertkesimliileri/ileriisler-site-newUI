import { defineConfig } from 'sanity'

export default defineConfig({
    title: "Position",
    name: "position",
    type: "object",
    fields: [
        {
            title: "Position Name",
            name: "title",
            type: "string"
        },
        {
            title: 'Position details', 
            name: 'details',
            type: 'array', 
            of: [{type: 'block'}]
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