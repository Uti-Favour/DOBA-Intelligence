import { people } from "../constant"

  
  export default function Team() {
    return (
      <div className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-semibold tracking-tight text-blue-800 sm:text-6xl">Meet our leadership😊</h2>
            <p className="mt-6 text-lg leading-8 text-gray-700">
            Get to know the experienced and passionate team driving our success. We're committed to giving you a world class experience.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 grid-cols-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="lg:flex items-center lg:gap-x-6">
                  <img className="h-16 w-16 rounded-full object-cover" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-blue-800">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  