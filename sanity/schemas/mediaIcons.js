import { defineConfig } from 'sanity'

export default defineConfig({

    title: 'Social Media Icons',
    name: 'mediaIcons',
    type: 'image',
    fields: [
        {
            name: 'caption',
            type: 'string',
            title: 'Caption',
        },
        {
            name: 'iconUrl',
            type: 'url',
            title: 'Social Media Link',
            validation: Rule => Rule.required(),
        }
    ]

})
