module.exports = {
    name: 'Login', // The name of your frontend. This name can be changed at any time.
    api: {
      root: './src/api', // Directory where the CLI will add all your generated API functions.
      importAliasRoot: '@/custom-dropins/api',
    },
    components: [
      {
        id: 'Components',
        root: './src/components', // Directory where the CLI will add all your generated components.
        importAliasRoot: '@/custom-dropins/components',
        cssPrefix: 'elsie',
        default: true,
      },
    ],
    containers: {   
      root: './src/containers', // Directory where the CLI will add all your generated containers.
      importAliasRoot: '@/custom-dropins/containers',
    },
  };