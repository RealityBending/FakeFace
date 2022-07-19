# Template for JsPsych Experiments

The setup includes:
- experiment.js file: 
  - where the experiment is coded
  - the commitToRepo() function to send the jsonData to netlify function
- .netlify/functions/api
  - where the jsonData is received and pushed to repo

## How to Setup the authentication

1. Create Netlify account and sync with the GitHub repository to be deployed
2. Go to **Deploy Settings > Functions > Settings > Functions directory** and add directory where functions will be stored i.e., `.netlify/functions/api`
3. Go to **GitHub settings** (under your own profile) > **Developer settings > Personal access tokens** and generate a new token.
4. Go to **Environment** under the same netlify settings to add a `GH_TOKEN` environment variable, which is the value of the personal access token


## Customization: Edit the .netlify/functions/api.js file
 
 1. Commit information
  - REPO_NAME
  - REPO_OWNER
 
 2. Function: createOrUpdateFileContents()
  - committer.name
  - committer.email
  - author.name
  - author.email


