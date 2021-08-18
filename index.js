const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
const fs = require("fs");
let arguments = process.argv.slice(2);
console.log(arguments);

let flags = [];
let filenames = [];

for(let i of arguments){
    if(i[0] == "-"){
        flags.push(i);
    }else{
        filenames.push(i);
    }
}
if(flags.length == 0 && filenames.length!=0){
    for(let file of filenames){
        console.log(fs.readFileSync(file,"utf-8"));
    }
}else{
    for(let flag of flags){
        if(flag=="-rs"){
            for(let file of filenames){
                
            }
        }
    }
}

function addSequence(content){
    let contentArr = content.split("\n");
    for(let i=0;i<contentArr.length;i++){
        contentArr[i] = [i+1]+" "+contentArr[i];
    }
    return contentArr;
}
function addSequenceTne1(content){
    let contentArr = content.split("\n");
    let count = 1;
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]!=""){
        contentArr[i] = [i+1]+" "+contentArr[i];
        count++;
        }
    }
    return contentArr;
}
function removeExtaline(content){
    let contentArr = content.split("/n");
    let data=[];
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]=="" && contentArr[i-1]==""){
            contentArr[i]=null;
        }
        if(contentArr[i]=="" && contentArr[i-1]==null){
            contentArr[i]=null;
        }
    }
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]!=null){
            data.push(contentArr[i]);
        }
    }
    return data;
}









//subhesh bhaiya code

// const fs = require("fs");
// let arguments = process.argv.slice(2);

// let flags = [];
// let filenames = [];
// let secondaryArguments = [];

// for(let i of arguments) {
//     if(i[0] == "-") {
//         flags.push(i);
//     } else if(i[0] == "$") {
//         secondaryArguments.push(i.slice(1));
//     } else {
//         filenames.push(i);
//     }
// }

// // if(flags.length == 0) {
// //     for(let file of filenames) {
// //         console.log(fs.readFileSync(file,"utf-8"));
// //     }
// // } else {
// //     for(let flag of flags) {
// //         if(flag == "-rs") {
// //             for(let file of filenames) {
// //                 let fileData = fs.readFileSync(file,"utf-8");
// //                 console.log(fileData.split(" ").join(""));
// //             }
// //         } else if
// //     }
// // }


// for(let file of filenames) {
//     let fileData = fs.readFileSync(file,"utf-8");
//     for(let flag of flags) {
//         if(flag == "-rs") {
//             fileData = removeAll(fileData," ");
//         }
//         if(flag == "-rn") {
//             fileData = removeAll(fileData, "\r\n")
//         }
//         if(flag == "-rsc") {
//             for(let secondaryArgument of secondaryArguments) {
//                 fileData = removeAll(fileData,secondaryArgument);
//             }
//         }
            // if(flag=="-s"){
            //     let data= addsequence(filedata);
            //     console.log(data);
            // }
            // if(flag=="-sn"){
            //     let data=addsequenceTnel(filedata);
            //     console.log(data);
            // }
//     }
//     console.log(fileData);
// }

// function removeAll(string, removalData) {
//     return string.split(removalData).join("");
// }