# Firebase Cloud Funcitons Exercise

This is a programming exercise for utilizing Firebase Cloud Functions
following the [Firecast tutorial](https://www.youtube.com/playlist?list=PLl-K7zZEsYLkPZHe41m4jfAxUi0JjLgSM)

---

# Firebase Commands
* `npm run-script lint` : runs lint to check the existence of possible errors within the project.
* `npm run-script build` : builds Javascript translation of Typescript code written.
* `firebase serve --only functions`: hosts a server for currently written Cloud Functions code
* `firebase deploy`: deploys current project


# Firebase Cloud Functions Rules

## Termination
1. HTTP triggers : send a response at the end
2. Background triggers : return a promise