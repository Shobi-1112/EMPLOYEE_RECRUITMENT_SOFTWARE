
import { questionContent } from "../../List";

export const Search=({data, contact,setValues, handleSearch})=>{
      const contain = questionContent.filter(f => f.question.toLowerCase().includes(data.toLowerCase()))
      // console.log(contain)
      handleSearch(contain)
    
}
// export const [seaches,setSeaches]=(useState(""))

