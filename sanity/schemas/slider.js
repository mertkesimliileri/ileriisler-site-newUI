import { defineConfig } from 'sanity'

export default defineConfig({
    title: "Home Superpower Section",
    name: "homeSlider",
    type: "document",
    fields: [
        {
            title: "Section Title",
            name: "title",
            type: "string"
        },
        {
            title: 'Slider Item',
            name: 'item',
            type: 'array',
            of: [{type: 'sliderItem'}]
          }
    ]
})