let responsecode: number[] = [200, 201, 404, 500, 302, 403];

function getFailedResponse (codes:number[]): number[]{
    return codes.filter(function (code: number): boolean{
        return  code >= 400;

    });
}

console.log("All Codes", responsecode);
console.log("Failed Codes", getFailedResponse(responsecode));