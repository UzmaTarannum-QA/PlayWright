"use strict";
let responsecode = [200, 201, 404, 500, 302, 403];
function getFailedResponse(codes) {
    return codes.filter(function (code) {
        return code >= 400;
    });
}
console.log("All Codes", responsecode);
console.log("Failed Codes", getFailedResponse(responsecode));
