import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    ssgName: 'custom',
    nodeVersion: '18',
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ['content'],
            models: [
                {
                    name: 'Page',
                    type: 'page',
                    urlPath: '/{slug}',
                    filePath: 'content/pages/{slug}.json',
                    fields: [
                        { name: 'title', type: 'string', required: true },
                        { name: 'sections', type: 'list', items: { type: 'model', models: ['Hero', 'Section'] } }
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
                        { name: 'imagePosition', type: 'enum', options: ['left', 'right', 'center'] }
                    ]
                }
            ]
        })
    ],
    siteMap: ({ documents }) => {
        return documents
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
