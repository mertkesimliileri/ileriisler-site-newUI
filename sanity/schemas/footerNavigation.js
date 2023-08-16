import { defineConfig } from 'sanity'

export default defineConfig({
    title: "Footer Navigation",
    name: "footerNavigation",
    type: "document",
    fields: [
        {
            title: "Company Name",
            name: "name",
            type: "string",
        },
        {
            title: "Address",
            name: "address",
            type: "string",
        },
        {
            title: "Phone",
            name: "phone",
            type: "string",
        },
        {
            title: "Mail",
            name: "mail",
            type: "string",
        },
        {
            title: "Display column 1",
            name: "column1Display",
            type: "boolean",
            initialValue: true
        },
        {
            title: "Column 1 title",
            name: "title1",
            type: "object",
            fields: [
                {
                    title: "Turkish",
                    name: "tr",
                    type: "string",
                },
                {
                    title: "English",
                    name: "en",
                    type: "string"
                }
            ]
        },
        {
            title: 'Select Pages For First Column',
            name: 'firstColumn',
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
                    title: 'Add Contact Us Page',
                },
                {
                    name: 'reference4',
                    type: 'reference',
                    to: [{ type: 'careers' }],
                    title: 'Add Careers Page',
                },
            ],
        },
        {
            title: "Display column 2",
            name: "column2Display",
            type: "boolean",
            initialValue: true
        },
        {
            title: "Column 2 title",
            name: "title2",
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
            title: 'Select Pages For Second Column',
            name: 'secondColumn',
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
        },
        {
            title: "Display column 3",
            name: "column3Display",
            type: "boolean",
            initialValue: true
        },
        {
            title: "Column 3 title",
            name: "title3",
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
            title: 'Select Pages For Third Column',
            name: 'thirdColumn',
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
        },
        {
            title: 'Setup Social Media',
            name: 'socialMedia',
            type: 'array',
            of: [{type: 'mediaIcons'}],
            description: "Max 20x20"
        },
    ],
})