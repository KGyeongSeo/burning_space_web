export const RouterPath = {
  main: {
    url: '/',
    getUrl: () => '/',
  },
  blog: {
    url: '/blog/:id',
    getUrl: (id) => `/blog/${id}`,
  },
  project: {
    url: '/project/:id',
    getUrl: (id) => `/project/${id}`,
  },
};
