

const SideCard = (props) => {
    const readingTime = props.readingTime;
    const bookmarkedItem = props.bookmarkedItem;
    return (
        <div>
             <aside className='mt-5 w-full col-span-1 px-3 mb-5 sticky top-10'>
            <div className='bg-[#a436aa1d] border border-[#b169c5] rounded-xl px-12 py-[21px]'>
                <h2 className='text-[#8444a7] text-[22px] font-bold'>Spent time on read : {readingTime}</h2>
            </div>
            <div className='bg-[#1111110D] p-[30px] mt-[24px] rounded-xl'>
                <h2 className='text-[18px] md:text-[24px] font-bold'>Bookmarked Blogs : {bookmarkedItem.length} </h2>
               {
                bookmarkedItem.map((bookmarkTitle)=> {
                    return <p key={bookmarkTitle} className="bg-white p-3 rounded-xl my-4 text-lg">{bookmarkTitle}</p>
                })
               }
            </div>
        </aside>
        </div>
    );
};

export default SideCard;