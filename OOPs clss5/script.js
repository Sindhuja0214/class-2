// //console.log("hii");
// //factory function
// //return object
// function createToy(dia,type,color,wrapper){
//     return {
//         dia,
//         type,
//         color,
//         wrapper,
//         buildToy : function(){
//             console.log( ` Start Manufactoring ${name} 
//             Head is building for ${dia} 
//             diameter Body type is build for ${type} Body
//             color of the toy is assigned to be ${color}
//             packing the toy in ${wrapper}
// `
           
//             );
//         },
//         info:function(){
//             console.log(` I'm, ${name}, I was build in create toy`)
//         }


            
         
        

//     }
// }

const obj = {
    land : "Property Land in GrandFather",
    getLand : function() {
        console.log(this.land);
    },

    innerobj: {
        land:"property owned by father",
         getLand :function(){
            console.log("Inner obj",this);
        },
        getDetails: () => {
            console.log("Inner obj1", this);
        },
        getDetailsin() {
            const arrowFunc = () => {
                console.log("Inner obj2", this);
            };
            arrowFunc();
        },
    },
};
console.log(obj);
obj.getLand();
obj.innerobj.getLand();
console.log("Global window", this);
obj.innerobj.getDetails();
obj.innerobj.getDetailsin();


//constructor function
// create an object
function product(name,price,type){
    // creates{}
this.product_name = name;
this.product_price = price;
this.product_type = type;
this.getDetails = function(){
    console.log(`
    product Name :${this.product_name}
    product price :${this.product_price}
    product type :${this.product_type}
    `);
};

}
product.prototype.getPname =function(){
    console.log("product Name : ", this.product_name)
}
 const HpLaptop = new product("HP53",5000,"Electronics");
console.log(HpLaptop)
HpLaptop.getDetails();
HpLaptop.getPname();





