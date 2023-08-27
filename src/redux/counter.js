import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, selectCount } from "../redux/counterreducer"
function Counter() {
    const dispatch = useDispatch();
    const data = useSelector(selectCount)
    return (
        <div>
            < button onClick={() => dispatch(decrement())}>-</button>
            <p>{data}</p>
            <button onClick={() => dispatch(decrement())}> +</button >
        </div >
    )
}
exportdefault Counter