import { defineConfig } from 'sanity'

export default defineConfig({
    title: "Header Navigation",
    name: "navigation",
    type: "document",
    fields: [
        {
            title: 'Site Logo',
            name: 'logo',
            type: 'image'
        },
        {
            title: 'Select Pages For Nav Items',
            name: 'navItems',
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
            title: 'Select Page For Button',
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
    ],
})