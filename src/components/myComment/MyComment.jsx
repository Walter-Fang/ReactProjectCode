import './MyComment.scss'
import CommentContent from "../commentContent/CommentContent";
import HistoryComment from "../historyComment/HistoryComment";
function MyComment(props){


    return (
        <>
            <div className='container'>
                <div className='MyComment'>
                    <div className='comment'>
                        <div className='title'>
                            <h1>What do you think of my sample website?</h1>
                            <h2>Don't be stingy with your suggestions.</h2>
                        </div>
                        <div className='content'>
                            <CommentContent />
                        </div>

                    </div>
                    <div className='historyComment'>
                        <HistoryComment />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyComment