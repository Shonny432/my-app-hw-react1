import React from "react";
import { connect } from "react-redux";

import { Button } from "../../components/Button";
import { getPosts } from "../../actions/posts";

class Posts extends React.Component {

    render() {
        const { posts, getPosts, isLoading } = this.props;

        return isLoading ? (<h3>Loading....</h3>) : 
            (
            <>
            <Button text="Get Posts" handleClick={getPosts} />
            
            <section>{
                posts.map((item) => (
                    <article key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </article>
                ))
            }</section>
            </>
            );
    
        
    }

}

const mapStateToProps = ({ album }) => ({
    isLoading: album.isLoading,
    posts: album.posts
});

const mapDispatchToProps = {
    getPosts
};

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
