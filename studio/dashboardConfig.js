export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6131397f21e0dd20cca101e8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-v2g3r6pw',
                  apiId: '252bd3e4-86d5-4dcb-90e2-113a8ce8735c'
                },
                {
                  buildHookId: '6131397fbac5dd1f9baf36f4',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-gww25qyb',
                  apiId: 'a1a1ab73-d4e0-478f-88a9-f318356bb0b1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MohammedAkasha/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-gww25qyb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
