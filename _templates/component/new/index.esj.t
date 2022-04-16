---
to: <%= `packages/amnis-${type}/src/${Name}/index.ts` %>
---
export * from './<%= Name %>';
export * from './<%= Name %>.types';
export * from './<%= Name %>.schema';
