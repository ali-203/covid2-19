import React from "react";
import axios from "axios";


class Details extends React.Component {

async componentDidMount(){
   const res = await axios.get("https://api.covid19api.com/summary");
   console.log(res);
}



render(){
    return(
        <div>

        </div>
    )
}

}
export default Details;