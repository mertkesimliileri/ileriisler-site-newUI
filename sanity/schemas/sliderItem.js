import { defineConfig } from 'sanity'

export default defineConfig({
    title: "Slider Item",
    name: "sliderItem",
    type: "object",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string"
        },
        {
            title: "Text",
            name: "text",
            type: "string"
        },
    ]
})