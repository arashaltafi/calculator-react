import { MdOutlineNightlight } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";

const ActionsComponent = () => {

  const changeTheme = () => {
    if (localStorage.getItem('theme') === 'light') {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark')
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
  }

  return (
    <div className="w-full px-4 py-2 flex flex-row items-center justify-start gap-4">
      <MdOutlineNightlight onClick={changeTheme} className='bg-action dark:hidden' />
      <WiDaySunny onClick={changeTheme} className='bg-action hidden dark:block' />
    </div>
  )
}

export default ActionsComponent