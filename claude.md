To deploy to netlify:

`netlify deploy --dir=dist/ui-components-angular-template`


When I need you to add a new angular example page, you will:
1. Read the code snippet link I give. If I give you a link pointing to design.alberta.ca, use Playwright MCP to navigate and read it
2. Create a new angular component under the corresponding components folder, the template should be in a separate HTML. For example, if I give a link to callout, then a new angular component will be under callout folder.
3. The route you will come up
4. Make sure it is a standalone component, and import correctly from @abgov/angular-components
5. Make sure the side menu of localhost:4200 will have a way to link to a new route above.
