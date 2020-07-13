# Rich Code Navigation Indexed Code Samples

This is a sample code base used to validate Rich Code Nav indexing against DEV, INT, and PROD environments.

## Validation steps
1. Push any commit to any branch to trigger the build, typically a trivial comment change.
1. Monitor the indexing task and make sure the build succeeded.
1. Use the [Rich Nav chrome extension](https://chrome.google.com/webstore/detail/intellinav/dpafdcoicfffinjoondenocgljiaepfj) to validate code navigation on the commit that was indexed against the target environment.

## Build Status
### DEV

[![Build Status](https://dev.azure.com/devdiv/Personal/_apis/build/status/RichNavIndexCodeSamples/RichNavIndex-GitHub-DEV)](https://dev.azure.com/devdiv/Personal/_build/latest?definitionId=12798)

### INT

[![Build Status](https://dev.azure.com/devdiv/Personal/_apis/build/status/RichNavIndexCodeSamples/RichNavIndex-GitHub-INT)](https://dev.azure.com/devdiv/Personal/_build/latest?definitionId=12796)

### PROD

[![Build Status](https://dev.azure.com/devdiv/Personal/_apis/build/status/RichNavIndexCodeSamples/RichNavIndex-GitHub-PROD)](https://dev.azure.com/devdiv/Personal/_build/latest?definitionId=12797)
