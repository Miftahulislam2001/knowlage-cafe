
import { FaBookmark } from "react-icons/fa";

const Card = (props) => {
    console.log(props.blog);
    const {
        authorName, authorImgUrl, coverImgUrl, publishDate, readTime, blogTitle, tagOne, tagTwo,
    } = props.blog;
    return (
        <div>
            <div className="card w-full bg-base-300 shadow-xl my-5">
                <figure>
                    <img src={coverImgUrl} alt="" />
                </figure>
                <div className="p-5">
                    <div className="flex justify-between mt-4 md:px-2 items-center">
                        <div className="flex gap-5">
                            <img
                                className="w-14 rounded-full image-full"
                                src={authorImgUrl}
                                alt=""
                            />
                            <div className="text-left ">
                                <h1 className="text-xl font-bold">{authorName}</h1>
                                <p>{publishDate}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3">
                            <p>{readTime} Min Read</p>
                            <button>
                                <FaBookmark className='text-2xl'></FaBookmark>
                            </button>
                        </div>
                    </div>
                    <h2 className="text-3xl text-left mt-5 font-bold ">{blogTitle}</h2>
                    <div className="flex my-5 text-left gap-2 ">
                        <p>{tagOne}</p>
                        <p>{tagTwo}</p>
                    </div>
                    <button

                        className="underline mr-auto block text-[#6047EC] mt-[27px]"
                    >
                        Mark as read
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;