const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const metadataHost = core.getInput('metadata-host');
  const adminSecret = core.getInput('admin-secret');
  const allowList = core.getInput('allow-list');
  console.log(`metadataHost ${metadataHost}!`);
  console.log(`adminSecret ${adminSecret}!`);
  console.log(`allowList ${allowList}!`);
  
  core.setOutput("success", true);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}