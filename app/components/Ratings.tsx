export default function Ratings() {

  const ratings = [
    { star: 5, value: 90 },
    { star: 4, value: 70 },
    { star: 3, value: 50 },
    { star: 2, value: 25 },
    { star: 1, value: 10 },
  ];

  return (
    <div dir= "ltr" className="text-left mt-16">

      <h2 className="text-2xl font-bold text-center mb-8">
     Ratings
      </h2>

      <div className="space-y-4">

        {ratings.map((r, i) => (
          <div key={i} className="flex items-center gap-4">

            <span className="w-4">{r.star}</span>

            <div className="flex-1 bg-gray-800 h-3 rounded">

              <div
                className="bg-yellow-400 h-3 rounded"
                style={{ width: `${r.value}%` }}
              />

            </div>

          </div>
        ))}

      </div>

      <div className="text-right mt-4 text-yellow-400">
        ⭐ 4.5
      </div>

    </div>
  );
}