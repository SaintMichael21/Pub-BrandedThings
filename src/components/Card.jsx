import { Link } from "react-router-dom";
export default function Card({ product }) {
  return (
    <div className="flex flex-col m-2 rounded-3xl border-2 shadow-xl hover:shadow-md duration-300">
      <div className="border-b-2">
        <img
          src={product.imgUrl}
          alt="Foto"
          className="w-full h-40 object-contain rounded-t-3xl"
        />
      </div>
      <div className="border-t-2 flex flex-col pt-5 px-5 gap-2 mb-5">
        <p className="text-slate-800 text-center truncate">{product.name}</p>
        <p className="font-bold truncate">Rp {product.price}</p>
        <p className="text-sm text-slate-500 truncate">
          Stock : {product.stock}
        </p>
        <p className="truncate text-sm">{product.description}</p>
        <Link to={`/${product.id}`}>
          <p className="text-slate-200 flex w-fit p-2 bg-sky-700 rounded-3xl my-auto hover:bg-sky-600">
            See Detail
          </p>
        </Link>
      </div>
    </div>
  );
}
