// counter_stack = []
// var counter_dict = {};
let map = new Map();

// console.log("this is type of ",typeof counter_stack)

function packet_request(device_id){
    let counter_name = device_id+'_counter'
    if (map.has(counter_name)){
        console.log("this is inside if statement")
    } else{
        console.log("inside else statement")
        map.set(counter_name, 1)
    }
    if (map.get(counter_name)==1){
        console.log("this is comparision if")
    }

    // console.log("this is map key value",map.get(counter_name)+1)
    // map.set(counter_name = map.get(counter_name)+1)
    map.set(counter_name, (map.get(counter_name))+1)
    console.log(map)
    console.log("this is decremented value of map", map.get(counter_name)-1)
    // counter_dict.device_id = 1 
    // counter_dict.y = 0
    console.log("the name of counter is:", counter_name)
    // counter_stack.push(counter_name)
    console.log(map)
}

device_id =["xjiziz", "alpha1", "cst3s5"]
packet_request(device_id[1])
// console.log(counter_stack)

