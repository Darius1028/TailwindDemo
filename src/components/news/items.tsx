import { IHits, Item } from "../../slices/infoApi/data";

interface Props {
  item: Item;
}

export const Items = ({ item }: Props) => {
  return (
    <>
      {Array.isArray(item.hits)
        ? item.hits.map((elem: IHits, index: number) => (
            <a
              href='#'
              className='flex items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-3'
            >
              <img
                className='object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
                src={"https://picsum.photos/192/256?random="+index }
                alt=''
              />
              <div className='flex flex-col justify-between p-4 leading-normal'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  {elem.story_title.length > 20 ?
                    `${elem.story_title.substring(0, 20)}...` : elem.story_title
                  }
                </h5>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  {elem.comment_text.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "").substring(0, 100)}...`
                </p>
              </div>
            </a>
          ))
        : null}
    </>
  );
};

