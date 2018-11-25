# Issues-list

Sample Apollo + React application for fetching latest issues from facebook/react Github repository using Github GraphQL API (v4).

## Development

1. Clone this repository
2. Execute `yarn install`
3. Create `.env.development.local` file with your Github API token assigned to an env variable e.g. `REACT_APP_GH_TOKEN=0c0173asdfasdf4eae8d51b9de4cb0d3d`
4. Execute `yarn start` and (in another console) `yarn test`
5. Execute `yarn build` to create release

## TODO

- input for custom Github token (or better OAuth integration)
- input for repository URL (support other repositories than facebook/react)
- issues pagination (support more than 20 latest issues)
- refresh button
- nicer UI
- save issue open/close state through page refereshes (e.g. in LocalStorage)
- Flow typings

---

author: Jan Grzegorowski
