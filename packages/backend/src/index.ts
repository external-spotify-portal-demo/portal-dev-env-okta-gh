/*
 * Hi!
 *
 * Note that this is an EXAMPLE Backstage backend. Please check the README.
 *
 * Happy hacking!
 */

import { createBackend } from '@backstage/backend-defaults';

// UNCOMMENT TO MATCH OKTA USER AUTH TO GITHUB USER ENTITY VIA EMAIL

// import { createBackendModule } from '@backstage/backend-plugin-api';
// import { githubOrgEntityProviderTransformsExtensionPoint } from '@backstage/plugin-catalog-backend-module-github-org';
// import { githubEmailTransformer } from './transformers/githubUserTransformer';

// const githubOrgModule = createBackendModule({
//   pluginId: 'catalog',
//   moduleId: 'github-org-extensions',
//   register(env) {
//     env.registerInit({
//       deps: {
//         githubOrg: githubOrgEntityProviderTransformsExtensionPoint,
//       },
//       async init({ githubOrg }) {
//         githubOrg.setUserTransformer(githubEmailTransformer);
//       },
//     });
//   },
// });

// UNCOMMENT TO MATCH OKTA USER AUTH TO GITHUB USER ENTITY VIA EMAIL


const backend = createBackend();

backend.add(import('@backstage/plugin-app-backend'));
backend.add(import('@backstage/plugin-proxy-backend'));

// scaffolder plugin
backend.add(import('@backstage/plugin-scaffolder-backend'));
backend.add(import('@backstage/plugin-scaffolder-backend-module-github'));
backend.add(
  import('@backstage/plugin-scaffolder-backend-module-notifications'),
);

// techdocs plugin
backend.add(import('@backstage/plugin-techdocs-backend'));

// auth plugin
backend.add(import('@backstage/plugin-auth-backend'));
// See https://backstage.io/docs/backend-system/building-backends/migrating#the-auth-plugin
backend.add(import('@backstage/plugin-auth-backend-module-okta-provider'));
backend.add(import('@backstage/plugin-auth-backend-module-github-provider'));
// backend.add(import('@backstage/plugin-auth-backend-module-guest-provider'));
// See https://backstage.io/docs/auth/guest/provider

// catalog plugin
backend.add(import('@backstage/plugin-catalog-backend'));
backend.add(
  import('@backstage/plugin-catalog-backend-module-scaffolder-entity-model'),
);
backend.add(import('@backstage/plugin-catalog-backend-module-github-org'));
backend.add(import('@backstage/plugin-catalog-backend-module-github'));
backend.add(import('@backstage/plugin-events-backend-module-github'));

// UNCOMMENT TO MATCH OKTA USER AUTH TO GITHUB USER ENTITY VIA EMAIL WITH MODULE EXTENSION
// backend.add(import('@portal-internal/plugin-catalog-backend-module-okta-gh-user-transformer'));
// UNCOMMENT TO MATCH OKTA USER AUTH TO GITHUB USER ENTITY VIA EMAIL WITH MODULE EXTENSION


// UNCOMMENT TO MATCH OKTA USER AUTH TO GITHUB USER ENTITY VIA EMAIL WITH LOCAL FILES
// backend.add(githubOrgModule);
// UNCOMMENT TO MATCH OKTA USER AUTH TO GITHUB USER ENTITY VIA EMAIL WITH LOCAL FILES

// See https://backstage.io/docs/features/software-catalog/configuration#subscribing-to-catalog-errors
backend.add(import('@backstage/plugin-catalog-backend-module-logs'));

// permission plugin
backend.add(import('@backstage/plugin-permission-backend'));
// See https://backstage.io/docs/permissions/getting-started for how to create your own permission policy
backend.add(
  import('@backstage/plugin-permission-backend-module-allow-all-policy'),
);

// search plugin
backend.add(import('@backstage/plugin-search-backend'));

// search engine
// See https://backstage.io/docs/features/search/search-engines
backend.add(import('@backstage/plugin-search-backend-module-pg'));

// search collators
backend.add(import('@backstage/plugin-search-backend-module-catalog'));
backend.add(import('@backstage/plugin-search-backend-module-techdocs'));

// kubernetes plugin
backend.add(import('@backstage/plugin-kubernetes-backend'));

// notifications and signals plugins
backend.add(import('@backstage/plugin-notifications-backend'));
backend.add(import('@backstage/plugin-signals-backend'));

backend.start();
