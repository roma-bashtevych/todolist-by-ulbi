import {Redirect, Route, Switch} from "react-router-dom";
import {About} from "../../pages/about/About";
import Posts from "../../pages/posts/Posts";
import {Error} from "../../pages/error/Error";
import {Post} from "../../pages/post/Post";

export const Routers = () => {
    return (
        <Switch>
            <Route path={'/about'}>
                <About/>
            </Route>
            <Route exact path={'/posts'}>
                <Posts/>
            </Route>
            <Route path={'/posts/:id'}>
                <Post/>
            </Route>
            <Route path={'/error'}>
                <Error/>
            </Route>
            <Redirect to={'/error'}/>
        </Switch>
    )
}
