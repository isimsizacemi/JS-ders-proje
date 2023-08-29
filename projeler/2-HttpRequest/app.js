

const getTodos = (resource) =>{

    return new Promise((resource,reject) => {
        const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
    // console.log(request,request.readyState);
        if(request.readyState === 4 && request.status == 200){
            const data = JSON.parse(request.responseText);

        callback(undefined,data);
            // console.log(request.responseText);

        }else if (request.readyState === 4 ) {
            // console.log("HATA ! ");
            callback('HATA',undefined);
        }
    });

    request.open('GET',resource);
    request.send();

    }
})





const getIt = () => {
    return new Promise((resoulve, reject) => {
        //resoulve("BAŞARILI 1!!!");
       reject("HATA HATA HATA");
    });

}

// getIt().then(data => {
//     console.log("Başarlı ! ",data);

// },error => {
//     console.log("Başarızı ! ",error);

// })

getIt().then(data => {
    console.log("Başarlı ! ",data);

})
.catch( error => {
    console.log("başarısız !!")
})