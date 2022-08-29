import { useContext } from "react";
import { When } from "react-if";
import {contextAuth} from "../context/contextAuth";

export default function Auth(props){
    const {isValid,conDo} = useContext(contextAuth)
    return(
        <>
        <When condition={isValid && conDo(props.action)}>
        {props.children}
        </When>
        </>
    )
}