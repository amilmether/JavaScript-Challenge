try{
    riskyFunction();
} catch(error){
    console.error("An Error occurred:",error.message);
} finally{
    console.log("Cleanup code can go here")
}