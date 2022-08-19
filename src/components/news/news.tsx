import { useState, useEffect } from "react";
import { getData, IPage } from "../../slices/infoApi/data.thunks";
import { selectors, Item } from "../../slices/infoApi/data";
import { Items } from "./items";
import { Loader } from "./../common/loader";
import { useDispatch, useSelector } from "react-redux";
import { LanguageTypes } from "./interfaces";

import { RootState } from "../../slices/rootReducer";

export const News = () => {
  const [item, setItem] = useState<Item>({
    nbHits: 0,
    page: 0,
    nbPages: 0,
    hitsPerPage: 0,
    query: "",
    hits: [],
    params: "",
  });

  const [selectValue, setSelectValue] = useState<string>(LanguageTypes[0].value);

  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => selectors.getDataState(state));
  const handleChange = (item: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(item.target.value);
    getItems({ page: 0, value: item.target.value });
  };

  useEffect(() => {
    const temp: Item = data.items.filter(
      (item: Item) => item.params === data.params
    )[0];

    if (temp) {
      setItem(temp);
    }else{
      getItems({ page: 0, value: selectValue });
    }

  }, [data]);

  const getItems = async (value: IPage) => {
    const temp: Item = data.items.filter(
      (item: Item) => item.page === value.page && item.query === value.value
    )[0];
    if (temp) {
      setItem(temp);
    } else {
      await dispatch<any>(getData(value));
    }
  };

  return (
    <>
      <div className='grid grid-cols-6 gap-4'>
        <div className='col-start-2 col-span-4'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>
            Select your news
          </label>
          <select
            value={selectValue}
            onChange={(e) => handleChange(e)}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            {LanguageTypes.map((option) => (
              <option
                key={option.value}
                value={option.value}
                onChange={(e) => handleChange}
              >
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {data.loading ? (
        <Loader />
      ) : (
        <>
          <div className={ item.hits.length === 1 ? 'grid justify-center' : 'grid md:grid-cols-1 lg:grid-cols-2'}>
            <Items item={item} />
          </div>
        </>
      )}
    </>
  );
};
