import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    ssgName: 'custom',
    devCommand: 'npm run dev',
    nodeVersion: '18',
    contentSources: [
        new GitContentSource({
            rootPath: process.cwd(),
            contentDirs: ['content'],
            assetsConfig: {
                referenceType: 'static',
                staticDir: 'public',
                uploadDir: 'images',
                publicPath: '/'
            },
            models: [
                {
                    name: 'Page',
                    type: 'page',
                    urlPath: '/{slug}',
                    filePath: 'content/pages/{slug}.json',
                    fields: [
                        { name: 'title', type: 'string', required: true },
                        { name: 'slug', type: 'string', required: true, hidden: true },
                        { name: 'sections', type: 'list', items: { type: 'model', models: ['Hero', 'Section', 'CommunitySpotlight', 'CommunityGrid', 'EventGrid', 'ExecutiveBoard', 'DepartmentList', 'PressKitHeader', 'LogoGrid', 'CabinetArchive', 'IframeSection', 'LpjList', 'ContactList'] } }
                    ]
                },
                {
                    name: 'Hero',
                    type: 'object',
                    fields: [
                        { name: 'type', type: 'string', const: 'Hero' },
                        { name: 'title', type: 'string' },
                        { name: 'subtitle', type: 'string' }
                    ]
                },
                {
                    name: 'Section',
                    type: 'object',
                    fields: [
                        { name: 'type', type: 'string', const: 'Section' },
                        { name: 'title', type: 'string' },
                        { name: 'content', type: 'markdown' },
                        { name: 'backgroundColor', type: 'enum', options: ['white', 'blue'] },
                        { name: 'image', type: 'image' },
                        { name: 'imageCaption', type: 'string' },
                        { name: 'imagePosition', type: 'enum', options: ['left', 'right', 'center'] }
                    ]
                },
                {
                    name: 'Community',
                    type: 'object',
                    labelField: 'name',
                    fields: [
                        { name: 'name', type: 'string', required: true },
                        { name: 'description', type: 'text', required: true },
                        { name: 'longDescription', type: 'markdown' },
                        { name: 'category', type: 'string' },
                        { name: 'image', type: 'image', required: true },
                        {
                            name: 'links',
                            type: 'list',
                            items: {
                                type: 'object',
                                fields: [
                                    { name: 'label', type: 'string' },
                                    { name: 'url', type: 'string' }
                                ]
                            }
                        }
                    ]
                },
                {
                    name: 'CommunitySpotlight',
                    type: 'object',
                    fields: [
                        { name: 'type', type: 'string', const: 'CommunitySpotlight' },
                        { name: 'title', type: 'string', default: 'Pusat Komunitas' },
                        { name: 'community', type: 'model', models: ['Community'] }
                    ]
                },
                {
                    name: 'CommunityGrid',
                    type: 'object',
                    fields: [
                        { name: 'type', type: 'string', const: 'CommunityGrid' },
                        { name: 'title', type: 'string', default: 'Explore Communities' },
                        { name: 'communities', type: 'list', items: { type: 'model', models: ['Community'] } }
                    ]
                },
                {
                    name: 'Event',
                    type: 'object',
                    labelField: 'title',
                    fields: [
                        { name: 'title', type: 'string', required: true },
                        { name: 'date', type: 'string', required: true },
                        { name: 'time', type: 'string' },
                        { name: 'location', type: 'string', required: true },
                        { name: 'description', type: 'text', required: true },
                        { name: 'longDescription', type: 'markdown' },
                        { name: 'link', type: 'string' },
                        { name: 'linkText', type: 'string' },
                        { name: 'tag', type: 'string' },
                        { name: 'image', type: 'image' },
                    ]
                },
                {
                    name: 'EventGrid',
                    type: 'object',
                    fields: [
                        { name: 'type', type: 'string', const: 'EventGrid' },
                        { name: 'title', type: 'string', default: 'All Events' },
                        { name: 'events', type: 'list', items: { type: 'model', models: ['Event'] } }
                    ]
                },
                {
                    name: 'ExecutiveBoard',
                    type: 'object',
                    fields: [
                        { name: 'type', type: 'string', const: 'ExecutiveBoard' },
                        { name: 'title', type: 'string', default: 'Executive Board' },
                        { name: 'chair', type: 'string', default: 'Adriano Ferane Gunawan' },
                        { name: 'vice', type: 'string', default: 'Alfred Triza & Nathanael Lumen Sukmana' }
                    ]
                },
                {
                    name: 'Department',
                    type: 'object',
                    labelField: 'name',
                    fields: [
                        { name: 'name', type: 'string', required: true },
                        { name: 'description', type: 'text' },
                        { name: 'members', type: 'list', items: { type: 'string' } }
                    ]
                },
                {
                    name: 'DepartmentList',
                    type: 'object',
                    fields: [
                        { name: 'type', type: 'string', const: 'DepartmentList' },
                        { name: 'departments', type: 'list', items: { type: 'model', models: ['Department'] } }
                    ]
                },
                {
                    name: 'Logo',
                    type: 'object',
                    labelField: 'name',
                    fields: [
                        { name: 'name', type: 'string', required: true },
                        { name: 'image', type: 'image', required: true }
                    ]
                },
                {
                    name: 'LogoGrid',
                    type: 'object',
                    fields: [
                        { name: 'type', type: 'string', const: 'LogoGrid' },
                        { name: 'title', type: 'string', default: 'Logo Grid' },
                        { name: 'logos', type: 'list', items: { type: 'model', models: ['Logo'] } }
                    ]
                },
                {
                    name: 'PressKitHeader',
                    type: 'object',
                    fields: [
                        { name: 'type', type: 'string', const: 'PressKitHeader' },
                        { name: 'title', type: 'string', default: 'PPI Aachen Logos' },
                        { name: 'subtitle', type: 'string' },
                        { name: 'downloadLink', type: 'string' },
                        { name: 'downloadText', type: 'string', default: 'Download all (.zip)' }
                    ]
                },
                {
                    name: 'Cabinet',
                    type: 'object',
                    labelField: 'period',
                    fields: [
                        { name: 'period', type: 'string', required: true },
                        { name: 'chair', type: 'string', required: true },
                        { name: 'vice', type: 'string' },
                        { name: 'image', type: 'image' },
                        { name: 'departments', type: 'list', items: { type: 'model', models: ['Department'] } }
                    ]
                },
                {
                    name: 'CabinetArchive',
                    type: 'object',
                    fields: [
                        { name: 'type', type: 'string', const: 'CabinetArchive' },
                        { name: 'title', type: 'string', default: 'Arsip Pengurus Kabinet' },
                        { name: 'cabinets', type: 'list', items: { type: 'model', models: ['Cabinet'] } },
                        { name: 'pastChairs', type: 'list', items: { type: 'object', fields: [{ name: 'name', type: 'string' }, { name: 'period', type: 'string' }] } }
                    ]
                },
                {
                    name: 'IframeSection',
                    type: 'object',
                    fields: [
                        { name: 'type', type: 'string', const: 'IframeSection' },
                        { name: 'src', type: 'string', required: true },
                        { name: 'title', type: 'string' },
                        { name: 'height', type: 'string' }
                    ]
                },
                {
                    name: 'LpjList',
                    type: 'object',
                    fields: [
                        { name: 'type', type: 'string', const: 'LpjList' },
                        { name: 'items', type: 'list', items: { type: 'object', fields: [{ name: 'year', type: 'string' }, { name: 'url', type: 'string' }] } }
                    ]
                },
                {
                    name: 'ContactList',
                    type: 'object',
                    fields: [
                        { name: 'type', type: 'string', const: 'ContactList' },
                        { name: 'title', type: 'string', default: 'Department Contacts' },
                        { name: 'contacts', type: 'list', items: { type: 'object', fields: [{ name: 'role', type: 'string' }, { name: 'email', type: 'string' }] } },
                        { name: 'officeName', type: 'string', default: 'Sekretariat PPI Aachen' },
                        { name: 'officeAddress', type: 'string', default: 'An der Schanz 1, 52064 Aachen, Germany' },
                        { name: 'whatsappNumber', type: 'string', default: '+49 15679 027862 (WA Only)' }
                    ]
                }
            ]
        })
    ],
    siteMap: ({ documents }) => {
        return (documents as any[])
            .filter((d) => d.modelName === 'Page')
            .map((d) => {
                const slug = d.fields.slug;
                if (!slug) return null;
                return {
                    urlPath: slug === 'home' ? '/' : `/${slug}`,
                    document: d,
                };
            })
            .filter((d) => d !== null) as any[];
    }
});
