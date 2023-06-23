import { defineConfig } from 'sanity'

export default defineConfig({
    title: "Home Brands",
    name: "homeBrands",
    type: "document",
    fields: [
        {
            title: 'Brands',
            name: 'brands',
            type: 'array',
            of: [{type: 'brand'}]
          }
    ]
})