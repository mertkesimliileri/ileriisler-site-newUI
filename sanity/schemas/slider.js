import { defineConfig } from 'sanity'

export default defineConfig({
    title: "Home Interactive Boxes Section",
    name: "homeSlider",
    type: "document",
    fields: [
        {
            title: 'Slider Item',
            name: 'item',
            type: 'array',
            of: [{type: 'sliderItem'}]
          }
    ]
})