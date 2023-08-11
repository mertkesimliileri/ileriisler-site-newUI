import { defineConfig } from 'sanity'

export default defineConfig({
    title: "Home Banner",
    name: "homeBanner",
    type: "document",
    fields: [
        {
            title: "Subtitle",
            name: "subTitle",
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
            title: "Title",
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
            title: "Bold Title",
            name: "titleBold",
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
            title: "Text",
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
                    to: [{ type: 'contactUs' }],
                    title: 'Add Contact Us Page'
                },
                {
                    name: 'reference4',
                    type: 'reference',
                    to: [{ type: 'careers' }],
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
    ]
})