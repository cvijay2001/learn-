

function Action_btn({ action,btnContent, manupulateActionBtn=()=>(null)}) {
    return (
        <>
            <button type="submit" onClick={()=>{manupulateActionBtn()}} className={`btn btn-${action}`}>
               {btnContent}
            </button>
        </>
    )
    
}

export default Action_btn;  