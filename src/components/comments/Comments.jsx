import "./comments.scss"
import Comment from "../comment/Comment"

function Comments(){
    return(
        <section className="comments">
            <form action="">
                <textarea name="commentBox" id="commentBox" placeholder="Join the discussion and leave a comment!"></textarea>
            </form>
            <section className="thread">
                <Comment name = "Commenter Name" content = "If you're going to lead a space frontier, it has to be government; it'll never be private enterprise. Because the space frontier is dangerous, and it's expensive, and it has unquantified risks."/>
                <section className="replies">
                    <Comment name = "Commenter Name" content = "And under those conditions, you cannot establish a capital-market evaluation of that enterprise. You can't get investors."/>
                    <Comment name = "Commenter Name" content = "When you put money directly to a problem, it makes a good headline."/>
                </section>
            </section>
            <section className="thread">
            <Comment name = "Commenter Name" content = "When I look at the universe and all the ways the universe wants to kill us, I find it hard to reconcile that with statements of beneficence."/>
                <section className="replies">

                </section>
            </section>
        </section>
    )
}

export default Comments