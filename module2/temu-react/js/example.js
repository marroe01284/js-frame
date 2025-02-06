function useState(){
    let value = "";
    function setValue(val){
        value = val;
    }
    return [value, setValue];
}