import { defineConfig } from 'sanity'

export default defineConfig({
    title: "Create Page Type 1",
    name: "pageType1",
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
            title: "Page Banner",
            name: "banner",
            type: "image"
        },
        {
            title: 'Paragraph 1', 
            name: 'content1',
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
            title: 'Paragraph 2', 
            name: 'content2',
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
            title: 'Video URL',
            name: 'video',
            type: 'url',
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
            title: "Button Text",
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
            title: 'Select Button Reference',
            name: 'navButton',
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
                    if (value && value?.length > 1) {
                        return 'Only one page can be selected';
                    }
                    return true;
                }),
        },
    ],
})