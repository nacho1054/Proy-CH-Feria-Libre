let allwaysTrue = true;

const FetchItem = (delay, task) => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            allwaysTrue ? resolve(task) : reject("Error fetching product")
        }, delay);
    })
}

/*
after class 00:48:00
*/

export default FetchItem;


 