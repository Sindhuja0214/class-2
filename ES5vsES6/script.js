//console.log("hii");
function scopeFunc(){}
let func_var =36;
if (true){
    console.log(func_var);

}

scopeFunc();
// shadowing
if (true){
    const shadow_var ="tami";
    if (true){
        const shadow_var="sindhu";
        console.log("sub block", shadow_var);
    }
    console.log(" san block", shadow_var);
    }
