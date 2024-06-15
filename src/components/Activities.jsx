import data from './data.json'

export default function Activities() {
  return (
    <div className="my-20" id="activities">
      <div className="flex items-center justify-end w-1/2 h-20 py-2 pr-5 mb-8 bg-lime-950 rounded-r-2xl">
        <h2 className="text-4xl font-bold text-white ">ACTIVITIES</h2>
      </div>
      <div>
        <div className="flex flex-col gap-y-10 mx-[10%]">
          {data.activities.map((activity, id) => (
            <div key={id}>
              <div
                className={
                  activity.id === 2
                    ? `flex flex-row-reverse text-justify gap-x-10 `
                    : `flex text-justify gap-x-10`
                }
              >
                <img src={activity.image} alt={activity.title} className="" />
                <div className="flex flex-col justify-center">
                  <h3
                    className={`text-lime-700 font-bold mb-5 ${activity.id !== 2 ? 'text-right' : 'text-left'}`}
                  >
                    {activity.title}
                  </h3>
                  <p>{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
