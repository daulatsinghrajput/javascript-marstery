try{
    let x = undefined;   // ager error aaya to catch block me jao
console.log(x[0]);
} catch {        // ager error nahi aaya to iss block ka execution nahi hoga          // } catch(err){
    console.log("error headling in catch");        // console.log(" ",err)
} finally {
    console.log("finally always gets executed");  // ye hamesa execute hoga
}
console.log("end");
// output
// [Running] node "d:\code\full stack web dev\javascript-mastery\javascript beginner\try catch finally\tryCatch.js"
// error headling in catch
// finally always gets executed

// [Done] exited with code=0 in 0.123 seconds