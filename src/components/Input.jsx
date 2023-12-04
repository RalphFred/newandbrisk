export default function Input({id, label, type, register, errorMessage}){
  console.log(label)
  return(
      <div>
        <label>{label}</label>
        <input type={type} id={id} register={register}/>
        <span>{errorMessage}</span>
      </div>
  )
}