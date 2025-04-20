import Part from "./Part"
import InfoCard from "./InfoCard";
function Dashboard() {
  return (
    <div className="px-5 ">
      <h2 className="bg-zinc-400 text-blue-300 rounded-full mt-10 w-52 px-3 py-2 ">Real Time IOT Analytics </h2>
      <h1 className="text-5xl mt-4 font-bold">Data Compression Dashboard</h1>
      <h4 className="text-zinc-400 text-xl mt-5 font-sm">Monitor and analyse real-time compression efficiency for IOT device networks</h4>
      <div className="grid grid-cols-3 space-x-4 mt-10">
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
      <Part />
    </div>
  )
}

export default Dashboard;