export const RouterPath = {
  main: {
    url: '/',
    getUrl: () => '/',
  },
  blog: {
    url: '/blog/:id',
    getUrl: (id: string) => `/blog/${id}`,
  },
  project: {
    url: '/project/:id',
    getUrl: (id: string) => `/project/${id}`,
  },
};
