import Link from 'next/link';
import { comment } from 'postcss';
import React from 'react';

const CommentPost = ({ commentData }) => {

    return (
        <>
            <div className='flex mx-1 mt-1'>
                <Link href={`/discuss/p/${commentData.id}`}>
                    <button className='mx-1 bg-white'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-messages"
                            width="24" height="24" viewBox="0 0 24 24"
                            strokeWidth="1.5" stroke="#1C658C" fill="none"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                            <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                        </svg>
                    </button>
                </Link>
                <div className='mx-1'>
                    {commentData.comments.length}
                </div>
            </div>
        </>
    );
}

export default CommentPost;
