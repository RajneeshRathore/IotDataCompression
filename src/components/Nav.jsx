import {Link,Route,Routes} from 'react-router-dom';
import Dashboard from './Dashboard';
import Device from './Device';
import Algorithm from './Algorithm';
function Nav() {
  return (
    <div>
      <nav className='w-full h-20 bg-amber-500 flex justify-between items-center px-4 py-4'>
          <div className='overflow-hidden object-cover  flex '>
            <img className='h-18 w-18 rounded-full ' src="https://tse2.mm.bing.net/th/id/OIP.ve9xYp-ZZDbndNVv4GmN4QHaHa?rs=1&pid=ImgDetMain" alt="logo" />
            <h2 className='mt-6 ml-2 uppercase'>Iot Compression</h2>
        </div>
        <div className='hidden md:block'>
         <Link  to='/'  className='m-4'>Dashboard</Link>
         <Link   to='/device' className='m-4'>Devices</Link>
         <Link  to='/algorithm'  className='m-4'>Algorithms</Link>
        </div>
        <div>
          <div>
            <button className='bg-blue-400 text-white hover:bg-blue-700 cursor-pointer rounded-md px-2 py-2 outline-none active:bg-green-700'>Connect Device</button>
          </div>
        </div>
      </nav>
    <Routes>
      <Route path='/' element={<Dashboard/>} ></Route>
      <Route path='/device' element={<Device/>}></Route>
      <Route path='/algorithm' element={<Algorithm/>}></Route>
    </Routes>
    </div>
  )
}

export default Nav;