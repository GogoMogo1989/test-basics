const array = ["kutya", "cica", "egér", "madár", "hal", "tehén"]



function search(arr, word){
    const result = arr.filter(element => element.includes(word))

    return result
}

/* console.log(search(array, "kutya")) */

module.exports=search