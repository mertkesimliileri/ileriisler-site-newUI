import { defineConfig } from 'sanity'

export default defineConfig({
    title: "Contact Us",
    name: "contactUs",
    type: "document",
    fields: [
        {
            title: "Page Name",
            name:  "pageName",
            type: "object",
            fields: [
                {
                    title: "Turkish",
                    name: "tr",
                    type: "string",
                    initialValue: "Bize Ulaşın",
                },
                {
                    title: "English",
                    name: "en",
                    type: "string",
                    initialValue: "Contact Us",
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
            title: "Phone",
            name: "phone",
            type: "string"
        },
        {
            title: "Mail",
            name: "mail",
            type: "string"
        },
        {
            title: "Contact Us Banner",
            name: "banner",
            type: "image"
        },
    ]
})