const production="production"
const development="development";
const mode= development
let base_url="";
if(mode===production){
    base_url="";
}else{
    
    base_url="http://localhost:6550"
}

export { base_url };

