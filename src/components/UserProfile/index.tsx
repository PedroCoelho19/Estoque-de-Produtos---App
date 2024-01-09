import imgUser from "../../assets/user.png"
interface IUserProfile {
  name?:string;
  user?:string;
  toggle?:boolean;
}

const UseProfile:React.FC<IUserProfile> = ({toggle, name, user}) => {
  return(
    <div className={`flex gap-5 items-center ${toggle ? "bg-none transition-all duration-300 delay-200" : " bg-white rounded-xl p-2"}`}>
      <div className="min-w-[3.9rem] h-[3.9rem]">
        <img src={imgUser} alt="" className="w-full h-full rounded-full object-cover"/>
      </div>
      <div className={`${toggle ? "opacity-0" : "delay-200"}`}>
        <h3 className="text-xl">{name}</h3>
        <span className="text-[0.75rem] opacity-60">{user}</span>
      </div>
    </div>
  )
}

export default UseProfile