import { defineConfig } from 'sanity'

export default defineConfig({
    title: "How do we Work",
    name: "howWork",
    type: "document",
    fields: [
        {
            title: "How do we Work Banner",
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
            title: "Circle 1 image",
            name: "circle1Img",
            type: "image"
        },
        {
            title: "Circle 2 image",
            name: "circle2Img",
            type: "image"
        },
        {
            title: "Circle 3 image",
            name: "circle3Img",
            type: "image"
        },
        {
            title: "Circle 4 image",
            name: "circle4Img",
            type: "image"
        },
        {
            title: "Circle 5 image",
            name: "circle5Img",
            type: "image"
        },
        {
            title: "Circle 1 Text",
            name: "circle1Text",
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
            title: "Circle 2 Text",
            name: "circle2Text",
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
            title: "Circle 3 Text",
            name: "circle3Text",
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
            title: "Circle 4 Text",
            name: "circle4Text",
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
            title: "Circle 5 Text",
            name: "circle5Text",
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
            title: "Bottom Section Main Text",
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
            title: "Bottom Section Left Title",
            name: "leftTitle",
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
            title: "Bottom Section Left Text",
            name: "leftText",
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
            title: "Bottom Section Right Text",
            name: "rightText",
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
            title: "Bottom Section Right Title",
            name: "rightTitle",
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
    ]
})