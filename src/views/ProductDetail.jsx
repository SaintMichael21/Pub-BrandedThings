import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [detailPhotos, setDetailPhotos] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://phase2-aio.vercel.app/apis/pub/branded-things/products/${id}`
        );
        console.log(data.data);
        setDetailPhotos(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <>
      <section>
        <div className="mt-10 mx-10">
          <h3>Detail Product</h3>
          <div className="border-b-2 w-11 border-black"></div>
          <div className="flex flex-row gap-5 mt-5 p-3 border-2 rounded-3xl">
            <div className="flex">
              <img
                src={detailPhotos.imgUrl}
                alt="Gambar"
                className="object-cover my-auto rounded-xl h-24 w-24"
              />
            </div>
            <div className="flex flex-col my-auto w-full">
              <p>Id : {detailPhotos.id} </p>
              <p className="font-bold">{detailPhotos.name}</p>
              <p className="text-xs font-slate-500 mt-1">Description </p>
              <p className="text-xs font-slate-500 mb-1">
                {detailPhotos.description}
              </p>
              <p className="font-bold">Rp {detailPhotos.price}</p>
              {/* <p className="text-xs text-slate-500">
                Category : {detailPhotos.Category.name}
              </p> */}
              <div className="flex justify-start">
                <button className="px-2 mt-1 rounded-md bg-slate-200  active:bg-slate-300">
                  Buy
                </button>
              </div>
            </div>
            <div>
              <div className="absolute left-80">
                <label htmlFor="quantity">Quantity : </label>
                <button className="px-2 mr-2 rounded-md bg-slate-200  active:bg-slate-300">
                  -
                </button>
                <input
                  type="text"
                  defaultValue={1}
                  className="outline-none border-b-2 w-4 text-center"
                />
                <button className="px-2 ml-2 rounded-md bg-slate-200  active:bg-slate-300">
                  +
                </button>
              </div>
            </div>
            <div className="absolute right-16">
              <Link to={"/"} className="text-slate-600 text-md">
                X
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
