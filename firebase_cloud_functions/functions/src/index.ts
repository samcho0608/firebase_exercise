import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// How to automatically send messages via FCM on data update in Firestore
export const onUserUpdate = functions.firestore.document("user/USER00000000")
    .onUpdate((change) => {
        const after = change.after.data();
        const payload = {
            data: {
                grad_year : `${after.grad_year}`,
                major : `${after.major}`
            }
        };
        // since sendToTopic method returns a Promise, 
        // must return for cloud function to wait and send out the result
        return admin.messaging().sendToTopic("user_000000000", payload)
        .catch((error) => {
            console.log("FCM failed", error);
        });
    });

// How to write a HTTP GET Request
export const getUser = functions.https.onRequest((request, response) => {
    admin.firestore().doc("user/USER00000000").get()
    .then((snapshot) => {
        const data = snapshot.data();
        response.send(data);
    })
    .catch((error) => {
        // handle errors
        console.log(error);
        response.status(500).send(error);
    });
});
