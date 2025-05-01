export default function CarListing() {
  return (
    <div className="max-w-6xl mx-auto p-4 bg-white shadow-md rounded-xl mt-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">Toyota Camry 2023 г.</h1>
          <p className="text-2xl text-red-600 font-semibold">17 400 000 ₸</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Рассчитать Кредит</button>

          <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
            <div><strong>city:</strong> almaty</div>
            <div><strong>probeg:</strong> 62 000 km</div>
            <div><strong>kuzov:</strong> sedan</div>
            <div><strong>privod:</strong> front</div>
            <div><strong>obiem:</strong> 2.5 (gas)</div>
            <div><strong>rul:</strong> left</div>
            <div><strong>korobka:</strong> avtomat</div>
            <div><strong>color:</strong> white metal</div>
            <div><strong>rastomojen:</strong> yes</div>
          </div>

          <p className="text-gray-800 mt-2"><strong>coment:</strong> vtoroi xozaiyn.mashina dilerskaya.nikakix povrejdenui.</p>
        </div>

        <div className="flex-1">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Toyota Camry"
            className="rounded-lg w-full h-auto object-cover"
          />
          <div className="flex gap-2 mt-2">
            <img src="https://via.placeholder.com/80" className="rounded" alt="thumb1" />
            <img src="https://via.placeholder.com/80" className="rounded" alt="thumb2" />
          </div>
        </div>
      </div>
    </div>
  );
}