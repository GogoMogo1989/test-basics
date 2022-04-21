const search = require("./index")

const mockDb=["bálna", "kártya", "kánya", "sárga", "párna"]

it("this is my first test", () =>{
    expect("hello").toEqual("hello")
    search(mockDb, "kánya")
})

it("search with empty result", () =>{
    expect(search(mockDb, "zzz")).toEqual([])
    
})

it("real search keyword kutya", () =>{
    expect(search(mockDb, "kutya")).toEqual(["faszom"])
    
})