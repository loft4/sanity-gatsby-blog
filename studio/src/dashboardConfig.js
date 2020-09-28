export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f71e395a42cb5d6b1b360e9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-p3pwt3q1',
                  apiId: '029a2f08-ff92-4fc8-a417-ca6eb9e99ffc'
                },
                {
                  buildHookId: '5f71e3950727d01711682a81',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-6ib36sz8',
                  apiId: '9cc7c3e8-9e83-46a6-a19e-381b5f1fe6d8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/loft4/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-6ib36sz8.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
