import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import ellipsisLoad from "../assets/Ellipsis@2x-2.8s-200px-200px.svg";

export default function Products() {
  //loading
  const [loading, setLoading] = useState(false);
  //data
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  //fitur
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  if (!sort) {
    setSort("ASC");
  }
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  // Page
  const [totalData, setTotalData] = useState("");
  const [dataQuery, setDataQuery] = useState("");

  const pageTotal = [];
  for (let index = 1; index <= totalPage; index++) {
    pageTotal.push(index);
  }
  //url
  const url = "https://phase2-aio.vercel.app";

  //fetch
  async function fetchProducts() {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${url}/apis/pub/branded-things/products?q=${search}&i=${filter}&limit=10&page=${page}&sort=${sort}`
      );
      setProducts(data.data.query);
      // console.log(data.data.query);
      // console.log(data.data.query.length);
      setDataQuery(data.data.query.length);
      setTotalData(data.data.pagination.totalRows);
      setTotalPage(data.data.pagination.totalPage);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchCategories() {
    try {
      const { data } = await axios.get(
        `${url}/apis/pub/branded-things/categories`
      );
      setCategories(data.data);
      // console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [page]);

  useEffect(() => {
    fetchProducts();
    setPage(1);
  }, [sort, filter, search, totalPage]);

  return (
    <>
      {/* Hero Start */}
      <section className="min-h-dvh">
        <div className="px-10">
          {/* Judul */}
          <div className="mt-10">
            <h1 id="balik">Our Products</h1>
            <div className="border-b-2 w-10 border-zinc-950"></div>
          </div>

          {/* Filter & Sort Start */}
          <div className="flex justify-end text-s gap-10 border-b-2 p-2">
            <div className="text-xs flex gap-2 ">
              <label htmlFor="filter">Filter by: </label>
              <select
                name="filter"
                defaultValue={""}
                onChange={(e) => {
                  setFilter(e.target.value);
                }}
              >
                <option value="" disabled>
                  -- Filter --
                </option>
                {categories.map((el) => {
                  return (
                    <option key={el.id} value={el.name}>
                      {el.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="text-xs flex gap-2 ">
              <label htmlFor="sort">Sort by: </label>
              <select
                name="sort"
                defaultValue={"ASC"}
                onChange={(e) => {
                  setSort(e.target.value);
                }}
              >
                <option value="ASC">Id Ascending</option>
                <option value="DESC">Id Descending</option>
              </select>
            </div>
          </div>
          {/* Filter & Sort End */}

          {/* Search Start */}
          <div className="opacity-70 text-slate-600 flex my-auto text-xs gap-10 justify-center mt-3">
            <input
              type="text"
              name="search"
              className="border focus:border-neutral-500 outline-none rounded p-1 w-3/5"
              placeholder="Search By Description..."
              autoComplete="off"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          {/* Search End */}

          {/* Products Start */}
          {loading ? (
            <div className="flex justify-center">
              <img src={ellipsisLoad} />
            </div>
          ) : (
            <div className="mt-4 grid-cols-5 grid">
              {products.map((product) => {
                return <Card key={product.id} product={product} />;
              })}
            </div>
          )}
          {/* Products End */}

          {/* Pagination Start */}
          <div className="mt-1">
            {totalData === 0 ? (
              <p>No Result</p>
            ) : (
              <p>
                Showing Result Data {page === 1 ? 1 : page * 10 - 9}-
                {page === 1 ? dataQuery : dataQuery + (page - 1) * 10}
              </p>
            )}
            <p>
              Total Products <span className="font-bold">{totalData}</span>
            </p>
          </div>
          <div className="flex justify-center mt-10 text-xs mb-10 gap-3">
            {/* Prev */}
            {page <= 1 ? (
              ""
            ) : (
              <div>
                <a
                  onClick={() => {
                    if (page > 1) {
                      setPage(page - 1);
                    }
                  }}
                  className="cursor-pointer"
                >
                  <p className="px-2 py-1 rounded bg-slate-200 hover:bg-slate-50 active:bg-slate-150 cursor-pointer">
                    Prev
                  </p>
                </a>
              </div>
            )}
            {/* Page */}
            {pageTotal.map((el) => {
              return (
                <a
                  key={el}
                  href="#"
                  onClick={() => {
                    setPage(el);
                  }}
                >
                  <p className="px-2 py-1 rounded bg-slate-200 hover:bg-slate-50 active:bg-slate-150 cursor-pointer">
                    {el}
                  </p>
                </a>
              );
            })}
            {/* Next */}
            {page < totalPage ? (
              <div>
                <a
                  onClick={() => {
                    if (page < totalPage) {
                      setPage(page + 1);
                    }
                  }}
                  className="cursor-pointer"
                >
                  <p className="px-2 py-1 rounded bg-slate-200 hover:bg-slate-50 active:bg-slate-150 cursor-pointer">
                    Next
                  </p>
                </a>
              </div>
            ) : (
              ""
            )}
          </div>
          {/* Pagination End */}
        </div>
      </section>
      {/* Hero End */}
    </>
  );
}
