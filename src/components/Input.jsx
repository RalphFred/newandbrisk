/* eslint-disable react/prop-types */
export default function Input(props){
  return(
      <div className="flex flex-col font-handlee mb-6">
        <label className="font-bold text-xl mb-1">{props.label}</label>
        <input type={props.type} id={props.id} {...props.register} className="p-2 rounded-lg bg-cream border-2 focus:border-green outline-none"/>
        <span>{props.errorMessage}</span>
      </div>
  )
}