import {
  UserTransformer,
  defaultUserTransformer,
} from '@backstage/plugin-catalog-backend-module-github';

export const githubEmailTransformer: UserTransformer = async (user, ctx) => {
  const backstageUser = await defaultUserTransformer(user, ctx);
  
  if (backstageUser && user.organizationVerifiedDomainEmails?.length) {
    backstageUser.spec.profile!.email = user.organizationVerifiedDomainEmails[0]
  }
  return backstageUser;
};