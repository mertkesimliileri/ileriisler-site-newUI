import { defineConfig } from 'sanity'

export default defineConfig({
    title: "Create Page Type 2",
    name: "pageType2",
    type: "document",
    fields: [
        {
            title: "Page Name",
            name: "pageName",
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
            title: 'Select Inner Page Navigation',
            name: 'pageNav',
            type: 'array',
            of: [
                {
                    name: 'reference1',
                    type: 'reference',
                    to: [{ type: 'pageType1' }],
                    title: 'Select from Page Type 1'
                },
                {
                    name: 'reference2',
                    type: 'reference',
                    to: [{ type: 'pageType2' }],
                    title: 'Select From Page Type 2'
                },
                {
                    name: 'reference3',
                    type: 'reference',
                    to: [{type: 'contactUs'}],
                    title: 'Add Contact Us Page'
                },
                {
                    name: 'reference4',
                    type: 'reference',
                    to: [{type: 'careers'}],
                    title: 'Add Careers Page'
                },
            ],
            validation: (Rule) =>
                Rule.custom((value) => {
                    if (value && value?.length > 2) {
                        return 'Max two page can be selected';
                    }
                    return true;
                }),
        },
        {
            title: "Banner",
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
            ],
            validation: (Rule) =>
                Rule.custom((value) => {
                    if (value && value?.length > 1) {
                        return 'Only one page can be selected';
                    }
                    return true;
                }),
        },
    ]
})