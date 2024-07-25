
import { legacy_createStore as creatstore} from "redux";
import reducer from "./reducer" 



const store = creatstore(reducer);

export default store