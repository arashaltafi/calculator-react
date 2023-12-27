import { LuTimerReset } from "react-icons/lu";
import { MdOutlineNightlight } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";

const ActionsComponent = () => {

  const changeTheme = () => {
    document.documentElement.classList.toggle('dark');
  }

  return (
    <div className="flex flex-row items-center justify-start gap-8">
      <WiDaySunny onClick={changeTheme} className='size-16 dark:hidden' />
      <MdOutlineNightlight onClick={changeTheme} className='size-16 hidden dark:block' />
      <LuTimerReset className='size-16' />
    </div>
  )
}

export default ActionsComponent