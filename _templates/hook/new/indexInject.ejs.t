---
inject: true
append: true
to: <%= `packages/amnis-hooks/src/index.ts` %>
---
export * from './<%= name %>';