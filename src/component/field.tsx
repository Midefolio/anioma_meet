/* eslint-disable @typescript-eslint/no-explicit-any */
const Field = ({data}:any) => {
    return ( <>
      <div className="my-mother">
        <span className="interBold">title {data.isReuired && <span className="red">*</span> }</span>
        <div className="my-mother down-3">
          {data.type ==  'text' && <input type="text"  /> }
        </div>
      </div>
    </> );
}
 
export default Field;